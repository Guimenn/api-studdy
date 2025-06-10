import prisma from '../../prisma/client.js';
import {
	getQuizzesOfTeacher,
	createQuiz,
	updateQuiz,
	deleteQuiz,
	getQuizzesBySubject,
	startAttempt,
	changeAttemptStatus,
	submitAnswer,
	getQuizWithQuestions,
	getQuizById,
	getAllQuizzesForStudent,
	getAllQuizzesForTeacher,
	updateQuizVisibility,
	getQuizAttemptResponses,
	getQuizResults,
	checkExistingAttempt,
} from '../models/Quiz.js';
import { quizSchema, visibilitySchema } from '../schemas/quiz.schema.js';
import { ZodError } from 'zod/v4';
import { getClassById } from '../models/Class.js';

// Controller do /teacher
// Controller para criar um novo quiz
async function createQuizController(req, res) {
	// Valida o corpo da requisição
	let quiz;
	try {
		quiz = quizSchema.parse(req.body);
	} catch (error) {
		if (error instanceof ZodError) {
			const formatted = error['issues'].map((err) => ({
				path: err.path.join('.'),
				message: err.message,
			}));

			return res.status(400).json({
				message: 'Invalid request body',
				errors: formatted,
			});
		}
	}

	// Cria o quiz
	try {
		const created = await createQuiz(
			req.user.id,
			parseInt(req.params.classId),
			parseInt(req.params.subjectId),
			quiz,
		);
		return res.status(201).json(created);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: 'Error creating quiz' });
	}
}

// Controller para atualizar completamente um quiz
async function updateQuizController(req, res) {
	// Valida o corpo da requisição
	let quiz;
	try {
		quiz = quizSchema.parse(req.body);
	} catch (error) {
		if (error instanceof ZodError) {
			const formatted = error['issues'].map((err) => ({
				path: err.path.join('.'),
				message: err.message,
			}));

			return res.status(400).json({
				message: 'Invalid request body',
				errors: formatted,
			});
		}
	}

	try {
		const updated = await updateQuiz(parseInt(req.params.quizId), quiz);
		return res.status(200).json(updated);
	} catch (error) {
		console.error(error);

		if (error.message.includes('not found')) {
			return res.status(404).json({ message: error.message });
		}

		return res.status(500).json({ message: 'Error updating quiz' });
	}
}

// Controller para atualizar a visibilidade de um quiz
async function updateQuizVisibilityController(req, res) {
	// Valida o corpo da requisição
	let visibility;
	try {
		visibility = visibilitySchema.parse(req.body);
	} catch (error) {
		if (error instanceof ZodError) {
			const formatted = error['issues'].map((err) => ({
				path: err.path.join('.'),
				message: err.message,
			}));

			return res.status(400).json({
				message: 'Invalid request body',
				errors: formatted,
			});
		}
	}

	try {
		const updated = await updateQuizVisibility(
			parseInt(req.params.quizId),
			visibility,
		);
		return res.status(200).json(updated);
	} catch (error) {
		console.error(error);

		if (error.message.includes('not found')) {
			return res.status(404).json({ message: error.message });
		}

		return res.status(500).json({ message: 'Error updating quiz' });
	}
}

async function deleteQuizController(req, res) {
	try {
		const quiz_id = parseInt(req.params.quizId);
		await deleteQuiz(quiz_id);
		return res.status(204).send();
	} catch (error) {
		const status = error.status || 500;
		const message = error.message || 'Internal server error';
		return res.status(status).json({ message });
	}
}

// Controllers do /student

// GET /student/subjects/:subjectId/quizzes
async function getQuizzesBySubjectController(req, res) {
	try {
		const { subjectId } = req.params;
		const userId = req.user.id; // Vem do JWT

		// Validar parâmetros
		if (!subjectId || isNaN(parseInt(subjectId))) {
			return res.status(400).json({
				message: 'subjectId is required and must be a number',
			});
		}

		// Buscar simulados
		const result = await getQuizzesBySubject(parseInt(subjectId), userId);

		return res.status(200).json({
			classInfo: result.context.classInfo,
			subjectInfo: result.context.subjectInfo,
			teacherInfo: result.context.teacherInfo,
			quizzes: result.quizzes,
			totalQuizzes: result.quizzes.length,
		});
	} catch (error) {
		console.error('Error fetching quizzes by subject:', error);

		if (error.message.includes('not found')) {
			return res.status(404).json({
				message: error.message,
			});
		}

		return res.status(500).json({
			message: 'Internal server error',
		});
	}
}

// GET /student/subjects/:subjectId/statistics
async function getSubjectStatisticsController(req, res) {
	try {
		const { subjectId } = req.params;
		const userId = req.user.id;

		// Buscar estatísticas gerais da matéria para o estudante
		const result = await getQuizzesBySubject(parseInt(subjectId), userId);

		const statistics = {
			totalQuizzes: result.quizzes.length,
			completedQuizzes: result.quizzes.filter(
				(q) => q.status === 'completed',
			).length,
			inProgressQuizzes: result.quizzes.filter(
				(q) => q.status === 'in_progress',
			).length,
			averageScore: 0,
			totalAttempts: result.quizzes.reduce(
				(sum, q) => sum + q.attempts_count,
				0,
			),
		};

		const completedQuizzes = result.quizzes.filter(
			(q) => q.best_score !== null,
		);
		if (completedQuizzes.length > 0) {
			statistics.averageScore =
				completedQuizzes.reduce((sum, q) => sum + q.best_score, 0) /
				completedQuizzes.length;
		}

		return res.status(200).json({
			...result.context,
			statistics,
		});
	} catch (error) {
		console.error('Error fetching subject statistics:', error);

		return res.status(500).json({
			message: 'Internal server error',
		});
	}
}

// POST /student/subjects/:subjectId/quizzes/:quizId/start
async function startAttemptController(req, res) {
	try {
		const { quizId } = req.params;
		const userId = req.user.id;
		const attempt = await startAttempt(parseInt(quizId), userId);
		return res.status(200).json(attempt);
	} catch (error) {
		console.error(error);

		if (error.message.includes('not found')) {
			return res.status(404).json({ message: error.message });
		}

		if (error.message.includes('attempt in progress')) {
			return res.status(400).json({ message: error.message });
		}

		if (error.message.includes('maximum limit')) {
			return res.status(400).json({ message: error.message });
		}

		return res.status(500).json({ message: 'Internal server error' });
	}
}

async function changeAttemptStatusController(req, res) {
	let { status } = req.body;
	const { attemptId } = req.params;

	if ((status !== 'completed' && status !== 'abandoned') || !status) {
		return res.status(400).json({
			message: 'Invalid status, must be value completed or abandoned',
		});
	}

	try {
		const attempt = await changeAttemptStatus(parseInt(attemptId), status);

		if (!attempt) {
			return res.status(404).json({ message: 'Attempt not found' });
		}

		return res
			.status(200)
			.json({ message: 'Status changed successfully to ' + status });
	} catch (error) {
		console.error('Error changing attempt status:', error);
		return res.status(500).json({ message: 'Internal server error' });
	}
}

async function submitQuizController(req, res) {
	try {
		const { attemptId } = req.params;
		const { responses } = req.body;
		const userId = req.user.id;

		if (!Array.isArray(responses) || responses.length === 0) {
			return res.status(400).json({
				error: 'Responses must be an array with at least one element',
			});
		}

		const attempt = await submitAnswer(
			parseInt(attemptId),
			responses,
			userId,
		);
		return res.status(200).json(attempt);
	} catch (error) {
		console.error('Error submitting answer:', error);
		return res.status(500).json({ message: 'Internal server error' });
	}
}

// GET /teacher/classes/:classId/subjects/:subjectId/quiz/:quizId
async function getQuizWithQuestionsController(req, res) {
	try {
		const { classId, subjectId, quizId } = req.params;
		const userId = req.user.id;

		const quiz = await getQuizWithQuestions(
			parseInt(userId),
			parseInt(classId),
			parseInt(subjectId),
			parseInt(quizId),
		);

		return res.status(200).json(quiz);
	} catch (error) {
		console.error('Error fetching quiz with questions:', error);
		if (error.message.includes('not found')) {
			return res.status(404).json({ message: error.message });
		}
		return res
			.status(500)
			.json({ message: 'Error fetching quiz with questions' });
	}
}

// GET /quiz/:quizId
async function getQuizByIdController(req, res) {
	try {
		const { quizId } = req.params;
		const quiz = await getQuizById(parseInt(quizId));
		return res.status(200).json(quiz);
	} catch (error) {
		console.error('Error fetching quiz:', error);
		if (error.message.includes('not found')) {
			return res.status(404).json({ message: error.message });
		}
		return res.status(500).json({ message: 'Error fetching quiz' });
	}
}

// GET /quizzes
async function getAllQuizzesController(req, res) {
	try {
		const userId = req.user.id;
		const userRole = req.user.role;

		let quizzes;
		if (userRole === 'Student') {
			// Primeiro, busca o ID do estudante
			const student = await prisma.student.findUnique({
				where: { user_id: userId },
				select: { id: true },
			});

			if (!student) {
				return res.status(404).json({ message: 'Student not found' });
			}

			quizzes = await getAllQuizzesForStudent(student.id);
		} else if (userRole === 'Teacher') {
			quizzes = await getAllQuizzesForTeacher(userId);
		} else {
			return res
				.status(403)
				.json({ message: 'Access denied for this role' });
		}

		return res.status(200).json(quizzes);
	} catch (error) {
		console.error('Error fetching quizzes:', error);
		if (error.message.includes('not found')) {
			return res.status(404).json({ message: error.message });
		}
		return res.status(500).json({ message: 'Error fetching quizzes' });
	}
}

// GET /student/attempt/:attemptId/responses
async function getQuizAttemptResponsesController(req, res) {
	try {
		const { attemptId } = req.params;
		const userId = req.user.id;
		const result = await getQuizAttemptResponses(attemptId, userId);
		return res.status(200).json(result);
	} catch (error) {
		if (error.message === 'Tentativa não encontrada')
			return res.status(404).json({ message: error.message });
		if (error.message === 'Sem permissão')
			return res.status(403).json({ message: error.message });
		return res.status(500).json({
			message: 'Erro ao buscar respostas da tentativa',
			error: error.message,
		});
	}
}

// GET /teacher/classes/:classId/quizzes/:quizId/results
async function getQuizResultsController(req, res) {
	try {
		const { classId, quizId } = req.params;
		const userId = req.user.id;

		// Verificar se o professor tem acesso à turma
		const teacherClass = await getClassById(parseInt(classId));
		if (!teacherClass) {
			return res.status(404).json({ error: 'Turma não encontrada' });
		}

		// Buscar o ID do professor pelo user_id
		const teacher = await prisma.teacher.findUnique({
			where: { user_id: userId },
			select: { id: true }
		});

		if (!teacher) {
			return res.status(403).json({ error: 'Professor não encontrado' });
		}

		// Verificar se o professor leciona nesta turma
		const teacherSubjects = teacherClass.teachers.find(
			(t) => t.teacher_id === teacher.id
		);

		if (!teacherSubjects) {
			return res.status(403).json({ error: 'Professor não leciona nesta turma' });
		}

		const results = await getQuizResults(parseInt(quizId), parseInt(classId));
		return res.status(200).json(results);
	} catch (error) {
		console.error('Error getting quiz results:', error);
		return res.status(500).json({ error: error.message });
	}
}

// Controller para verificar se existe uma tentativa para um quiz específico
async function checkExistingAttemptController(req, res) {
	try {
		const { quizId } = req.params;
		const userId = req.user.id;

		if (!quizId) {
			return res.status(400).json({
				message: 'Quiz ID é obrigatório',
			});
		}

		const attemptInfo = await checkExistingAttempt(userId, quizId);

		return res.status(200).json({
			message: 'Informações da tentativa obtidas com sucesso',
			data: attemptInfo,
		});
	} catch (error) {
		console.error('Erro ao verificar tentativa existente:', error);
		return res.status(500).json({
			message: 'Erro interno do servidor',
			error: error.message,
		});
	}
}

export {
	createQuizController,
	updateQuizController,
	updateQuizVisibilityController,
	deleteQuizController,
	getQuizzesBySubjectController,
	getSubjectStatisticsController,
	startAttemptController,
	changeAttemptStatusController,
	submitQuizController,
	getQuizWithQuestionsController,
	getQuizByIdController,
	getAllQuizzesController,
	getQuizAttemptResponsesController,
	getQuizResultsController,
	checkExistingAttemptController,
};

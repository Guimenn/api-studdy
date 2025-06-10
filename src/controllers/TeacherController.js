import {
	getAllTeachers,
	getTeacherById,
	createTeacher,
	updateTeacher,
	deleteTeacher,
	getTeacherByUserId,
	getTeacherStatistics,
} from '../models/Teacher.js';
import { getClassSubjectsByTeacher } from '../models/Subject.js';
import { getClassesByTeacherId, getClassById } from '../models/Class.js';
import { getQuizzesOfTeacher } from '../models/Quiz.js';
import {
	teacherSchema,
	updateTeacherSchema,
} from '../schemas/teacher.schema.js';
import { ZodError } from 'zod/v4';

// Controllers do /admin/teacher

async function getAllTeachersController(req, res) {
	try {
		const teachers = await getAllTeachers();
		return res.status(200).json(teachers);
	} catch (error) {
		console.error('Error fetching teachers:', error);
		return res.status(500).json({ message: 'Error fetching teachers' });
	}
}

async function getTeacherByIdController(req, res) {
	try {
		const teacher = await getTeacherById(parseInt(req.params.teacherId));

		if (!teacher) {
			return res.status(404).json({ message: 'Teacher not found' });
		}

		return res.status(200).json(teacher);
	} catch (error) {
		console.error('Error fetching teacher:', error);
		return res.status(500).json({ message: 'Error fetching teacher' });
	}
}

async function createTeacherController(req, res) {
	let teacher;

	try {
		teacher = teacherSchema.parse(req.body);
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
		const created = await createTeacher(teacher);
		return res.status(201).json(created);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: error.message });
	}
}

async function updateTeacherController(req, res) {
	let teacher;

	try {
		teacher = updateTeacherSchema.parse(req.body);
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
		const updated = await updateTeacher(
			parseInt(req.params.teacherId),
			teacher,
		);
		return res.status(200).json(updated);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: error.message });
	}
}

async function deleteTeacherController(req, res) {
	const id = req.params.teacherId;

	try {
		// Verifica se o id é número válido
		const teacherId = parseInt(id);
		if (isNaN(teacherId) || teacherId <= 0) {
			return res.status(400).json({ error: 'Teacher ID is invalid' });
		}

		// Executa a deleção no model
		await deleteTeacher(teacherId);

		// Retorna sucesso
		return res.status(204).send();
	} catch (error) {
		console.error(error);

		// Erro customizado para professor não encontrado
		if (error.message.includes('not found')) {
			return res.status(404).json({ error: error.message });
		}

		return res.status(500).json({ error: 'Internal server error' });
	}
}

// Controllers do /teacher

// Controller para obter as turmas de um professor
async function getTeacherClassesController(req, res) {
	try {
		console.log(req.user.id);
		const teacherClasses = await getClassesByTeacherId(
			parseInt(req.user.id),
		);
		return res.status(200).json(teacherClasses);
	} catch (error) {
		console.error(error);
		if (error.message.includes('not found')) {
			return res.status(404).json({ message: error.message });
		}
		return res
			.status(500)
			.json({ message: 'Error fetching teacher classes' });
	}
}

// Controller para obter as matérias que ele leciona naquela turma
async function getClassSubjectsByTeacherController(req, res) {
	try {
		const teacherSubjects = await getClassSubjectsByTeacher(
			parseInt(req.params.classId),
			parseInt(req.user.id),
		);
		return res.status(200).json(teacherSubjects);
	} catch (error) {
		console.error(error);
		if (error.message.includes('not found')) {
			return res.status(404).json({ message: error.message });
		}
		return res
			.status(500)
			.json({ message: 'Error fetching teacher subjects' });
	}
}

// Controller para obter os quizzes de uma materia
async function getSubjectQuizzesController(req, res) {
	try {
		const quizzes = await getQuizzesOfTeacher(
			parseInt(req.user.id),
			parseInt(req.params.classId),
			parseInt(req.params.subjectId),
		);
		return res.status(200).json(quizzes);
	} catch (error) {
		console.error(error);
		if (error.message.includes('not found')) {
			return res.status(404).json({ message: error.message });
		}
		return res
			.status(500)
			.json({ message: 'Error fetching teacher subjects' });
	}
}

// Obter uma turma específica de um professor
async function getTeacherClassByIdController(req, res) {
	try {
		const userId = req.user.id;
		const classId = parseInt(req.params.classId);

		if (isNaN(classId)) {
			return res.status(400).json({ error: 'ID da turma inválido' });
		}

		// Primeiro, obtém o ID do professor a partir do ID do usuário
		const teacher = await getTeacherByUserId(userId);

		if (!teacher) {
			return res.status(404).json({ error: 'Professor não encontrado' });
		}

		const teacherClass = await getClassById(classId);

		if (!teacherClass) {
			return res.status(404).json({ error: 'Turma não encontrada' });
		}

		// Verifica se o professor leciona nessa turma
		const teacherSubjects = teacherClass.teachers.find(
			(t) => t.teacher_id === teacher.id,
		);

		if (!teacherSubjects) {
			return res
				.status(403)
				.json({ error: 'Professor não leciona nesta turma' });
		}

		// Obtém os quizzes da turma para cada matéria que o professor leciona
		const quizzes = [];
		for (const subject of teacherSubjects.subjects) {
			const subjectQuizzes = await getQuizzesOfTeacher(
				userId,
				classId,
				subject.id,
			);
			quizzes.push(...subjectQuizzes);
		}

		return res.status(200).json({
			id: teacherClass.id,
			name: teacherClass.name,
			shift: teacherClass.shift,
			course: teacherClass.course,
			students: teacherClass.students,
			teachers: teacherClass.teachers,
			quizzes,
		});
	} catch (error) {
		console.error('Error getting teacher class:', error);
		return res.status(500).json({ error: error.message });
	}
}

// Obter as estatísticas de um professor
async function getTeacherStatisticsController(req, res) {
	try {
		const statistics = await getTeacherStatistics(req.user.id);
		return res.status(200).json(statistics);
	} catch (error) {
		console.error(error);
		if (error.message.includes('not found')) {
			return res.status(404).json({ message: error.message });
		}
		return res
			.status(500)
			.json({ message: 'Error fetching teacher statistics' });
	}
}

export {
	getAllTeachersController,
	getTeacherByIdController,
	createTeacherController,
	updateTeacherController,
	deleteTeacherController,
	getTeacherClassesController,
	getClassSubjectsByTeacherController,
	getSubjectQuizzesController,
	getTeacherClassByIdController,
	getTeacherStatisticsController,
};

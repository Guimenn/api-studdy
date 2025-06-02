import prisma from '../../prisma/client.js';
import { createQuestion } from './Question.js';

// Busca os quizzes relacionados ao professor, turma e disciplina
async function getQuizzesOfTeacher(userId, classId, subjectId) {
	try {
		const teacher = await prisma.teacher.findUnique({
			where: { user_id: userId },
			select: { id: true },
		});

		if (!teacher) {
			throw new Error('Teacher not found');
		}

		// Busca os quizzes relacionados ao professor, turma e disciplina
		const quizzes = await prisma.quiz.findMany({
			where: {
				teacher_subject_class: {
					class: { id: classId },
					teacher_subject: {
						subject: { id: subjectId },
						teacher_id: teacher.id,
					},
				},
			},
			select: {
				id: true,
				title: true,
				duration_minutes: true,
				visibility: true,
			},
		});

		return quizzes;
	} catch (error) {
		throw error;
	}
}

// Cria um novo quiz
async function createQuiz(userId, classId, subjectId, quizData) {
	try {
		const teacher = await prisma.teacher.findUnique({
			where: { user_id: userId },
			select: { id: true },
		});

		if (!teacher) {
			throw new Error('Teacher not found');
		}

		// Adiciona o professor, turma e disciplina ao objeto quiz
		const quiz = {
			...quizData,
			teacher_subject_class_id:
				await prisma.relationship_teacher_subject_class
					.findFirst({
						where: {
							class_id: classId,
							teacher_subject: {
								subject_id: subjectId,
								teacher_id: teacher.id,
							},
						},
						select: { id: true },
					})
					.then((result) => result.id),
		};

		// Realiza uma transação para criar o quiz
		return await prisma.$transaction(async (tx) => {
			// Calcula o total de pontos com base nos pontos das questões
			let totalPoints = 0;
			quiz.questions.forEach((question) => {
				totalPoints += question.points;
			});

			// Cria o quiz na tabela Quiz
			const createdQuiz = await tx.quiz.create({
				data: {
					title: quiz.title,
					duration_minutes: quiz.duration_minutes,
					max_points: totalPoints,
					max_attempt: quiz.max_attempts,
					visibility: quiz.visibility || 'draft',
					teacher_subject_class_id: quiz.teacher_subject_class_id,
				},
			});

			// Para cada questão, cria a questão na tabela Question
			for (const questionData of quiz.questions) {
				await createQuestion(tx, questionData, createdQuiz.id);
			}

			// Retorna o quiz criado
			return createdQuiz;
		});
	} catch (error) {
		console.log(error);
		throw error;
	}
}

// Atualiza completamente um quiz
async function updateQuiz(quizId, quizData) {
	try {
		const quiz = await prisma.quiz.findUnique({
			where: { id: quizId },
			select: { id: true },
		});

		if (!quiz) {
			throw new Error('Quiz not found');
		}

		return await prisma.$transaction(async (tx) => {
			// 1. Coleta IDs das questões antigas
			const oldQuestions = await tx.question.findMany({
				where: { quiz_id: quizId },
				select: { id: true },
			});

			// 2. Apaga todas as alternativas associadas
			for (const question of oldQuestions) {
				await tx.alternative.deleteMany({
					where: { question_id: question.id },
				});
			}

			// 3. Apaga todas as questões antigas
			await tx.question.deleteMany({
				where: { quiz_id: quizId },
			});

			// 4. Recalcula total de pontos
			const totalPoints = quizData.questions.reduce(
				(sum, q) => sum + q.points,
				0,
			);

			// 5. Atualiza apenas os campos mutáveis do quiz
			const updatedQuiz = await tx.quiz.update({
				where: { id: quizId },
				data: {
					title: quizData.title,
					duration_minutes: quizData.duration_minutes,
					max_points: totalPoints,
					max_attempt: quizData.max_attempts,
					visibility: quizData.visibility || 'draft',
				},
			});

			// 6. Insere as novas questões e alternativas
			for (const questionData of quizData.questions) {
				await createQuestion(tx, questionData, updatedQuiz.id);
			}

			return updatedQuiz;
		});
	} catch (error) {
		throw error;
	}
}

// Atualiza a visibilidade de um quiz
async function updateQuizVisibility(quizId, visibility) {
	try {
		const updated = await prisma.quiz.update({
			where: { id: quizId },
			data: { visibility: visibility.visibility },
			select: {
				id: true,
				title: true,
				duration_minutes: true,
				visibility: true,
			},
		});

		if (!updated) {
			throw new Error('Quiz not found');
		}

		return updated;
	} catch (error) {
		throw error;
	}
}

// Deleta um quiz
async function deleteQuiz(quizId) {
	try {
		const deleted = await prisma.quiz.delete({
			where: { id: quizId },
		});

		return deleted;
	} catch (error) {
		throw error;
	}
}

export {
	getQuizzesOfTeacher,
	createQuiz,
	updateQuiz,
	updateQuizVisibility,
	deleteQuiz,
};

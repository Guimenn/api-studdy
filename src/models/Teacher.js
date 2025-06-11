import prisma from '../../prisma/client.js';
import {
	countStudentsByTeacherId,
	getQuizCompletionRate,
	getClassAverageScoreGlobal,
	getPerformanceBySubject,
} from './Statistics.js';
import { createUser, updateUser } from './User.js';
import { formatDateBR } from '../utils/parseDate.js';

/**
 * Model para operações relacionadas a professores
 * Gerencia CRUD de professores, incluindo dados do usuário e disciplinas lecionadas
 * Integra com estatísticas de turmas e desempenho dos alunos
 */

/**
 * Obtém todos os professores do sistema
 * @returns {Array} - Lista de professores com dados do usuário e disciplinas
 */
async function getAllTeachers() {
	const teachers = await prisma.teacher.findMany({
		select: {
			id: true,
			user: {
				select: {
					id: true,
					name: true,
					email: true,
					birth_date: true,
					cpf: true,
					role: true,
				},
			},
			teacher_subjects: {
				select: {
					subject: {
						select: {
							id: true,
							name: true,
						},
					},
				},
			},
		},
	});

	return teachers.map((teacher) => ({
		...teacher,
		user: {
			...teacher.user,
			birth_date: formatDateBR(teacher.user.birth_date),
		},
	}));
}

async function getTeacherById(teacherId) {
	try {
		const teacher = await prisma.teacher.findUnique({
			where: { id: teacherId },
			select: {
				id: true,
				user: {
					select: {
						name: true,
						email: true,
						birth_date: true,
						cpf: true,
						role: true,
					},
				},
				teacher_subjects: {
					select: {
						subject: {
							select: {
								id: true,
								name: true,
							},
						},
					},
				},
			},
		});

		if (!teacher) return null;

		return {
			...teacher,
			user: {
				...teacher.user,
				birth_date: formatDateBR(teacher.user.birth_date),
			},
		};
	} catch (error) {
		throw error;
	}
}

async function createTeacher(teacherData) {
	try {
		const { user, teacher } = teacherData;
		const createdTeacher = await prisma.$transaction(async (tx) => {
			if (user.role !== 'Teacher')
				throw new Error('User is not a teacher');

			const createdUser = await createUser(user, tx);
			const user_id = createdUser.id;

			if (!user_id) throw new Error('Error creating user');

			const subjectIds = teacher.subjects.map((subject) => subject.id);

			const createdTeacher = await tx.teacher.create({
				data: { user_id },
			});

			// 2.1. Verificar se todos os subjectIds existem
			const existingSubjects = await tx.subject.findMany({
				where: { id: { in: subjectIds } },
				select: { id: true },
			});

			const existingSubjectIds = existingSubjects.map((s) => s.id);

			// Verifica se há algum ID inválido
			const invalidSubjectIds = subjectIds.filter(
				(id) => !existingSubjectIds.includes(id),
			);

			if (invalidSubjectIds.length > 0) {
				throw new Error(
					`This subjects do not exist: ${invalidSubjectIds.join(', ')}`,
				);
			}

			// 3. Define os relacionamentos entre professor e matérias
			const teacherSubjectData = subjectIds.map((subject_id) => ({
				teacher_id: createdTeacher.id,
				subject_id,
			}));
			await tx.relationship_teacher_subject.createMany({
				data: subjectIds.map((subject_id) => ({
					teacher_id: createdTeacher.id,
					subject_id,
				})),
			});

			const teacherWithRelations = await tx.teacher.findUnique({
				where: { id: createdTeacher.id },
				select: {
					id: true,
					user: {
						select: {
							id: true,
							name: true,
							email: true,
							cpf: true,
							birth_date: true,
							role: true,
						},
					},
					teacher_subjects: {
						select: {
							subject: {
								select: {
									id: true,
									name: true,
								},
							},
						},
					},
				},
			});

			return {
				id: teacherWithRelations.id,
				user_id: teacherWithRelations.user_id,
				user: {
					...teacherWithRelations.user,
					birth_date: formatDateBR(
						teacherWithRelations.user.birth_date,
					),
				},
				subjects: teacherWithRelations.teacher_subjects.map(
					(r) => r.subject,
				),
			};
		});

		return createdTeacher;
	} catch (error) {
		if (error.code === 'P2002') {
			const target = error.meta?.target;
			let message = 'Duplicate entry';

			if (target?.includes('email')) {
				message = 'The email address is already in use.';
			} else if (target?.includes('cpf')) {
				message = 'The CPF is already in use.';
			}

			throw new Error(message);
		}
		throw error;
	}
}

async function updateTeacher(teacherId, teacherData) {
	const { user, teacher } = teacherData;

	try {
		if (user.role !== 'Teacher') throw new Error('User is not a teacher');

		const updatedTeacher = await prisma.$transaction(async (tx) => {
			const existingTeacher = await tx.teacher.findUnique({
				where: { id: teacherId },
			});
			if (!existingTeacher) throw new Error('Teacher not found');

			if (user) await updateUser(tx, existingTeacher.user_id, user);

			if (teacher?.subjects) {
				const subjectIds = teacher.subjects.map((s) => s.id);

				await tx.relationship_teacher_subject.deleteMany({
					where: { teacher_id: teacherId },
				});

				await tx.relationship_teacher_subject.createMany({
					data: subjectIds.map((subject_id) => ({
						teacher_id: teacherId,
						subject_id,
					})),
				});
			}

			const teacherWithRelations = await tx.teacher.findUnique({
				where: { id: teacherId },
				select: {
					id: true,
					user: {
						select: {
							id: true,
							name: true,
							email: true,
							cpf: true,
							birth_date: true,
							role: true,
						},
					},
					teacher_subjects: {
						select: {
							subject: {
								select: {
									id: true,
									name: true,
								},
							},
						},
					},
				},
			});

			return {
				id: teacherWithRelations.id,
				user_id: teacherWithRelations.user_id,
				user: {
					...teacherWithRelations.user,
					birth_date: formatDateBR(
						teacherWithRelations.user.birth_date,
					),
				},
				subjects: teacherWithRelations.teacher_subjects.map(
					(r) => r.subject,
				),
			};
		});
		return updatedTeacher;
	} catch (error) {
		if (error.code === 'P2002') {
			const target = error.meta?.target;
			let message = 'Duplicate entry';

			if (target?.includes('email')) {
				message = 'The email address is already in use.';
			} else if (target?.includes('cpf')) {
				message = 'The CPF is already in use.';
			}

			throw new Error(message);
		}

		throw error;
	}
}

async function deleteTeacher(teacherId) {
	try {
		const teacher = await prisma.teacher.findUnique({
			where: { id: teacherId },
			select: {
				user: {
					select: {
						id: true,
						role: true,
					},
				},
			},
		});

		if (!teacher) throw new Error('Teacher not found');

		return await prisma.user.delete({
			where: { id: teacher.user.id },
		});
	} catch (error) {
		throw error;
	}
}

async function getTeacherByUserId(userId) {
	try {
		const teacher = await prisma.teacher.findUnique({
			where: { user_id: userId },
			select: { id: true },
		});

		return teacher;
	} catch (error) {
		throw error;
	}
}

// Função principal que busca todas as estatísticas do professor
async function getTeacherStatistics(userId) {
	const teacher = await prisma.teacher.findUnique({
		where: {
			user_id: userId,
		},
	});

	if (!teacher) {
		throw new Error('Teacher not found');
	}

	const teacherId = teacher.id;

	// Consulta as estatísticas
	const [
		totalStudents,
		quizCompletionRate,
		classAverageScoreGlobal,
		performanceBySubject,
	] = await Promise.all([
		countStudentsByTeacherId(teacherId),
		getQuizCompletionRate(teacherId),
		getClassAverageScoreGlobal(teacherId),
		getPerformanceBySubject(teacherId),
	]);

	return {
		totalStudents,
		quizCompletionRate: parseFloat(quizCompletionRate.toFixed(1)),
		classAverageScoreGlobal: parseFloat(classAverageScoreGlobal.toFixed(1)),
		performanceBySubject,
	};
}

export {
	getAllTeachers,
	getTeacherById,
	createTeacher,
	updateTeacher,
	deleteTeacher,
	getTeacherByUserId,
	getTeacherStatistics,
};

import prisma from '../../prisma/client.js';
import { createUser, updateUser } from './User.js';

async function getAllTeachers() {
	return await prisma.teacher.findMany({
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
}

async function getTeacherById(teacherId) {
	try {
		return await prisma.teacher.findUnique({
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
	} catch (error) {
		console.error('Error fetching teacher:', error);
		throw error;
	}
}

async function createTeacher(teacherData) {
	try {
		const { user, teacher } = teacherData;
		const createdTeacher = await prisma.$transaction(async (tx) => {
			if (user.role !== 'Teacher') {
				throw new Error('User is not a teacher');
			}

			// 1. Cria o usuário
			const createdUser = await createUser(user, tx);
			const user_id = createdUser.id;

			if (!user_id) {
				throw new Error('Error creating user');
			}

			const subjectIds = teacher.subjects.map((subject) => subject.id);

			// 2. Cria o professor
			const createdTeacher = await tx.teacher.create({
				data: { user_id },
			});

			// 3. Define os relacionamentos entre professor e matérias
			const teacherSubjectData = subjectIds.map((subject_id) => ({
				teacher_id: createdTeacher.id,
				subject_id,
			}));
			await tx.relationship_teacher_subject.createMany({
				data: teacherSubjectData,
			});

			// 4. Busca o professor com usuário e matérias associadas para retorno
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

			// 5. Formatar o retorno para ficar mais limpo (matérias apenas como array simples)
			return {
				id: teacherWithRelations.id,
				user_id: teacherWithRelations.user_id,
				user: teacherWithRelations.user,
				subjects: teacherWithRelations.teacher_subjects.map(
					(r) => r.subject,
				),
			};
		});

		return createdTeacher;
	} catch (error) {
		if (error.code === 'P2002') {
			const target = error.meta?.target;
			let message = 'Dados duplicados.';

			if (target?.includes('email')) {
				message = 'O e-mail informado já está em uso.';
			} else if (target?.includes('cpf')) {
				message = 'O CPF informado já está em uso.';
			}

			throw new Error(message);
		}
		throw error;
	}
}

async function updateTeacher(teacherId, teacherData) {
	const { user, teacher } = teacherData;

	try {
		if (user.role !== 'Teacher') {
			throw new Error('User is not a teacher');
		}

		const updatedTeacher = await prisma.$transaction(async (tx) => {
			// 1. Busca professor
			const existingTeacher = await tx.teacher.findUnique({
				where: { id: teacherId },
			});

			if (!existingTeacher) {
				throw new Error('Teacher not found');
			}

			// 2. Atualiza user
			if (user) {
				await updateUser(tx, existingTeacher.user_id, user);
			}

			// 3. Atualiza as matérias
			if (teacher?.subjects) {
				const subjectIds = teacher.subjects.map((s) => s.id);

				// Remove antigas
				await tx.relationship_teacher_subject.deleteMany({
					where: { teacher_id: teacherId },
				});

				// Adiciona novas
				await tx.relationship_teacher_subject.createMany({
					data: subjectIds.map((subject_id) => ({
						teacher_id: teacherId,
						subject_id,
					})),
				});
			}

			// 4. Busca professor com relações
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

			// 5. Formatar o retorno para ficar mais limpo (matérias apenas como array simples)
			return {
				id: teacherWithRelations.id,
				user_id: teacherWithRelations.user_id,
				user: teacherWithRelations.user,
				subjects: teacherWithRelations.teacher_subjects.map(
					(r) => r.subject,
				),
			};
		});
		return updatedTeacher;
	} catch (error) {
		if (error.code === 'P2002') {
			const target = error.meta?.target;
			let message = 'Dados duplicados.';

			if (target?.includes('email')) {
				message = 'O e-mail informado já está em uso.';
			} else if (target?.includes('cpf')) {
				message = 'O CPF informado já está em uso.';
			}

			throw new Error(message);
		}

		throw error;
	}
}

async function deleteTeacher(teacherId) {
	try {
		// 1. Buscar o professor com o user_id
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

		if (!teacher) {
			throw new Error('Teacher not found');
		}

		const { id: user_id } = teacher.user;

		// 3. Deletar o usuário (e por cascata, o professor)
		return await prisma.user.delete({
			where: { id: user_id },
		});
	} catch (error) {
		throw error;
	}
}

export {
	getAllTeachers,
	getTeacherById,
	createTeacher,
	updateTeacher,
	deleteTeacher,
};

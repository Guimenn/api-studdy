import prisma from '../../prisma/client.js';
import { createUser, updateUser } from './User.js';
import { generateEnrollment } from '../utils/generateEnrollment.js';

async function getAllStudents() {
	return await prisma.student.findMany({
		select: {
			id: true,
			enrollment: true,
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
			class: {
				select: {
					id: true,
					name: true,
					course: true,
				},
			},
		},
	});
}

async function getStudentById(studentId) {
	try {
		return await prisma.student.findUnique({
			where: { id: studentId },
			select: {
				id: true,
				enrollment: true,
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
				class: {
					select: {
						id: true,
						name: true,
						course: true,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error fetching student:', error);
		throw error;
	}
}

async function createStudent(studentData) {
	try {
		const { user, student } = studentData;
		const createdStudent = await prisma.$transaction(async (tx) => {
			// 1. Verifica se a turma do aluno existe
			const schoolClass = await tx.class.findUnique({
				where: { id: student.class_id },
			});

			if (!schoolClass) {
				throw new Error('Class not found');
			}

			if (user.role !== 'Student') {
				throw new Error('User is not a student');
			}

			// 2. Cria o usuário
			const createdUser = await createUser(user, tx);
			const user_id = createdUser.id;

			if (!user_id) {
				throw new Error('Error creating user');
			}

			// 3. Cria o aluno
			const studentData = {
				...student,
				user_id,
				enrollment: generateEnrollment(user_id),
			};

			return await tx.student.create({
				data: studentData,
			});
		});
		return await prisma.student.findUnique({
			where: { id: createdStudent.id },
			select: {
				id: true,
				enrollment: true,
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
				class: {
					select: {
						id: true,
						name: true,
						shift: true,
						course: true,
					},
				},
			},
		});
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

async function updateStudent(studentId, studentData) {
	const { user, student } = studentData;

	if (user.role !== 'Student') {
		throw new Error('User is not a student');
	}

	try {
		const updatedStudent = await prisma.$transaction(async (tx) => {
			// 1. Busca estudante existente
			const existingStudent = await tx.student.findUnique({
				where: { id: studentId },
			});

			if (!existingStudent) {
				throw new Error('Student not found');
			}

			// 2. Atualiza user
			if (user) {
				await updateUser(tx, existingStudent.user_id, user);
			}

			// 3. Atualiza dados do estudante (por exemplo, class_id)
			if (student?.class_id) {
				const classExists = await tx.class.findUnique({
					where: { id: student.class_id },
				});
				if (!classExists) {
					throw new Error('Class not found');
				}

				await tx.student.update({
					where: { id: studentId },
					data: {
						class_id: student.class_id,
					},
				});
			}

			// 4. Retorna estudante com relações
			const studentWithRelations = await tx.student.findUnique({
				where: { id: studentId },
				select: {
					id: true,
					enrollment: true,
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
					class: {
						select: {
							id: true,
							name: true,
							shift: true,
							course: true,
						},
					},
				},
			});

			return studentWithRelations;
		});

		return updatedStudent;
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

async function deleteStudent(studentId) {
	try {
		const student = await prisma.student.findUnique({
			where: { id: studentId },
			select: {
				user: {
					select: {
						id: true,
						role: true,
					},
				},
			},
		});

		if (!student) {
			throw new Error('Student not found');
		}

		const { id: userId } = student.user;

		await prisma.user.delete({ where: { id: userId } });
	} catch (error) {
		throw error;
	}
}

export {
	getAllStudents,
	getStudentById,
	createStudent,
	updateStudent,
	deleteStudent,
};

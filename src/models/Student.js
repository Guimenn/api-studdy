import prisma from '../../prisma/client.js';
import { studentSchema } from '../schemas/schemas.js';
import { createUser } from './User.js';
import { generateEnrollment } from '../utils/generateEnrollment.js';

async function getAllStudents() {
	try {
		const students = await prisma.student.findMany();
		return students;
	} catch (error) {
		console.error('Error fetching students:', error);
		throw error;
	}
}

async function getStudentById(id) {
	try {
		const student = await prisma.student.findUnique({
			where: { id: id },
		});

		if (!student) {
			console.error('Student not found');
			return null;
		}

		return student;
	} catch (error) {
		console.error('Error fetching student:', error);
		throw error;
	}
}

async function createStudent(studentData) {
	try {
		const { user, student } = studentData;
		const createdStudent = await prisma.$transaction(async (tx) => {
			// 1. Cria o usuário
			const user_id = await createUser(user, tx).then(
				(createdUser) => createdUser.id,
			);

			if (!user_id) {
				console.error('Error creating user while creating student');
				throw new Error('Error creating user while creating student');
			}

			// 2. valida os dados
			const validStudent = studentSchema.safeParse({
				user_id,
				class_id: student.class_id,
			});

			if (!validStudent.success) {
				throw new Error(validStudent.error.message);
			}

			// 3. Verifica se a turma do aluno existe
			const schoolClass = await tx.class.findUnique({
				where: { id: validStudent.data.class_id },
			});

			if (!schoolClass) {
				console.error('Class not found while creating student');
				throw new Error('Class not found while creating student');
			}

			// 4. Cria o aluno
			const studentData = {
				...validStudent.data,
				enrollment: generateEnrollment(validStudent.data.user_id),
			};

			return await tx.student.create({
				data: studentData,
			});
		});
		return createdStudent;
	} catch (error) {
		throw error;
	}
}

async function updateStudentClass(student_id, class_id) {
	try {
		// Verifica se o aluno e a turma existem
		const student = await prisma.student.findUnique({
			where: { id: student_id },
			select: { id: true },
		});

		if (!student) {
			console.error('Student not found');
			throw new Error('Student not found');
		}

		const schoolClass = await prisma.class.findUnique({
			where: { id: class_id },
			select: { id: true },
		});

		if (!schoolClass) {
			console.error('Class not found');
			throw new Error('Class not found');
		}

		// Atualiza a turma do aluno
		const updatedStudent = await prisma.student.update({
			where: { id: student_id },
			data: { class_id: class_id },
		});

		return updatedStudent;
	} catch (error) {
		console.error('Error updating student class:', error);
		throw error;
	}
}

async function deleteStudentAccount(user_id) {
	try {
		// Verifica se o user existe
		const user = await prisma.user.findUnique({
			where: { id: user_id },
			select: { id: true, role: true },
		});

		if (!user) {
			console.error('User not found');
			throw new Error('User not found');
		}

		if (user.role !== 'Student') {
			console.error('User is not a student');
			throw new Error('User is not a student');
		}

		// Deleta o user do estudante
		return await prisma.user.delete({
			where: { id: user_id },
		});
	} catch (error) {
		console.error('Error deleting student:', error);
		throw error;
	}
}

export {
	getAllStudents,
	getStudentById,
	createStudent,
	updateStudentClass,
	deleteStudentAccount,
};

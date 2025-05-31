import prisma from '../../prisma/client.js';
import { teacherSchema, subjectListSchema } from '../schemas/schemas.js';
import { createUser } from './User.js';

async function getAllTeachers() {
	try {
		const teachers = await prisma.teacher.findMany();
		return teachers;
	} catch (error) {
		console.error('Error fetching teachers:', error);
		throw error;
	}
}

async function getTeacherById(teacher_id) {
	try {
		const teacher = await prisma.teacher.findUnique({
			where: { id: teacher_id },
		});
		return teacher;
	} catch (error) {
		console.error('Error fetching teacher:', error);
		throw error;
	}
}

async function createTeacher(teacherData) {
	try {
		const { user, teacher } = teacherData;
		const createdTeacher = await prisma.$transaction(async (tx) => {
			// 1. Cria o usuário
			const user_id = await createUser(user, tx).then(
				(createdUser) => createdUser.id,
			);

			if (!user_id) {
				console.error('Error creating user while creating teacher');
				throw new Error('Error creating user while creating teacher');
			}

			// 2. valida os dados
			const validTeacher = teacherSchema.safeParse(teacher);

			if (!validTeacher.success) {
				console.error('Invalid Teacher data:', validTeacher.error);
				throw new Error(validTeacher.error.message);
			}

			const subjectIds = validTeacher.data.subjects;

			// 3. Verifica se todas as materias existem
			const foundSubjects = await tx.subject.findMany({
				where: { id: { in: subjectIds } },
			});

			if (foundSubjects.length !== subjectIds.length) {
				const foundIds = foundSubjects.map((s) => s.id);
				const missingIds = subjectIds.filter(
					(s) => !foundIds.includes(s),
				);
				console.error(`Invalid subject(s): ${missingIds.join(', ')}`);
				throw new Error(`Invalid subject(s): ${missingIds.join(', ')}`);
			}

			// 4. Cria o professor
			const createdTeacher = await tx.teacher.create({
				data: { user_id },
			});

			// 5. Define os relacionamentos entre professor matéria
			const teacherSubject = subjectIds.map((subject_id) => ({
				teacher_id: createdTeacher.id,
				subject_id,
			}));

			await tx.relationship_teacher_subject.createMany({
				data: teacherSubject,
			});

			return createdTeacher;
		});
		return createdTeacher;
	} catch (error) {
		console.error('Error creating user:', error);
		throw error;
	}
}

async function updateTeacherSubject(teacher_id, teacherData) {
	const { subjects } = teacherData;
	try {
		return await prisma.$transaction(async (tx) => {
			// 1. Verifica se o professor existe
			const teacher = await tx.teacher.findUnique({
				where: { id: teacher_id },
				select: { id: true },
			});
			if (!teacher) {
				throw new Error('Teacher not found');
			}

			// 2. Valida o array de IDs
			const valid = subjectListSchema.safeParse(subjects);
			if (!valid.success) {
				throw new Error(valid.error.message);
			}
			const subjectIds = valid.data;

			// 3. Confere existência das matérias no banco
			const found = await tx.subject.findMany({
				where: { id: { in: subjectIds } },
				select: { id: true },
			});
			const foundIds = found.map((s) => s.id);
			if (foundIds.length !== subjectIds.length) {
				const missing = subjectIds.filter(
					(id) => !foundIds.includes(id),
				);
				throw new Error(`Invalid subject(s): ${missing.join(', ')}`);
			}

			// 4) Relações atuais
			const current = await tx.relationship_teacher_subject.findMany({
				where: { teacher_id },
				select: { subject_id: true },
			});
			const currentIds = current.map((r) => r.subject_id);

			// 5) Calcula diferenças
			const toAdd = subjectIds.filter((id) => !currentIds.includes(id));
			const toRemove = currentIds.filter(
				(id) => !subjectIds.includes(id),
			);

			// 6) Aplica remoções e inserções
			if (toRemove.length) {
				await tx.relationship_teacher_subject.deleteMany({
					where: {
						teacher_id,
						subject_id: { in: toRemove },
					},
				});
			}
			if (toAdd.length) {
				const data = toAdd.map((subject_id) => ({
					teacher_id,
					subject_id,
				}));
				await tx.relationship_teacher_subject.createMany({ data });
			}

			return { added: toAdd, removed: toRemove };
		});
	} catch (err) {
		console.error('Error updating teacher subjects:', err);
		throw err;
	}
}

async function deleteTeacherAccount(user_id) {
	try {
		const user = await prisma.user.findUnique({
			where: { id: user_id },
			select: { id: true, role: true },
		});

		if (!user) {
			console.error('User not found');
			throw new Error('User not found');
		}

		if (user.role !== 'Teacher') {
			console.error('User is not a teacher');
			throw new Error('User is not a teacher');
		}

		return await prisma.user.delete({
			where: { id: user_id },
		});
	} catch (error) {
		console.error('Error deleting user:', error);
		throw error;
	}
}

export {
	getAllTeachers,
	getTeacherById,
	createTeacher,
	updateTeacherSubject,
	deleteTeacherAccount,
};

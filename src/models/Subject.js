import prisma from '../../prisma/client.js';

/**
 * Model para operações relacionadas a disciplinas/matérias
 * Gerencia CRUD de disciplinas do sistema educacional
 * Disciplinas são associadas a professores, turmas e conteúdos educacionais
 */

/**
 * Obtém todas as disciplinas do sistema
 * @returns {Array} - Lista de disciplinas com ID e nome
 */
async function getAllSubjects() {
	return await prisma.subject.findMany({
		select: {
			id: true,
			name: true,
		},
	});
}

async function getSubjectById(subject_id) {
	try {
		const subject = await prisma.subject.findUnique({
			where: { id: subject_id },
			select: {
				id: true,
				name: true,
			},
		});
		return subject;
	} catch (error) {
		console.log('Error fetching subject:', error);
		throw error;
	}
}

async function createSubject(subjectData) {
	try {
		return await prisma.subject.create({
			data: subjectData,
			select: {
				id: true,
				name: true,
			},
		});
	} catch (error) {
		throw error;
	}
}

async function updateSubject(subject_id, subjectData) {
	try {
		const updatedSubject = await prisma.subject.update({
			where: { id: subject_id },
			data: subjectData,
			select: {
				id: true,
				name: true,
			},
		});
		return updatedSubject;
	} catch (error) {
		if (error.code === 'P2002') {
			throw { status: 409, message: 'Subject already exists' };
		}

		if (error.code === 'P2025') {
			throw { status: 404, message: 'Subject not found' };
		}

		console.error('Error updating subject:', error);
		throw { status: 500, message: 'Error updating subject' };
	}
}

async function deleteSubject(subject_id) {
	try {
		const deletedSubject = await prisma.subject.delete({
			where: { id: subject_id },
		});
		return deletedSubject;
	} catch (error) {
		if (error.code === 'P2025') {
			throw { status: 404, message: 'Subject not found' };
		}

		console.error('Error deleting subject:', error);
		throw { status: 500, message: 'Error deleting subject' };
	}
}

async function getClassSubjectsByTeacher(classId, userId) {
	try {
		const teacher = await prisma.teacher.findUnique({
			where: { user_id: userId },
			select: { id: true },
		});

		if (!teacher) {
			throw new Error('Teacher not found');
		}

		const subjects =
			await prisma.relationship_teacher_subject_class.findMany({
				where: {
					class_id: classId,
					teacher_subject: { teacher_id: teacher.id },
				},
				select: {
					teacher_subject: {
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

		return subjects.map((item) => {
			return {
				subject_id: item.teacher_subject.subject.id,
				subject_name: item.teacher_subject.subject.name,
			};
		});
	} catch (error) {
		throw error;
	}
}

async function getSubjectsByStudent(userId) {
	try {
		const student = await prisma.student.findUnique({
			where: { user_id: userId },
			select: { id: true, class: { select: { id: true } } },
		});

		if (!student) {
			throw new Error('Student not found');
		}

		const subjects =
			await prisma.relationship_teacher_subject_class.findMany({
				where: { class_id: student.class.id },
				select: {
					teacher_subject: {
						select: {
							teacher: {
								select: {
									id: true,
									user: {
										select: {
											name: true,
										},
									},
								},
							},
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

		return subjects.map((item) => {
			return {
				teacher_id: item.teacher_subject.teacher.id,
				teacher_name: item.teacher_subject.teacher.user.name,
				subject_id: item.teacher_subject.subject.id,
				subject_name: item.teacher_subject.subject.name,
			};
		});
	} catch (error) {
		throw error;
	}
}

export {
	getAllSubjects,
	getSubjectById,
	createSubject,
	updateSubject,
	deleteSubject,
	getClassSubjectsByTeacher,
	getSubjectsByStudent,
};

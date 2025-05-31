import prisma from '../../prisma/client.js';

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

export {
	getAllSubjects,
	getSubjectById,
	createSubject,
	updateSubject,
	deleteSubject,
};

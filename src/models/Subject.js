import prisma from '../../prisma/client.js';
import { subjectSchema } from '../schemas/schemas.js';

async function getAllSubjects() {
	try {
		const subjects = await prisma.subject.findMany();
		return subjects;
	} catch (error) {
		console.log('Error fetching subjects:', error);
		throw error;
	}
}

async function getSubjectById(subject_id) {
	try {
		const subject = await prisma.subject.findUnique({
			where: { id: subject_id },
		});

		if (!subject) {
			console.error('Subject not found');
			throw new Error('Subject not found');
		}

		return subject;
	} catch (error) {
		console.log('Error fetching subject:', error);
		throw error;
	}
}

async function createSubject(subjectData) {
	const parsedSubject = subjectSchema.safeParse(subjectData);

	if (!parsedSubject.success) {
		console.error('Invalid subject data:', parsedSubject.error);
		throw new Error('Invalid subject data: ' + parsedSubject.error.message);
	}

	try {
		return await prisma.subject.create({
			data: parsedSubject.data,
		});
	} catch (error) {
		if (error.code === 'P2002') {
			console.error('Subject already exists');
			throw new Error('Subject already exists');
		}

		console.error('Error creating subject:', error);
		throw error;
	}
}

async function updateSubject(subject_id, subjectData) {
	const parsedSubject = subjectSchema.safeParse(subjectData);
	if (!parsedSubject.success) {
		console.error('Invalid subject data:', parsedSubject.error);
		throw new Error('Invalid subject data: ' + parsedSubject.error.message);
	}
	try {
		const updatedSubject = await prisma.subject.update({
			where: { id: subject_id },
			data: parsedSubject.data,
		});
		return updatedSubject;
	} catch (error) {
		if (error.code === 'P2002') {
			console.error('Subject already exists');
			throw new Error('Subject already exists');
		}

		if (error.code === 'P2025') {
			console.error('Subject not found');
			throw new Error('Subject not found');
		}

		console.error('Error updating subject:', error);
		throw error;
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
			console.error('Subject not found');
			throw new Error('Subject not found');
		}
		console.error('Error deleting subject:', error);
		throw error;
	}
}

export {
	getAllSubjects,
	getSubjectById,
	createSubject,
	updateSubject,
	deleteSubject,
};

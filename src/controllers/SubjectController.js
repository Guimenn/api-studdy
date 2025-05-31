import {
	getAllSubjects,
	getSubjectById,
	createSubject,
	updateSubject,
	deleteSubject,
} from '../models/Subject.js';

async function getAllSubjectsController(req, res) {
	try {
		const subjects = await getAllSubjects();
		return res.status(200).json(subjects);
	} catch (error) {
		console.error('Error fetching subjects:', error);
		return res.status(500).json({ message: 'Error fetching subjects' });
	}
}

async function getSubjectByIdController(req, res) {
	try {
		const subject = await getSubjectById(parseInt(req.params.id));

		if (!subject) {
			return res.status(404).json({ message: 'Subject not found' });
		}

		return res.status(200).json(subject);
	} catch (error) {
		console.error('Error fetching subject:', error);
		return res.status(500).json({ message: 'Error fetching subject' });
	}
}

async function createSubjectController(req, res) {
	try {
		const subject = await createSubject(req.body);
		return res.status(201).json(subject);
	} catch (error) {
		console.error('Error creating subject:', error);
		return res.status(500).json({ message: 'Error creating subject' });
	}
}

async function updateSubjectController(req, res) {
	try {
		const subject = await updateSubject(parseInt(req.params.id), req.body);
		return res.status(200).json(subject);
	} catch (error) {
		console.error('Error updating subject:', error);

		if (error.message === 'Subject not found') {
			return res.status(404).json({ message: 'Subject not found' });
		}

		return res.status(500).json({ message: 'Error updating subject' });
	}
}

async function deleteSubjectController(req, res) {
	try {
		const deleted = await deleteSubject(parseInt(req.params.id));
		return res.status(200).json(deleted);
	} catch (error) {
		console.error('Error deleting subject:', error);

		if (error.message === 'Subject not found') {
			return res.status(404).json({ message: 'Subject not found' });
		}

		return res.status(500).json({ message: 'Error deleting subject' });
	}
}

export {
	getAllSubjectsController,
	getSubjectByIdController,
	createSubjectController,
	updateSubjectController,
	deleteSubjectController,
};

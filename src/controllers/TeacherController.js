import {
	getAllTeachers,
	getTeacherById,
	createTeacher,
	updateTeacherSubject,
	deleteTeacherAccount,
} from '../models/Teacher.js';

async function getAllTeachersController(req, res) {
	try {
		const teachers = await getAllTeachers();
		return res.status(200).json(teachers);
	} catch (error) {
		console.error('Error fetching teachers:', error);
		return res.status(500).json({ message: 'Error fetching teachers' });
	}
}

async function getTeacherByIdController(req, res) {
	try {
		const teacher = await getTeacherById(parseInt(req.params.id));

		if (!teacher) {
			return res.status(404).json({ message: 'Teacher not found' });
		}

		return res.status(200).json(teacher);
	} catch (error) {
		console.error('Error fetching teacher:', error);
		return res.status(500).json({ message: 'Error fetching teacher' });
	}
}

async function createTeacherController(req, res) {
	try {
		const teacher = await createTeacher(req.body);
		return res.status(201).json(teacher);
	} catch (error) {
		console.error('Error creating teacher:', error);
		return res.status(500).json({ message: 'Error creating teacher' });
	}
}

async function updateTeacherSubjectController(req, res) {
	try {
		const updatedSubjects = await updateTeacherSubject(
			parseInt(req.params.id),
			req.body,
		);

		if (!updatedSubjects) {
			return res.status(404).json({ message: 'Teacher not found' });
		}

		return res.status(200).json(updatedSubjects);
	} catch (error) {
		console.error('Error updating teacher subjects:', error);
		return res
			.status(500)
			.json({ message: 'Error updating teacher subjects' });
	}
}

async function deleteTeacherAccountController(req, res) {
	try {
		const deleted = await deleteTeacherAccount(
			parseInt(req.params.user_id),
		);
		return res.status(200).json(deleted);
	} catch (error) {
		console.error('Error deleting teacher:', error);

		if (error.message === 'User not found') {
			return res.status(404).json({ message: 'User not found' });
		}

		if (error.message === 'User is not a teacher') {
			return res.status(400).json({ message: 'User is not a teacher' });
		}

		return res.status(500).json({ message: 'Error deleting teacher' });
	}
}

export {
	getAllTeachersController,
	getTeacherByIdController,
	createTeacherController,
	updateTeacherSubjectController,
	deleteTeacherAccountController,
};

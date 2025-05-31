import {
	getAllStudents,
	getStudentById,
	createStudent,
	updateStudentClass,
	deleteStudentAccount,
} from '../models/Student.js';

async function getAllStudentsController(req, res) {
	try {
		const students = await getAllStudents();
		return res.status(200).json(students);
	} catch (error) {
		console.error('Error fetching students:', error);
		return res.status(500).json({ message: 'Error fetching students' });
	}
}

async function getStudentByIdController(req, res) {
	try {
		const student = await getStudentById(parseInt(req.params.student_id));

		if (!student) {
			return res.status(404).json({ message: 'Student not found' });
		}

		return res.status(200).json(student);
	} catch (error) {
		console.error('Error fetching student:', error);
		return res.status(500).json({ message: 'Error fetching student' });
	}
}

async function createStudentController(req, res) {
	try {
		const student = await createStudent(req.body);
		return res.status(201).json(student);
	} catch (error) {
		console.error('Error creating student:', error);

		if (error.message === 'Error creating user while creating student') {
			return res.status(500).json({
				message: 'Error creating user while creating student',
			});
		}

		if (error.message === 'Invalid student data:') {
			return res
				.status(400)
				.json({ message: 'Invalid student data:', error });
		}

		return res.status(500).json({ message: 'Error creating student' });
	}
}

async function updateStudentClassController(req, res) {
	try {
		const student_id = parseInt(req.params.student_id);
		const { class_id } = req.body;

		const student = await updateStudentClass(student_id, class_id);

		if (!class_id) {
			return res.status(400).json({ message: 'Class ID is required' });
		}

		return res.status(200).json(student);
	} catch (error) {
		console.error('Error updating student class:', error);

		if (error.message === 'Student not found') {
			return res.status(404).json({ message: 'Student not found' });
		}

		if (error.message === 'Class not found') {
			return res.status(404).json({ message: 'Class not found' });
		}

		return res
			.status(500)
			.json({ message: 'Error updating student class' });
	}
}

async function deleteStudentAccountController(req, res) {
	try {
		const deleted = await deleteStudentAccount(
			parseInt(req.params.user_id),
		);
		return res.status(200).json(deleted);
	} catch (error) {
		console.error('Error deleting student:', error);

		if (error.message === 'User not found') {
			return res.status(404).json({ message: 'User not found' });
		}

		if (error.message === 'User is not a student') {
			return res.status(400).json({ message: 'User is not a student' });
		}

		return res.status(500).json({ message: 'Error deleting student' });
	}
}

export {
	getAllStudentsController,
	getStudentByIdController,
	createStudentController,
	updateStudentClassController,
	deleteStudentAccountController,
};

import {
	getAllTeachers,
	getTeacherById,
	createTeacher,
	updateTeacher,
	deleteTeacher,
} from '../models/Teacher.js';
import { teacherSchema } from '../schemas/teacher.schema.js';
import { ZodError } from 'zod/v4';

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
		const teacher = await getTeacherById(parseInt(req.params.teacherId));

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
	let teacher;

	try {
		teacher = teacherSchema.parse(req.body);
	} catch (error) {
		if (error instanceof ZodError) {
			const formatted = error['issues'].map((err) => ({
				path: err.path.join('.'),
				message: err.message,
			}));

			return res.status(400).json({
				message: 'Invalid request body',
				errors: formatted,
			});
		}
	}

	try {
		const created = await createTeacher(teacher);
		return res.status(201).json(created);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: error.message });
	}
}

async function updateTeacherController(req, res) {
	let teacher;

	try {
		teacher = teacherSchema.parse(req.body);
	} catch (error) {
		if (error instanceof ZodError) {
			const formatted = error['issues'].map((err) => ({
				path: err.path.join('.'),
				message: err.message,
			}));

			return res.status(400).json({
				message: 'Invalid request body',
				errors: formatted,
			});
		}
	}

	try {
		const updated = await updateTeacher(
			parseInt(req.params.teacherId),
			teacher,
		);
		return res.status(200).json(updated);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: error.message });
	}
}

async function deleteTeacherController(req, res) {
	const id = req.params.teacherId;

	try {
		// Verifica se o id é número válido
		const teacherId = parseInt(id);
		if (isNaN(teacherId) || teacherId <= 0) {
			return res.status(400).json({ error: 'Teacher ID is invalid' });
		}

		// Executa a deleção no model
		await deleteTeacher(teacherId);

		// Retorna sucesso
		return res.status(204).send();
	} catch (error) {
		console.error(error);

		// Erro customizado para professor não encontrado
		if (error.message.includes('not found')) {
			return res.status(404).json({ error: error.message });
		}

		return res.status(500).json({ error: 'Internal server error' });
	}
}

export {
	getAllTeachersController,
	getTeacherByIdController,
	createTeacherController,
	updateTeacherController,
	deleteTeacherController,
};

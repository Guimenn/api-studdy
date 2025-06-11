import {
	getAllClasses,
	getClassById,
	createClass,
	updateClass,
	deleteClass,
	getClassesByTeacherId,
} from '../models/Class.js';
import { classSchema } from '../schemas/class.schema.js';
import { ZodError } from 'zod/v4';

// Controller para listar todas as turmas
async function getAllClassesController(req, res) {
	try {
		const classes = await getAllClasses();
		return res.status(200).json(classes);
	} catch (error) {
		console.error('Error fetching subjects:', error);
		return res.status(500).json({ message: 'Error fetching subjects' });
	}
}

// Controller para obter uma turma específica por ID
async function getClassByIdController(req, res) {
	try {
		const schoolClass = await getClassById(parseInt(req.params.classId));

		if (!schoolClass) {
			return res.status(404).json({ message: 'Class not found' });
		}

		return res.status(200).json(schoolClass);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: error.message });
	}
}

// Controller para criar uma nova turma
async function createClassController(req, res) {
	let payload;
	try {
		payload = classSchema.parse(req.body);
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
		const created = await createClass(payload);
		return res.status(201).json(created);
	} catch (err) {
		// erro de professor não leciona matéria
		if (err.message.includes('does not teach subject')) {
			return res.status(400).json({ message: err.message });
		}
		// constraint do enum ou duplicação de nome cai aqui
		if (err.code === 'P2002') {
			return res
				.status(409)
				.json({ message: 'Class name already exists' });
		}
		console.error('Unexpected error:', err);
		return res.status(500).json({ message: 'Internal Server Error' });
	}
}

// Controller para atualizar uma turma existente
async function updateClassController(req, res) {
	const classId = parseInt(req.params.classId, 10);
	let classData;

	// 1. Validação do payload
	try {
		classData = classSchema.parse(req.body);
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

	// 2. Atualização da turma + assignments
	try {
		const updatedClass = await updateClass(classId, classData);
		return res.status(200).json(updatedClass);
	} catch (err) {
		// 404: turma não encontrada
		if (err.message === 'Class not found') {
			return res.status(404).json({ message: 'Class not found' });
		}

		// 409: violação de unicidade (nome duplicado)
		if (err.code === 'P2002') {
			return res
				.status(409)
				.json({ message: 'Class with same name already exists' });
		}

		// 400: turno inválido ou erro de assignment
		if (
			err.message.includes('turno') ||
			err.message.includes('não leciona')
		) {
			return res.status(400).json({ message: err.message });
		}

		// 500: erro não esperado
		console.error('Unexpected error in updateClassController:', err);
		return res.status(500).json({ message: 'Internal Server Error' });
	}
}

// Controller para deletar uma turma
async function deleteClassController(req, res) {
	const classId = parseInt(req.params.classId);

	try {
		await deleteClass(classId);
		return res.status(204).send();
	} catch (err) {
		if (err.code === 'CLASS_HAS_STUDENTS') {
			return res
				.status(400)
				.json({ message: 'Cannot delete class with linked students' });
		}

		if (err.code === 'P2025') {
			// Turma não encontrada
			return res.status(404).json({ message: 'Class not found' });
		}

		return res.status(500).json({ message: 'Internal Server Error' });
	}
}

// Controller para obter turmas de um professor específico
async function getClassesByTeacherIdController(req, res) {
	try {
		const userId = req.user.id;

		const classes = await getClassesByTeacherId(userId);

		return res.status(200).json(classes);
	} catch (error) {
		console.error('Error getting teacher classes:', error);
		return res.status(500).json({ error: error.message });
	}
}

// Controller para obter uma turma específica de um professor
async function getTeacherClassByIdController(req, res) {
	try {
		const userId = req.user.id;
		const classId = req.params.classId;

		const teacherClass = await getClassById(classId);

		if (!teacherClass) {
			return res.status(404).json({ error: 'Turma não encontrada' });
		}

		// Verifica se o professor leciona nessa turma
		const teacherSubjects = teacherClass.teachers.find(
			(teacher) => teacher.teacher_id === userId
		);

		if (!teacherSubjects) {
			return res.status(403).json({ error: 'Professor não leciona nesta turma' });
		}

		return res.status(200).json(teacherClass);
	} catch (error) {
		console.error('Error getting teacher class:', error);
		return res.status(500).json({ error: error.message });
	}
}

export {
	getAllClassesController,
	getClassByIdController,
	createClassController,
	updateClassController,
	deleteClassController,
	getClassesByTeacherIdController,
	getTeacherClassByIdController,
};

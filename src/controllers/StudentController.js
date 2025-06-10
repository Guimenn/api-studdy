import {
	getAllStudents,
	getStudentById,
	createStudent,
	updateStudent,
	deleteStudent,
	getStudentStatistics,
} from '../models/Student.js';
import { getStudentClass } from '../models/Class.js';
import { getSubjectsByStudent } from '../models/Subject.js';
import {
	studentSchema,
	updateStudentSchema,
} from '../schemas/student.schema.js';
import { ZodError } from 'zod/v4';
import { getQuizzesByStudent } from '../models/Quiz.js';

// Controllers do /admin/student

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
		const student = await getStudentById(parseInt(req.params.studentId));

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
	let student;

	try {
		student = studentSchema.parse(req.body);
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
		const created = await createStudent(student);
		return res.status(201).json(created);
	} catch (error) {
		console.error(error);

		if (error.message.includes('User is not a student')) {
			return res.status(400).json({ message: error.message });
		}

		return res.status(500).json({ message: error.message });
	}
}

async function updateStudentController(req, res) {
	let student;

	try {
		student = updateStudentSchema.parse(req.body);
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
		const updated = await updateStudent(
			parseInt(req.params.studentId),
			student,
		);
		return res.status(200).json(updated);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: error.message });
	}
}

async function deleteStudentController(req, res) {
	const id = req.params.studentId;

	try {
		// Verifica se o id é número válido
		const studentId = parseInt(id);
		if (isNaN(studentId) || studentId <= 0) {
			return res.status(400).json({ error: 'Student ID is invalid' });
		}

		// Executa a deleção no model
		await deleteStudent(studentId);

		// Retorna sucesso
		return res.status(204).send();
	} catch (error) {
		console.error(error);

		// Erro customizado para aluno não encontrado
		if (error.message.includes('not found')) {
			return res.status(404).json({ error: error.message });
		}

		return res.status(500).json({ error: 'Internal server error' });
	}
}

// Controllers do /student

// Controller para obter as informações da turma do aluno
async function getStudentClassController(req, res) {
	try {
		let studentClass = await getStudentClass(parseInt(req.user.id));
		return res.status(200).json(studentClass);
	} catch (error) {
		console.error(error);
		return res
			.status(500)
			.json({ message: 'Error fetching student class' });
	}
}

// Controller para obter as matérias da turma do aluno
async function getStudentSubjectsController(req, res) {
	try {
		const studentSubjects = await getSubjectsByStudent(
			parseInt(req.user.id),
		);
		return res.status(200).json(studentSubjects);
	} catch (error) {
		console.error(error);
		return res
			.status(500)
			.json({ message: 'Error fetching student subjects' });
	}
}

// Controller para obter todos os quizzes
async function getStudentQuizzesController(req, res) {
	try {
		const studentQuizzes = await getQuizzesByStudent(req.user.id);
		return res.status(200).json(studentQuizzes);
	} catch (error) {
		console.error(error);
		if (error.message.includes('not found')) {
			return res.status(404).json({ message: error.message });
		}
		return res
			.status(500)
			.json({ message: 'Error fetching student quizzes' });
	}
}

// Controller para obter as estatísticas gerais do aluno
async function getStudentStatisticsController(req, res) {
	try {
		const userId = req.user.id;

		const statistics = await getStudentStatistics(userId);

		res.json(statistics);
	} catch (error) {
		console.error(error);
		if (error.message.includes('not found')) {
			return res.status(404).json({ message: error.message });
		}

		res.status(500).json({
			message: 'Erro interno do servidor',
		});
	}
}

export {
	getAllStudentsController,
	getStudentByIdController,
	createStudentController,
	updateStudentController,
	deleteStudentController,
	getStudentClassController,
	getStudentSubjectsController,
	getStudentQuizzesController,
	getStudentStatisticsController,
};

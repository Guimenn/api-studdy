import express from 'express';
import {
	getAllStudentsController,
	getStudentByIdController,
	createStudentController,
	updateStudentClassController,
	deleteStudentAccountController,
} from '../controllers/StudentController.js';

const router = express.Router();

router.get('/', getAllStudentsController);

router.get('/:student_id', getStudentByIdController);

router.post('/', createStudentController);

router.patch('/:student_id', updateStudentClassController);

router.delete('/:user_id', deleteStudentAccountController);

export default router;

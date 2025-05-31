import {
	getAllTeachersController,
	getTeacherByIdController,
	createTeacherController,
	updateTeacherSubjectController,
	deleteTeacherAccountController,
} from '../controllers/TeacherController.js';
import express from 'express';

const router = express.Router();

router.get('/', getAllTeachersController);

router.get('/:id', getTeacherByIdController);

router.post('/', createTeacherController);

router.patch('/:id', updateTeacherSubjectController);

router.delete('/:user_id', deleteTeacherAccountController);

export default router;

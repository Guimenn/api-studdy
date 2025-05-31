import {
	getAllSubjectsController,
	getSubjectByIdController,
	createSubjectController,
	updateSubjectController,
	deleteSubjectController,
} from '../controllers/SubjectController.js';
import express from 'express';

const router = express.Router();

router.get('/', getAllSubjectsController);

router.get('/:id', getSubjectByIdController);

router.post('/', createSubjectController);

router.patch('/:id', updateSubjectController);

router.delete('/:id', deleteSubjectController);

export default router;

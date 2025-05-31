import express from 'express';
import {
	getAllClassesController,
	getClassByIdController,
	createClassController,
} from '../controllers/ClassController.js';

const router = express.Router();

router.get('/', getAllClassesController);

router.get('/:id', getClassByIdController);

router.post('/', createClassController);

export default router;

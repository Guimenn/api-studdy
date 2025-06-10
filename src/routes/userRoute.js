import express from 'express';
import {
	getAllUsersController,
	getUserByIdController,
	updateUserController,
} from '../controllers/UsersController.js';

const router = express.Router();

// Rota para gerar resumos
router.get('/', getAllUsersController);

// Rota para gerar alternativas erradas
router.get('/:userId', getUserByIdController);

router.put('/:userId', updateUserController);

export default router;

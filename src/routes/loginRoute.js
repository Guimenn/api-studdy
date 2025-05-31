import express from 'express';
import { loginController, recoveryController, newPasswordController } from '../controllers/LoginController.js';

const router = express.Router();

router.post('/', loginController);
router.post('/recovery', recoveryController);
router.put('/new-password', newPasswordController);

export default router;

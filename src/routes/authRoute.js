import express from 'express';
import { loginController, recoveryController, newPasswordController } from '../controllers/LoginController.js';
import { meController } from '../controllers/MeController.js';
import authenticated from '../middlewares/authenticated.js';

const router = express.Router();

router.post('/', loginController);
router.get('/', authenticated, meController);
router.post('/recovery', recoveryController);
router.put('/new-password', newPasswordController);


export default router;

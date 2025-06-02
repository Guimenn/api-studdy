import express from 'express';
import { loginController } from '../controllers/LoginController.js';
import { meController } from '../controllers/MeController.js';
import authenticated from '../middlewares/authenticated.js';

const router = express.Router();

router.post('/', loginController);
router.get('/', authenticated, meController);

export default router;

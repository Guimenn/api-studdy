import express from 'express';
import { generateResume } from '../controllers/ResumeController.js';

const router = express.Router();

router.post('/', generateResume);

export default router;


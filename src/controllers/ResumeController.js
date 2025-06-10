import {
    getAllResumes,
    getResumeById,
    createResume,
    updateResume,
    deleteResume,
} from '../models/Resume.js';
import { getTeacherByUserId } from '../models/Teacher.js';

async function getAllResumesController(req, res) {
    try {
        const resumes = await getAllResumes();
        return res.status(200).json(resumes);
    } catch (error) {
        console.error('Error fetching resumes:', error);
        return res.status(500).json({ message: 'Error fetching resumes' });
    }
}

async function getResumeByIdController(req, res) {
    try {
        const resume = await getResumeById(parseInt(req.params.resumeId));

        if (!resume) {
            return res.status(404).json({ message: 'Resume not found' });
        }

        return res.status(200).json(resume);
    } catch (error) {
        console.error('Error fetching resume:', error);
        return res.status(500).json({ message: 'Error fetching resume' });
    }
}

async function createResumeController(req, res) {
    try {
        const { subject_id, class_id, title, icon, description, resume } = req.body;
        const teacher = await getTeacherByUserId(req.user.id);

        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        if (!subject_id || !class_id || !title || !icon || !description || !resume) {
            return res.status(400).json({ 
                message: 'subject_id, class_id, title, icon, description and resume fields are required.' 
            });
        }

        const resumeData = {
            teacher_id: teacher.id,
            subject_id: parseInt(subject_id),
            class_id: parseInt(class_id),
            title,
            icon,
            description,
            resume
        };

        const newResume = await createResume(resumeData);
        return res.status(201).json(newResume);
    } catch (error) {
        console.error('Error creating resume:', error);
        return res.status(500).json({ message: 'Error creating resume', details: error.message });
    }
}

async function updateResumeController(req, res) {
    try {
        const resume = await updateResume(parseInt(req.params.resumeId), req.body);
        return res.status(200).json(resume);
    } catch (error) {
        console.error('Error updating resume:', error);
        return res.status(500).json({ message: 'Error updating resume' });
    }
}

async function deleteResumeController(req, res) {
    try {
        const resumeId = parseInt(req.params.resumeId, 10);
        const resume = await deleteResume(resumeId);
        return res.status(200).json(resume);
    } catch (error) {
        console.error('Error deleting resume:', error);
        return res.status(error.status || 500).json({ message: error.message, details: error.details });
    }
}

export {
    getAllResumesController,
    getResumeByIdController,
    createResumeController,
    updateResumeController,
    deleteResumeController,
};
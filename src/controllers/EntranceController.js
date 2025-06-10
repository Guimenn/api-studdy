import {
    getAllEntranceExams,
    getEntranceExamById,
    createEntranceExam,
    updateEntranceExam,
    deleteEntranceExam,
} from '../models/Entrance_exame.js';

async function getAllEntranceExamsController(req, res) {
    try {
        const entranceExams = await getAllEntranceExams();
        return res.status(200).json(entranceExams);
    } catch (error) {
        console.error('Error fetching entrance exams:', error);
        return res.status(500).json({ message: 'Error fetching entrance exams' });
    }
}

async function getEntranceExamByIdController(req, res) {
    try {
        const entranceExam = await getEntranceExamById(parseInt(req.params.examId));

        if (!entranceExam) {
            return res.status(404).json({ message: 'Entrance exam not found' });
        }

        return res.status(200).json(entranceExam);
    } catch (error) {
        console.error('Error fetching entrance exam:', error);
        return res.status(500).json({ message: 'Error fetching entrance exam' });
    }
}

async function createEntranceExamController(req, res) {
    try {
        const { title, link, type, icon, color, description, date } = req.body;
        
        // Validate required fields
        if (!title || !link || !type || !icon || !color || !description || !date) {
            return res.status(400).json({ 
                message: 'Required fields missing. Please provide title, link, type, icon, color, description and date.' 
            });
        }

        const examData = {
            title,
            link,
            type,
            icon,
            color,
            description,
            date: new Date(date)
        };

        const entranceExam = await createEntranceExam(examData);
        return res.status(201).json(entranceExam);
    } catch (error) {
        console.error('Error creating entrance exam:', error);
        return res.status(error.status || 500).json({ message: error.message, details: error.details });
    }
}

async function updateEntranceExamController(req, res) {
    try {
        const examId = parseInt(req.params.examId);
        const updateData = req.body;

        // Convert date if provided
        if (updateData.date) {
            updateData.date = new Date(updateData.date);
        }

        const entranceExam = await updateEntranceExam(examId, updateData);
        return res.status(200).json(entranceExam);
    } catch (error) {
        console.error('Error updating entrance exam:', error);
        return res.status(error.status || 500).json({ message: error.message, details: error.details });
    }
}

async function deleteEntranceExamController(req, res) {
    try {
        const examId = parseInt(req.params.examId, 10);
        const entranceExam = await deleteEntranceExam(examId);
        return res.status(200).json(entranceExam);
    } catch (error) {
        console.error('Error deleting entrance exam:', error);
        return res.status(error.status || 500).json({ message: error.message, details: error.details });
    }
}

export {
    getAllEntranceExamsController,
    getEntranceExamByIdController,
    createEntranceExamController,
    updateEntranceExamController,
    deleteEntranceExamController,
};
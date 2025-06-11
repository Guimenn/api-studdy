import {
    getAllContests,
    getContestById,
    createContest,
    updateContest,
    deleteContest,
} from '../models/Contest.js';

// Controller para listar todos os concursos
async function getAllContestsController(req, res) {
    try {
        const contests = await getAllContests();
        return res.status(200).json(contests);
    } catch (error) {
        console.error('Error fetching contests:', error);
        return res.status(500).json({ message: 'Error fetching contests' });
    }
}

// Controller para obter um concurso específico por ID
async function getContestByIdController(req, res) {
    try {
        const contest = await getContestById(parseInt(req.params.contestId));

        if (!contest) {
            return res.status(404).json({ message: 'Contest not found' });
        }

        return res.status(200).json(contest);
    } catch (error) {
        console.error('Error fetching contest:', error);
        return res.status(500).json({ message: 'Error fetching contest' });
    }
}

// Controller para criar um novo concurso
async function createContestController(req, res) {
    try {
        const { title, link, type, icon, color, description, date } = req.body;
        
        // Validate required fields
        if (!title || !link || !type || !icon || !color || !description || !date) {
            return res.status(400).json({ 
                message: 'Required fields missing. Please provide title, link, type, icon, color, description and date.' 
            });
        }

        const contestData = {
            title,
            link,
            type,
            icon,
            color,
            description,
            date: new Date(date)
        };

        const contest = await createContest(contestData);
        return res.status(201).json(contest);
    } catch (error) {
        console.error('Error creating contest:', error);
        return res.status(error.status || 500).json({ message: error.message, details: error.details });
    }
}

// Controller para atualizar um concurso existente
async function updateContestController(req, res) {
    try {
        const contestId = parseInt(req.params.contestId);
        const updateData = req.body;

        // Convert date if provided
        if (updateData.date) {
            updateData.date = new Date(updateData.date);
        }

        const contest = await updateContest(contestId, updateData);
        return res.status(200).json(contest);
    } catch (error) {
        console.error('Error updating contest:', error);
        return res.status(error.status || 500).json({ message: error.message, details: error.details });
    }
}

// Controller para deletar um concurso
async function deleteContestController(req, res) {
    try {
        const contestId = parseInt(req.params.contestId, 10);
        const contest = await deleteContest(contestId);
        return res.status(200).json(contest);
    } catch (error) {
        console.error('Error deleting contest:', error);
        return res.status(error.status || 500).json({ message: error.message, details: error.details });
    }
}

export {
    getAllContestsController,
    getContestByIdController,
    createContestController,
    updateContestController,
    deleteContestController,
};
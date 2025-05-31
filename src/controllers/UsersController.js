import {
	getAllUsers,
	getUserById,
} from '../models/User.js';

async function getAllUsersController(req, res) {
	try {
		const users = await getAllUsers();
		return res.status(200).json(users);
	} catch (error) {
		console.error('Erro ao buscar usuários:', error);
		return res.status(500).json({ message: 'Erro ao buscar usuários' });
	}
}

async function getUserByIdController(req, res) {
	try {
		const user = await getUserById(parseInt(req.params.userId));

		if (!user) {
			return res.status(404).json({ message: 'Usuário não encontrado' });
		}

		return res.status(200).json(user);
	} catch (error) {
		console.error('Erro ao buscar usuário:', error);
		return res.status(500).json({ message: 'Erro ao buscar usuário' });
	}
}


export {
	getAllUsersController,
	getUserByIdController
};

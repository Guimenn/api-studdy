import prisma from '../../prisma/client.js';
import { generateHashPassword } from '../utils/hash.js';

async function getAllUsers() {
	try {
		return await prisma.user.findMany();
	} catch (error) {
		throw error;
	}
}

async function getUserById(userId) {
	try {
		return await prisma.user.findUnique({ where: { id: userId } });
	} catch (error) {
		throw error;
	}
}

async function createUser(userData, tx = prisma) {
	try {
		// 1. Faz o hash da senha
		const hashed_password = await generateHashPassword(userData.password);

		userData.password = hashed_password;

		// 2. Substitui o password pelo hashed_password
		const { password, ...rest } = userData;
		const user = { ...rest, hashed_password: password };

		// 3. Cria o usuário no banco de dados
		const createdUser = await tx.user.create({
			data: user,
		});

		return createdUser;
	} catch (error) {
		throw error;
	}
}

async function updateUser(tx = prisma, userId, userData) {
	try {
		// 1. Faz o hash da senha
		const hashed_password = await generateHashPassword(userData.password);

		userData.password = hashed_password;

		// 2. Substitui o password pelo hashed_password
		const { password, ...rest } = userData;
		const user = { ...rest, hashed_password: password };

		return await tx.user.update({
			where: { id: userId },
			data: {
				...user,
			},
		});
	} catch (error) {
		throw error;
	}
}

async function deleteUser(tx = prisma, userId) {
	try {
		return await tx.user.delete({ where: { id: userId } });
	} catch (error) {
		throw error;
	}
}

export { getAllUsers, getUserById, createUser, updateUser };

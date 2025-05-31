import prisma from '../../prisma/client.js';
import { userSchema } from '../schemas/schemas.js';
import { generateHashPassword } from '../utils/hash.js';

async function getAllUsers() {
	try {
		const users = await prisma.user.findMany();
		return users;
	} catch (error) {
		console.error('Error fetching users:', error);
		throw error;
	}
}

async function getUserById(id) {
	try {
		const user = await prisma.user.findUnique({ where: { id: id } });
		return user;
	} catch (error) {
		console.error('Error fetching user:', error);
		throw error;
	}
}

async function createUser(userData, tx = prisma) {
	// 1. Verifica se os dados do usuario estao corretos
	const validUser = userSchema.safeParse(userData);

	if (!validUser.success) {
		console.error('Invalid user data:', validUser.error);
		throw new Error('Invalid user data');
	}

	try {
		// 2. Faz o hash da senha
		const hashed_password = await generateHashPassword(
			validUser.data.password,
		);
		validUser.data.password = hashed_password;

		// 3. Substitui o password pelo hashed_password
		const { password, ...rest } = validUser.data;
		const user = { ...rest, hashed_password: password };

		// 4. Cria o usuário no banco de dados
		const createdUser = await tx.user.create({
			data: user,
		});

		return createdUser;
	} catch (error) {
		console.error('Error creating user:', error);
		throw error;
	}
}

export { getAllUsers, getUserById, createUser };

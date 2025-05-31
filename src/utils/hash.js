import bcrypt from 'bcryptjs';

async function generateHashPassword(password) {
	try {
		const salt = await bcrypt.genSalt(10);
		return await bcrypt.hash(password, salt);
	} catch (error) {
		console.error('Error hashing password:', error);
		return;
	}
}

export { generateHashPassword };

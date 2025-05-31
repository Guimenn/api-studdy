import prisma from '../../prisma/client.js';
import { classSchema } from '../schemas/schemas.js';

async function getAllClasses() {
	try {
		const classes = await prisma.class.findMany();
		return classes;
	} catch (error) {
		console.error('Error fetching classes:', error);
		throw error;
	}
}

async function getClassById(id) {
	try {
		const schoolClass = await prisma.class.findUnique({
			where: { id: id },
		});
		return schoolClass;
	} catch (error) {
		console.error('Error fetching class:', error);
		throw error;
	}
}

async function createClass(classData) {
	const validClass = classSchema.safeParse(classData);

	if (validClass.success === false) {
		console.error('Invalid class data:', validClass.error);
		throw new Error('Invalid class data');
	}

	try {
		await prisma.class.create({
			data: validClass.data,
		});
	} catch (error) {
		console.error('Error creating class:', error);
		throw error;
	}
}

export { getAllClasses, getClassById, createClass };

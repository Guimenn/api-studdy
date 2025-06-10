import prisma from '../../prisma/client.js';
import { getSystemStatistics } from './Statistics.js';

async function getAdminStatistics(userId) {
	try {
		const admin = await prisma.user.findUnique({
			where: {
				id: userId,
			},
		});

		if (!admin) {
			throw new Error('Admin not found');
		}

		if (admin.role !== 'Admin') {
			throw new Error('User is not an admin');
		}

		const statistics = await getSystemStatistics();
		return statistics;
	} catch (error) {
		throw error;
	}
}

export { getAdminStatistics };

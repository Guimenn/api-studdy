import { alternativeSchema } from '../schemas/alternative.schema.js';

async function createAlternative(tx, alternativeData, question_id) {
	let alternative;

	try {
		alternative = alternativeSchema.parse(alternativeData);
	} catch (error) {
		console.error('Invalid alternative data:', error);
		throw new Error(`Invalid alternative data: ${error.message}`);
	}

	try {
		return await tx.alternative.create({
			data: { ...alternative, question_id },
		});
	} catch (error) {
		console.error('Error creating alternative:', error);
		throw error;
	}
}

export { createAlternative };

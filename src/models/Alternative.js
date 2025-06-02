async function createAlternative(tx, alternative, question_id) {
	try {
		// Cria a alternativa na tabela Alternative
		return await tx.alternative.create({
			data: { ...alternative, question_id },
		});
	} catch (error) {
		throw error;
	}
}

export { createAlternative };

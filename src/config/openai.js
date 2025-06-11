import OpenAI from 'openai';

/**
 * Configuração do cliente OpenAI
 * Inicializa conexão com API da OpenAI para geração de conteúdo
 */
if (!process.env.OPENAI_API_KEY) {
	throw new Error(
		'OpenAI API key not found. Please check your OPENAI_API_KEY environment variable.',
	);
}

const openaiClient = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

export default openaiClient;

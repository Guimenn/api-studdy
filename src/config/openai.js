import OpenAI from 'openai';

if (!process.env.OPENAI_API_KEY) {
	throw new Error(
		'OpenAI API key not found. Please check your OPENAI_API_KEY environment variable.',
	);
}

const openaiClient = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

export default openaiClient;

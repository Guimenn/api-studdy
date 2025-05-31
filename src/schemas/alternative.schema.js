import { z } from 'zod/v4';

// Schema de validação de alternativa
export const alternativeSchema = z.object({
	response: z
		.string()
		.min(3, { error: 'Invalid alternative' })
		.transform((alternative) => alternative.trim()),
	correct_alternative: z.boolean(),
});

import { z } from 'zod/v4';

/**
 * Schema de validação para alternativas de questões
 * Define a estrutura e validação para respostas de múltipla escolha
 */
export const alternativeSchema = z.object({
	response: z.string().transform((alternative) => alternative.trim()),
	correct_alternative: z.boolean(),
});

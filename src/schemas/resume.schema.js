import { z } from 'zod/v4';

/**
 * Schema de validação para resumos educacionais
 * Define a estrutura para resumos de conteúdo criados por professores
 */
export const resumeSchema = z.object({
    teacher_id: z.number().int().positive(),
    subject_id: z.number().int().positive(),
    class_id: z.number().int().positive(),
    title: z.string().min(1, { message: 'Title is required' }),
    icon: z.string().min(1, { message: 'Icon is required' }),
    description: z.string().min(1, { message: 'Description is required' }),
    resume: z.string().min(1, { message: 'Resume content is required' }),
});

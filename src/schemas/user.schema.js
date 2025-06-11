import { z } from 'zod/v4';
import { validateCPF } from '../utils/validateCPF.js';
import { formatDateISO } from '../utils/parseDate.js';
import { isOlderThanSixYears } from '../utils/validateAge.js';

/**
 * Schema de validação para usuários do sistema
 * Define a estrutura base para todos os tipos de usuário (Admin, Teacher, Student)
 * Inclui validações para CPF, email, data de nascimento e idade mínima
 */
export const userSchema = z.object({
	name: z.string().min(3, { error: 'Invalid Name' }),
	email: z
		.email({ error: 'Invalid e-mail format' })
		.transform((email) => email.toLocaleLowerCase()),
	password: z.string(),
	cpf: z
		.string()
		.refine((cpf) => validateCPF(cpf).valid, {
			message: 'Invalid CPF',
		})
		.transform((cpf) => validateCPF(cpf).formatted),
	birth_date: z
		.string()
		.refine((date) => formatDateISO(date) !== null, {
			error: 'Invalid format, expected: dd/mm/yyyy',
		})
		.transform((date) => formatDateISO(date))
		.refine((date) => isOlderThanSixYears(date), {
			error: 'The user must be a minimum of six years old.',
		}),
	role: z.enum(['Admin', 'Teacher', 'Student'], { error: 'Invalid role' }),
});

/**
 * Schema para atualização de usuários (senha opcional)
 */
export const userUpdateSchema = userSchema.partial({ password: true });

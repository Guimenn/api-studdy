import { z } from 'zod/v4';
import { validateCPF } from '../utils/validateCPF.js';
import { parseBRDateToIso } from '../utils/parseDate.js';
import { isOlderThanSixYears } from '../utils/validateAge.js';

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
		.refine((date) => parseBRDateToIso(date) !== null, {
			error: 'Invalid format, expected: dd/mm/yyyy',
		})
		.transform((date) => parseBRDateToIso(date))
		.refine((date) => isOlderThanSixYears(date), {
			error: 'The user must be a minimum of six years old.',
		}),
	role: z.enum(['Admin', 'Teacher', 'Student'], { error: 'Invalid role' }),
});

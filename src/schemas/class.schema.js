import { z } from 'zod/v4';
import { assignmentSchema } from './assignment.schema.js';

// Schema de validação de turma
export const classSchema = z.object({
	name: z.string().min(3, { error: 'Invalid class name' }),
	shift: z.enum(['Morning', 'Afternoon', 'Evening', 'Full'], {
		error: 'Invalid shift',
	}),
	course: z.string().min(3, { error: 'Invalid course name' }),
	assignments: z
		.array(assignmentSchema)
		.min(1, { message: 'At least one assignment is required.' }),
});

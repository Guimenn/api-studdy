import { z } from 'zod/v4';
import { userSchema, userUpdateSchema } from './user.schema.js';

export const teacherSchema = z.object({
	user: userSchema,
	teacher: z.object({
		subjects: z
			.array(
				z.object({
					id: z.number().int().positive(),
					name: z.string().min(1).optional(),
				}),
			)
			.nonempty('At least one subject must be provided'),
	}),
});

export const updateTeacherSchema = z.object({
	user: userUpdateSchema,
	teacher: z.object({
		subjects: z
			.array(
				z.object({
					id: z.number().int().positive(),
					name: z.string().min(1).optional(),
				}),
			)
			.nonempty('At least one subject must be provided'),
	}),
});

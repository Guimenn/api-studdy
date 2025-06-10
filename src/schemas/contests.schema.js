import { z } from 'zod/v4';

// video validation schema
export const contests = z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    link: z.string().url({ message: 'Invalid URL' }),
    type: z.string().min(1, { message: 'Type is required' }),
    icon: z.string().min(1, { message: 'Icon is required' }),
    color: z.string().min(1, { message: 'Color is required' }),
    description: z.string().min(1, { message: 'Description is required' }),
    date: z.coerce.date({ message: 'Invalid date' })
});

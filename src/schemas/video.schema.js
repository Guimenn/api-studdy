import { z } from 'zod/v4';

/**
 * Schema de validação para vídeos educacionais
 * Define a estrutura para vídeos do YouTube e outras plataformas usados no ensino
 */
export const videoSchema = z.object({
    videoUrl: z.string().url({ message: 'Invalid video URL' }),
    title_video: z.string().min(1, { message: 'Video title is required' }),
    name_channel: z.string().min(1, { message: 'Channel name is required' }),
    duration_video: z.string().regex(/^\d+:\d{2}$/, { message: 'Invalid duration format (mm:ss)' }),
    font: z.string().min(1, { message: 'Font is required' }),
    description: z.string().min(1, { message: 'Description is required' }),
    thumbnail: z.string().url({ message: 'Invalid thumbnail URL' }),
    videoId: z.string().min(1, { message: 'Video ID is required' }),
});

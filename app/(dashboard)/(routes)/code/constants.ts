import * as z from 'zod';

export const formSchema = z.object({
    // TODO: double code
    prompt: z.string().min(1, {
        message: 'Prompt is required.',
    }),
});

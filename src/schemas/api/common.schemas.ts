import { z } from 'zod';

export const interactedAtSchema = z.string().min(1);

export const emptyObject = z.object({}).strict();
export const successObject = z.object({ success: z.literal(true) });

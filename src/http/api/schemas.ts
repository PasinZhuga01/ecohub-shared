import { z } from 'zod';

export const interactedAtSchema = z.string().min(1);

export const emptyObjectSchema = z.object({}).strict();
export const successObjectSchema = z.object({ success: z.literal(true) });

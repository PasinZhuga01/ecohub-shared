import { z } from 'zod';

export const emptyObject = z.object({}).strict();
export const successObject = z.object({ success: z.literal(true) });

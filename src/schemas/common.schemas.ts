import { z } from 'zod';

export const id = z.number().int().min(1);

export type SuccessResponse = { success: true };

import { z } from 'zod';

import { id } from '../../common.schemas';

const name = z.string().min(1).max(80);
const rate = z.number().int().min(1);

export const get = z.object({ projectId: id });
export const create = z.object({
	projectId: id,
	icon: z
		.file()
		.refine((file) => file.size <= 20 * 1024 * 1024)
		.refine((file) => ['image/png', 'image/jpeg'].includes(file.type)),
	name,
	rate
});
export const rerate = z.object({ id, rate });
export const remove = z.object({ id });
export const shift = z.object({
	projectId: id,
	value: z.number().int().min(1)
});

export type GetRequest = z.input<typeof get>;
export type CreateRequest = z.input<typeof create>;
export type RerateRequest = z.input<typeof rerate>;
export type RemoveRequest = z.input<typeof remove>;
export type ShiftRequest = z.input<typeof shift>;

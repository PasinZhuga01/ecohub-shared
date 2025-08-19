import { z } from 'zod';

import { project, currency } from '../../db.schemas';

export const get = z.object({
	projectId: project.shape.id
});

export const create = z.object({
	projectId: project.shape.id,
	name: currency.shape.name,
	rate: currency.shape.rate
});

export const rerate = z.object({
	id: currency.shape.id,
	rate: currency.shape.rate
});

export const remove = z.object({
	id: currency.shape.id
});

export const shift = z.object({
	projectId: project.shape.id,
	value: z.number().int().min(1)
});

export type GetRequest = z.input<typeof get>;
export type CreateRequest = z.input<typeof create>;
export type RerateRequest = z.input<typeof rerate>;
export type RemoveRequest = z.input<typeof remove>;
export type ShiftRequest = z.input<typeof shift>;

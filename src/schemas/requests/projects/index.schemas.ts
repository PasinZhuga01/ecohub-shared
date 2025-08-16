import { z } from 'zod';

import { project } from '../../db.schemas';

export const get = z.union([
	z.object({
		isForNav: z.literal(true),
		maxCount: z.number().int().min(1)
	}),
	z.object({
		isForNav: z.literal(false)
	})
]);

export const create = z.object({
	name: project.shape.name
});

export const rename = z.object({
	id: project.shape.id,
	name: project.shape.name
});

export const remove = z.object({
	id: project.shape.id
});

export type GetRequest = z.input<typeof get>;
export type CreateRequest = z.input<typeof create>;
export type RenameRequest = z.input<typeof rename>;
export type RemoveRequest = z.input<typeof remove>;

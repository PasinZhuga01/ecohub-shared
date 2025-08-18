import { z } from 'zod';

import { project } from '../../db.schemas';

export const getNav = z.object({
	maxCount: z.number().int().min(1)
});

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

export type GetNavRequest = z.input<typeof getNav>;
export type CreateRequest = z.input<typeof create>;
export type RenameRequest = z.input<typeof rename>;
export type RemoveRequest = z.input<typeof remove>;

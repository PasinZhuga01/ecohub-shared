import { z } from 'zod';

import { project, market } from '../../../db.schemas';

export const get = z.object({
	projectId: project.shape.id
});

export const create = z.object({
	projectId: project.shape.id,
	name: market.shape.name
});

export const rename = z.object({
	id: market.shape.id,
	name: market.shape.name
});

export const remove = z.object({
	id: market.shape.id
});

export type GetRequest = z.input<typeof get>;
export type CreateRequest = z.input<typeof create>;
export type RenameRequest = z.input<typeof rename>;
export type RemoveRequest = z.input<typeof remove>;

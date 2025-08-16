import { z } from 'zod';

import { id } from '../../common.schemas';

const name = z.string().min(1).max(80);

export const get = z.union([
	z.object({
		isForNav: z.literal(true),
		maxCount: z.number().int().min(1)
	}),
	z.object({
		isForNav: z.literal(false)
	})
]);
export const create = z.object({ name });
export const rename = z.object({ id, name });
export const remove = z.object({ id });

export type GetRequest = z.input<typeof get>;
export type CreateRequest = z.input<typeof create>;
export type RenameRequest = z.input<typeof rename>;
export type RemoveRequest = z.input<typeof remove>;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectsApi = void 0;
const zod_1 = require("zod");
const projects_1 = require("../../../../db/projects");
const markets_1 = require("../../../../db/projects/markets");
const api_1 = require("../..");
exports.projectsApi = {
    basePath: '/projects',
    endpoints: {
        '/get_nav': {
            method: 'GET',
            rawRequest: zod_1.z
                .object({
                maxCount: zod_1.z.string()
            })
                .transform(({ maxCount }) => ({ maxCount: Number(maxCount) })),
            request: zod_1.z.object({
                maxCount: zod_1.z.number().int().min(1)
            }),
            response: zod_1.z.array(zod_1.z.object({
                id: projects_1.projectSchema.shape.id,
                name: projects_1.projectSchema.shape.name,
                markets: zod_1.z.array(zod_1.z.object({
                    id: markets_1.marketSchema.shape.id,
                    name: markets_1.marketSchema.shape.name
                }))
            }))
        },
        '/get_page': {
            method: 'GET',
            request: api_1.emptyObjectSchema,
            response: zod_1.z.array(zod_1.z.object({
                id: projects_1.projectSchema.shape.id,
                name: projects_1.projectSchema.shape.name,
                interactedAt: api_1.interactedAtSchema
            }))
        },
        '/get': {
            method: 'GET',
            rawRequest: zod_1.z
                .object({
                id: zod_1.z.string()
            })
                .transform(({ id }) => ({ id: Number(id) })),
            request: zod_1.z.object({
                id: projects_1.projectSchema.shape.id
            }),
            response: zod_1.z.object({
                name: projects_1.projectSchema.shape.name
            })
        },
        '/create': {
            method: 'POST',
            request: zod_1.z.object({
                name: projects_1.projectSchema.shape.name
            }),
            response: zod_1.z.object({
                id: projects_1.projectSchema.shape.id,
                name: projects_1.projectSchema.shape.name,
                interactedAt: api_1.interactedAtSchema
            })
        },
        '/rename': {
            method: 'PATCH',
            request: zod_1.z.object({
                id: projects_1.projectSchema.shape.id,
                name: projects_1.projectSchema.shape.name
            }),
            response: zod_1.z.object({
                name: projects_1.projectSchema.shape.name
            })
        },
        '/remove': {
            method: 'DELETE',
            rawRequest: zod_1.z
                .object({
                id: zod_1.z.string()
            })
                .transform(({ id }) => ({ id: Number(id) })),
            request: zod_1.z.object({
                id: projects_1.projectSchema.shape.id
            }),
            response: api_1.successObjectSchema
        }
    }
};

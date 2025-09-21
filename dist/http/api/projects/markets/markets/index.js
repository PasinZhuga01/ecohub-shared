"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marketsApi = void 0;
const zod_1 = require("zod");
const projects_1 = require("../../../../../db/projects");
const markets_1 = require("../../../../../db/projects/markets");
const api_1 = require("../../..");
exports.marketsApi = {
    basePath: '/projects/markets',
    endpoints: {
        '/get_list': {
            method: 'GET',
            rawRequest: zod_1.z
                .object({
                projectId: zod_1.z.string()
            })
                .transform(({ projectId }) => ({ projectId: Number(projectId) })),
            request: zod_1.z.object({
                projectId: projects_1.projectSchema.shape.id
            }),
            response: zod_1.z.array(zod_1.z.object({
                id: markets_1.marketSchema.shape.id,
                name: markets_1.marketSchema.shape.name,
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
                id: markets_1.marketSchema.shape.id
            }),
            response: zod_1.z.object({
                name: markets_1.marketSchema.shape.name
            })
        },
        '/create': {
            method: 'POST',
            request: zod_1.z.object({
                projectId: projects_1.projectSchema.shape.id,
                name: markets_1.marketSchema.shape.name
            }),
            response: zod_1.z.object({
                id: markets_1.marketSchema.shape.id,
                name: markets_1.marketSchema.shape.name,
                interactedAt: api_1.interactedAtSchema
            })
        },
        '/rename': {
            method: 'PATCH',
            request: zod_1.z.object({
                id: markets_1.marketSchema.shape.id,
                name: markets_1.marketSchema.shape.name
            }),
            response: zod_1.z.object({
                name: markets_1.marketSchema.shape.name
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
                id: markets_1.marketSchema.shape.id
            }),
            response: api_1.successObjectSchema
        }
    }
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marketsApi = void 0;
const zod_1 = require("zod");
const schemas_1 = require("../../schemas");
const db_1 = require("../../../../db");
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
                projectId: db_1.projectSchema.shape.id
            }),
            response: zod_1.z.array(zod_1.z.object({
                id: db_1.marketSchema.shape.id,
                name: db_1.marketSchema.shape.name,
                interactedAt: schemas_1.interactedAtSchema
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
                id: db_1.marketSchema.shape.id
            }),
            response: zod_1.z.object({
                name: db_1.marketSchema.shape.name
            })
        },
        '/create': {
            method: 'POST',
            request: zod_1.z.object({
                projectId: db_1.projectSchema.shape.id,
                name: db_1.marketSchema.shape.name
            }),
            response: zod_1.z.object({
                id: db_1.marketSchema.shape.id,
                name: db_1.marketSchema.shape.name,
                interactedAt: schemas_1.interactedAtSchema
            })
        },
        '/rename': {
            method: 'PATCH',
            request: zod_1.z.object({
                id: db_1.marketSchema.shape.id,
                name: db_1.marketSchema.shape.name
            }),
            response: zod_1.z.object({
                name: db_1.marketSchema.shape.name
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
                id: db_1.marketSchema.shape.id
            }),
            response: schemas_1.successObjectSchema
        }
    }
};

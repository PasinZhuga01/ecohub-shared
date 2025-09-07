"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const zod_1 = require("zod");
const common_schemas_1 = require("../common.schemas");
const db_schemas_1 = require("../../db.schemas");
exports.api = {
    basePath: '/projects',
    subPaths: ['/projects/currencies', '/projects/markets'],
    endpoints: {
        '/get_nav': {
            method: 'GET',
            request: zod_1.z.object({
                maxCount: zod_1.z.number().int().min(1)
            }),
            response: zod_1.z.array(zod_1.z.object({
                id: db_schemas_1.project.shape.id,
                name: db_schemas_1.project.shape.name,
                markets: zod_1.z.array(zod_1.z.object({
                    id: db_schemas_1.market.shape.id,
                    name: db_schemas_1.market.shape.name
                }))
            }))
        },
        '/get_page': {
            method: 'GET',
            request: common_schemas_1.emptyObject,
            response: zod_1.z.array(zod_1.z.object({
                id: db_schemas_1.project.shape.id,
                name: db_schemas_1.project.shape.name,
                interactedAt: db_schemas_1.project.shape.interacted_at
            }))
        },
        '/get': {
            method: 'GET',
            request: zod_1.z.object({
                id: db_schemas_1.project.shape.id
            }),
            response: zod_1.z.object({
                name: db_schemas_1.project.shape.name
            })
        },
        '/create': {
            method: 'POST',
            request: zod_1.z.object({
                name: db_schemas_1.project.shape.name
            }),
            response: zod_1.z.object({
                id: db_schemas_1.project.shape.id,
                name: db_schemas_1.project.shape.name,
                interactedAt: db_schemas_1.project.shape.interacted_at
            })
        },
        '/rename': {
            method: 'PATCH',
            request: zod_1.z.object({
                id: db_schemas_1.project.shape.id,
                name: db_schemas_1.project.shape.name
            }),
            response: zod_1.z.object({
                name: db_schemas_1.project.shape.name
            })
        },
        '/remove': {
            method: 'DELETE',
            request: zod_1.z.object({
                id: db_schemas_1.project.shape.id
            }),
            response: common_schemas_1.successObject
        }
    }
};

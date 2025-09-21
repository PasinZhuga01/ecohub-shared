"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catalogsItemsApi = void 0;
const zod_1 = require("zod");
const schemas_1 = require("../../../schemas");
const markets_1 = require("../../../../../db/projects/markets");
exports.catalogsItemsApi = {
    basePath: '/projects/markets/catalogs_items',
    endpoints: {
        '/get': {
            method: 'GET',
            rawRequest: zod_1.z
                .object({
                marketId: zod_1.z.string()
            })
                .transform(({ marketId }) => ({ marketId: Number(marketId) })),
            request: zod_1.z.object({
                marketId: markets_1.marketSchema.shape.id
            }),
            response: zod_1.z.array(zod_1.z.object({
                id: markets_1.catalogItemSchema.shape.id,
                name: markets_1.catalogItemSchema.shape.name,
                count: markets_1.catalogItemSchema.shape.count,
                price: markets_1.catalogItemSchema.shape.price
            }))
        },
        '/create': {
            method: 'POST',
            request: zod_1.z.object({
                marketId: markets_1.marketSchema.shape.id,
                name: markets_1.catalogItemSchema.shape.name,
                count: markets_1.catalogItemSchema.shape.count,
                price: markets_1.catalogItemSchema.shape.price
            }),
            response: zod_1.z.object({
                id: markets_1.catalogItemSchema.shape.id,
                name: markets_1.catalogItemSchema.shape.name,
                count: markets_1.catalogItemSchema.shape.count,
                price: markets_1.catalogItemSchema.shape.price
            })
        },
        '/edit': {
            method: 'PATCH',
            request: zod_1.z.union([
                zod_1.z.object({
                    id: markets_1.catalogItemSchema.shape.id,
                    component: zod_1.z.literal('count'),
                    value: markets_1.catalogItemSchema.shape.count
                }),
                zod_1.z.object({
                    id: markets_1.catalogItemSchema.shape.id,
                    component: zod_1.z.literal('price'),
                    value: markets_1.catalogItemSchema.shape.price
                })
            ]),
            response: zod_1.z.object({
                value: zod_1.z.union([markets_1.catalogItemSchema.shape.count, markets_1.catalogItemSchema.shape.price])
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
                id: markets_1.catalogItemSchema.shape.id
            }),
            response: schemas_1.successObjectSchema
        }
    }
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartsItemsApi = void 0;
const zod_1 = require("zod");
const schemas_1 = require("../../../schemas");
const db_1 = require("../../../../../db");
exports.cartsItemsApi = {
    basePath: '/projects/markets/carts_items',
    endpoints: {
        '/get': {
            method: 'GET',
            rawRequest: zod_1.z
                .object({
                marketId: zod_1.z.string()
            })
                .transform(({ marketId }) => ({ marketId: Number(marketId) })),
            request: zod_1.z.object({
                marketId: db_1.marketSchema.shape.id
            }),
            response: zod_1.z.array(zod_1.z.object({
                id: db_1.cartItemSchema.shape.id,
                catalogItemId: db_1.catalogItemSchema.shape.id,
                count: db_1.cartItemSchema.shape.count
            }))
        },
        '/add': {
            method: 'POST',
            request: zod_1.z.object({
                marketId: db_1.marketSchema.shape.id,
                catalogItemId: db_1.catalogItemSchema.shape.id
            }),
            response: zod_1.z.object({
                id: db_1.cartItemSchema.shape.id,
                catalogItemId: db_1.catalogItemSchema.shape.id,
                count: db_1.cartItemSchema.shape.count
            })
        },
        '/recount': {
            method: 'PATCH',
            request: zod_1.z.object({
                id: db_1.cartItemSchema.shape.id,
                count: db_1.cartItemSchema.shape.count
            }),
            response: zod_1.z.object({
                count: db_1.cartItemSchema.shape.count
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
                id: db_1.cartItemSchema.shape.id
            }),
            response: schemas_1.successObjectSchema
        },
        '/clear': {
            method: 'DELETE',
            rawRequest: zod_1.z
                .object({
                marketId: zod_1.z.string()
            })
                .transform(({ marketId }) => ({ marketId: Number(marketId) })),
            request: zod_1.z.object({
                marketId: db_1.marketSchema.shape.id
            }),
            response: schemas_1.successObjectSchema
        }
    }
};

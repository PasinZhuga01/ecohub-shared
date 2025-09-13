"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const zod_1 = require("zod");
const common_schemas_1 = require("../../common.schemas");
const db_schemas_1 = require("../../../db.schemas");
exports.api = {
    basePath: '/projects/markets/carts_items',
    endpoints: {
        '/get': {
            stringifyRequest: zod_1.z
                .object({
                marketId: zod_1.z.string()
            })
                .transform(({ marketId }) => ({ marketId: Number(marketId) })),
            request: zod_1.z.object({
                marketId: db_schemas_1.market.shape.id
            }),
            response: zod_1.z.array(zod_1.z.object({
                id: db_schemas_1.cartItem.shape.id,
                catalogItemId: db_schemas_1.catalogItem.shape.id,
                count: db_schemas_1.cartItem.shape.count
            }))
        },
        '/add': {
            request: zod_1.z.object({
                marketId: db_schemas_1.market.shape.id,
                catalogItemId: db_schemas_1.catalogItem.shape.id
            }),
            response: zod_1.z.object({
                id: db_schemas_1.cartItem.shape.id,
                catalogItemId: db_schemas_1.catalogItem.shape.id,
                count: db_schemas_1.cartItem.shape.count
            })
        },
        '/recount': {
            request: zod_1.z.object({
                id: db_schemas_1.cartItem.shape.id,
                count: db_schemas_1.cartItem.shape.count
            }),
            response: zod_1.z.object({
                count: db_schemas_1.cartItem.shape.count
            })
        },
        '/remove': {
            stringifyRequest: zod_1.z
                .object({
                id: zod_1.z.string()
            })
                .transform(({ id }) => ({ id: Number(id) })),
            request: zod_1.z.object({
                id: db_schemas_1.cartItem.shape.id
            }),
            response: common_schemas_1.successObject
        },
        '/clear': {
            stringifyRequest: zod_1.z
                .object({
                marketId: zod_1.z.string()
            })
                .transform(({ marketId }) => ({ marketId: Number(marketId) })),
            request: zod_1.z.object({
                marketId: db_schemas_1.market.shape.id
            }),
            response: common_schemas_1.successObject
        }
    }
};

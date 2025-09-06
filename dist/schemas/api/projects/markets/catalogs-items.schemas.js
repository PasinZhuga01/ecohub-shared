"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const zod_1 = require("zod");
const common_schemas_1 = require("../../common.schemas");
const db_schemas_1 = require("../../../db.schemas");
exports.api = {
    basePath: '/projects/markets/catalogs_items',
    endpoints: {
        '/get': {
            request: zod_1.z.object({
                marketId: db_schemas_1.market.shape.id
            }),
            response: zod_1.z.array(zod_1.z.object({
                id: db_schemas_1.catalogItem.shape.id,
                name: db_schemas_1.catalogItem.shape.name,
                count: db_schemas_1.catalogItem.shape.count,
                price: db_schemas_1.catalogItem.shape.price
            }))
        },
        '/create': {
            request: zod_1.z.object({
                marketId: db_schemas_1.market.shape.id,
                name: db_schemas_1.catalogItem.shape.name,
                count: db_schemas_1.catalogItem.shape.count,
                price: db_schemas_1.catalogItem.shape.price
            }),
            response: zod_1.z.object({
                id: db_schemas_1.catalogItem.shape.id,
                name: db_schemas_1.catalogItem.shape.name,
                count: db_schemas_1.catalogItem.shape.count,
                price: db_schemas_1.catalogItem.shape.price
            })
        },
        '/edit': {
            request: zod_1.z.union([
                zod_1.z.object({
                    id: db_schemas_1.catalogItem.shape.id,
                    component: zod_1.z.literal('count'),
                    value: db_schemas_1.catalogItem.shape.count
                }),
                zod_1.z.object({
                    id: db_schemas_1.catalogItem.shape.id,
                    component: zod_1.z.literal('price'),
                    value: db_schemas_1.catalogItem.shape.price
                })
            ]),
            response: zod_1.z.object({
                value: zod_1.z.union([db_schemas_1.catalogItem.shape.count, db_schemas_1.catalogItem.shape.price])
            })
        },
        '/remove': {
            request: zod_1.z.object({
                id: db_schemas_1.catalogItem.shape.id
            }),
            response: common_schemas_1.successObject
        }
    }
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.edit = exports.create = exports.get = void 0;
const zod_1 = require("zod");
const db_schemas_1 = require("../../../db.schemas");
exports.get = zod_1.z.object({
    marketId: db_schemas_1.market.shape.id
});
exports.create = zod_1.z.object({
    marketId: db_schemas_1.market.shape.id,
    name: db_schemas_1.catalogItem.shape.name,
    count: db_schemas_1.catalogItem.shape.count,
    price: db_schemas_1.catalogItem.shape.price
});
exports.edit = zod_1.z.union([
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
]);
exports.remove = zod_1.z.object({
    id: db_schemas_1.catalogItem.shape.id
});

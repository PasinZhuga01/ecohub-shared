"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = exports.remove = exports.recount = exports.add = exports.get = void 0;
const zod_1 = require("zod");
const db_schemas_1 = require("../../../db.schemas");
exports.get = zod_1.z.object({
    marketId: db_schemas_1.market.shape.id
});
exports.add = zod_1.z.object({
    marketId: db_schemas_1.market.shape.id,
    catalogItemId: db_schemas_1.catalogItem.shape.id
});
exports.recount = zod_1.z.object({
    id: db_schemas_1.cartItem.shape.id,
    count: db_schemas_1.cartItem.shape.count
});
exports.remove = zod_1.z.object({
    id: db_schemas_1.cartItem.shape.id
});
exports.clear = zod_1.z.object({
    marketId: db_schemas_1.market.shape.id
});

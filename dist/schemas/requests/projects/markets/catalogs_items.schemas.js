"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.edit = exports.create = exports.get = void 0;
const zod_1 = require("zod");
const common_schemas_1 = require("../../../common.schemas");
const name = zod_1.z.string().min(1).max(80);
const amount = zod_1.z.number().int().min(1);
exports.get = zod_1.z.object({ marketId: common_schemas_1.id });
exports.create = zod_1.z.object({ marketId: common_schemas_1.id, name, count: amount, price: amount });
exports.edit = zod_1.z.object({
    id: common_schemas_1.id,
    component: zod_1.z.union([zod_1.z.literal('count'), zod_1.z.literal('price')]),
    value: amount
});
exports.remove = zod_1.z.object({ id: common_schemas_1.id });

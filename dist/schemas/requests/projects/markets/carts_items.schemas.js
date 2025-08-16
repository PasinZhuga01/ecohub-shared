"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = exports.remove = exports.recount = exports.add = exports.get = void 0;
const zod_1 = require("zod");
const common_schemas_1 = require("../../../common.schemas");
exports.get = zod_1.z.object({ marketId: common_schemas_1.id });
exports.add = zod_1.z.object({ marketId: common_schemas_1.id, catalogItemId: common_schemas_1.id });
exports.recount = zod_1.z.object({
    id: common_schemas_1.id,
    count: zod_1.z.number().int().min(1)
});
exports.remove = zod_1.z.object({ id: common_schemas_1.id });
exports.clear = zod_1.z.object({ marketId: common_schemas_1.id });

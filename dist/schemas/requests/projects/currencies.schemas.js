"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shift = exports.remove = exports.rerate = exports.create = exports.get = void 0;
const zod_1 = require("zod");
const common_schemas_1 = require("../../common.schemas");
const name = zod_1.z.string().min(1).max(80);
const rate = zod_1.z.number().int().min(1);
exports.get = zod_1.z.object({ projectId: common_schemas_1.id });
exports.create = zod_1.z.object({
    projectId: common_schemas_1.id,
    icon: zod_1.z
        .file()
        .refine((file) => file.size <= 20 * 1024 * 1024)
        .refine((file) => ['image/png', 'image/jpeg'].includes(file.type)),
    name,
    rate
});
exports.rerate = zod_1.z.object({ id: common_schemas_1.id, rate });
exports.remove = zod_1.z.object({ id: common_schemas_1.id });
exports.shift = zod_1.z.object({
    projectId: common_schemas_1.id,
    value: zod_1.z.number().int().min(1)
});

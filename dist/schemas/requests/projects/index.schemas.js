"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.rename = exports.create = exports.get = void 0;
const zod_1 = require("zod");
const db_schemas_1 = require("../../db.schemas");
exports.get = zod_1.z.union([
    zod_1.z.object({
        isForNav: zod_1.z.literal(true),
        maxCount: zod_1.z.number().int().min(1)
    }),
    zod_1.z.object({
        isForNav: zod_1.z.literal(false)
    })
]);
exports.create = zod_1.z.object({
    name: db_schemas_1.project.shape.name
});
exports.rename = zod_1.z.object({
    id: db_schemas_1.project.shape.id,
    name: db_schemas_1.project.shape.name
});
exports.remove = zod_1.z.object({
    id: db_schemas_1.project.shape.id
});

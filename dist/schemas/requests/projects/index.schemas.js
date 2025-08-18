"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.rename = exports.create = exports.getNav = void 0;
const zod_1 = require("zod");
const db_schemas_1 = require("../../db.schemas");
exports.getNav = zod_1.z.object({
    maxCount: zod_1.z.number().int().min(1)
});
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

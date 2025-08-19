"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shift = exports.remove = exports.rerate = exports.create = exports.get = void 0;
const zod_1 = require("zod");
const db_schemas_1 = require("../../db.schemas");
exports.get = zod_1.z.object({
    projectId: db_schemas_1.project.shape.id
});
exports.create = zod_1.z.object({
    projectId: db_schemas_1.project.shape.id,
    name: db_schemas_1.currency.shape.name,
    rate: db_schemas_1.currency.shape.rate
});
exports.rerate = zod_1.z.object({
    id: db_schemas_1.currency.shape.id,
    rate: db_schemas_1.currency.shape.rate
});
exports.remove = zod_1.z.object({
    id: db_schemas_1.currency.shape.id
});
exports.shift = zod_1.z.object({
    projectId: db_schemas_1.project.shape.id,
    value: zod_1.z.number().int().min(1)
});

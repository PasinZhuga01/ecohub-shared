"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.rename = exports.create = exports.get = void 0;
const zod_1 = require("zod");
const db_schemas_1 = require("../../../db.schemas");
exports.get = zod_1.z.object({
    projectId: db_schemas_1.project.shape.id
});
exports.create = zod_1.z.object({
    projectId: db_schemas_1.project.shape.id,
    name: db_schemas_1.market.shape.name
});
exports.rename = zod_1.z.object({
    id: db_schemas_1.market.shape.id,
    name: db_schemas_1.market.shape.name
});
exports.remove = zod_1.z.object({
    id: db_schemas_1.market.shape.id
});

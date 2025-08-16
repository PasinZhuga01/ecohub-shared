"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const zod_1 = require("zod");
const db_schemas_1 = require("../db.schemas");
exports.auth = zod_1.z.object({
    isRegister: zod_1.z.boolean(),
    login: db_schemas_1.user.shape.login,
    password: db_schemas_1.user.shape.password
});

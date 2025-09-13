"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const zod_1 = require("zod");
const common_schemas_1 = require("./common.schemas");
const db_schemas_1 = require("../db.schemas");
exports.api = {
    basePath: '/profiles',
    endpoints: {
        '/auth': {
            method: 'POST',
            request: zod_1.z.object({
                isRegister: zod_1.z.boolean(),
                login: db_schemas_1.user.shape.login,
                password: db_schemas_1.user.shape.password
            }),
            response: zod_1.z.object({
                token: zod_1.z.string()
            })
        },
        '/get': {
            method: 'GET',
            request: common_schemas_1.emptyObject,
            response: zod_1.z.object({
                login: db_schemas_1.user.shape.login
            })
        }
    }
};

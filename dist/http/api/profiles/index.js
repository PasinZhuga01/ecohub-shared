"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profilesApi = void 0;
const zod_1 = require("zod");
const _db_1 = require("../../../db");
const api_1 = require("..");
exports.profilesApi = {
    basePath: '/profiles',
    endpoints: {
        '/auth': {
            method: 'POST',
            request: zod_1.z.object({
                isRegister: zod_1.z.boolean(),
                login: _db_1.userSchema.shape.login,
                password: _db_1.userSchema.shape.password
            }),
            response: zod_1.z.object({
                token: zod_1.z.string()
            })
        },
        '/get': {
            method: 'GET',
            request: api_1.emptyObjectSchema,
            response: zod_1.z.object({
                login: _db_1.userSchema.shape.login
            })
        }
    }
};

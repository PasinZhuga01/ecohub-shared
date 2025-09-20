"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profilesApi = void 0;
const zod_1 = require("zod");
const schemas_1 = require("../schemas");
const db_1 = require("../../../db");
exports.profilesApi = {
    basePath: '/profiles',
    endpoints: {
        '/auth': {
            method: 'POST',
            request: zod_1.z.object({
                isRegister: zod_1.z.boolean(),
                login: db_1.userSchema.shape.login,
                password: db_1.userSchema.shape.password
            }),
            response: zod_1.z.object({
                token: zod_1.z.string()
            })
        },
        '/get': {
            method: 'GET',
            request: schemas_1.emptyObjectSchema,
            response: zod_1.z.object({
                login: db_1.userSchema.shape.login
            })
        }
    }
};

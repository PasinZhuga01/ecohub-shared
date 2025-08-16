"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const zod_1 = require("zod");
exports.auth = zod_1.z.object({
    isRegister: zod_1.z.boolean(),
    login: zod_1.z.string().min(1).max(80),
    password: zod_1.z.string().min(1).max(255)
});

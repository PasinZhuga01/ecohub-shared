"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = exports.identifiedObjectSchema = void 0;
const zod_1 = require("zod");
exports.identifiedObjectSchema = zod_1.z.object({
    id: zod_1.z.number().int().min(1)
});
exports.userSchema = exports.identifiedObjectSchema.extend({
    login: zod_1.z.string().min(1).max(80),
    password: zod_1.z.string().min(1).max(255)
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencySchema = exports.projectSchema = void 0;
const zod_1 = require("zod");
const __1 = require("..");
exports.projectSchema = __1.identifiedObjectSchema.extend({
    user_id: __1.identifiedObjectSchema.shape.id,
    name: zod_1.z.string().min(1).max(80),
    interacted_at: zod_1.z.date()
});
exports.currencySchema = __1.identifiedObjectSchema.extend({
    project_id: __1.identifiedObjectSchema.shape.id,
    icon_src: zod_1.z.string().min(1).max(255),
    name: zod_1.z.string().min(1).max(80),
    rate: zod_1.z.number().int().min(1)
});

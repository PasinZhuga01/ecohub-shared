"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencySchema = exports.projectSchema = void 0;
const zod_1 = require("zod");
const __1 = require("..");
exports.projectSchema = __1.identifiedObjectSchema.extend(__1.interactedAtAwareObjectSchema.shape).extend({
    userId: __1.userSchema.shape.id,
    name: zod_1.z.string().min(1).max(80)
});
exports.currencySchema = __1.identifiedObjectSchema.extend({
    projectId: exports.projectSchema.shape.id,
    iconSrc: zod_1.z.string().min(1).max(255),
    name: zod_1.z.string().min(1).max(80),
    rate: zod_1.z.number().int().min(1)
});

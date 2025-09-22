"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartItemSchema = exports.catalogItemSchema = exports.marketSchema = void 0;
const zod_1 = require("zod");
const __1 = require("../..");
exports.marketSchema = __1.identifiedObjectSchema.extend(__1.interactedAtAwareObjectSchema.shape).extend({
    projectId: __1.identifiedObjectSchema.shape.id,
    name: zod_1.z.string().min(1).max(80)
});
exports.catalogItemSchema = __1.identifiedObjectSchema.extend({
    marketId: __1.identifiedObjectSchema.shape.id,
    name: zod_1.z.string().min(1).max(80),
    count: zod_1.z.number().int().min(1),
    price: zod_1.z.number().int().min(1)
});
exports.cartItemSchema = __1.identifiedObjectSchema.extend({
    marketId: __1.identifiedObjectSchema.shape.id,
    catalogItemId: __1.identifiedObjectSchema.shape.id,
    count: zod_1.z.number().int().min(1)
});

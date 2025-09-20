"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartItemSchema = exports.catalogItemSchema = exports.marketSchema = exports.currencySchema = exports.projectSchema = exports.userSchema = exports.identifiedObjectSchema = void 0;
const zod_1 = require("zod");
exports.identifiedObjectSchema = zod_1.z.object({
    id: zod_1.z.number().int().min(1)
});
exports.userSchema = exports.identifiedObjectSchema.extend({
    login: zod_1.z.string().min(1).max(80),
    password: zod_1.z.string().min(1).max(255)
});
exports.projectSchema = exports.identifiedObjectSchema.extend({
    user_id: exports.identifiedObjectSchema.shape.id,
    name: zod_1.z.string().min(1).max(80),
    interacted_at: zod_1.z.date()
});
exports.currencySchema = exports.identifiedObjectSchema.extend({
    project_id: exports.identifiedObjectSchema.shape.id,
    icon_src: zod_1.z.string().min(1).max(255),
    name: zod_1.z.string().min(1).max(80),
    rate: zod_1.z.number().int().min(1)
});
exports.marketSchema = exports.identifiedObjectSchema.extend({
    project_id: exports.identifiedObjectSchema.shape.id,
    name: zod_1.z.string().min(1).max(80),
    interacted_at: zod_1.z.date()
});
exports.catalogItemSchema = exports.identifiedObjectSchema.extend({
    market_id: exports.identifiedObjectSchema.shape.id,
    name: zod_1.z.string().min(1).max(80),
    count: zod_1.z.number().int().min(1),
    price: zod_1.z.number().int().min(1)
});
exports.cartItemSchema = exports.identifiedObjectSchema.extend({
    market_id: exports.identifiedObjectSchema.shape.id,
    catalog_item_id: exports.identifiedObjectSchema.shape.id,
    count: zod_1.z.number().int().min(1)
});

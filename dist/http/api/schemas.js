"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successObjectSchema = exports.emptyObjectSchema = exports.interactedAtSchema = void 0;
const zod_1 = require("zod");
exports.interactedAtSchema = zod_1.z.string().min(1);
exports.emptyObjectSchema = zod_1.z.object({}).strict();
exports.successObjectSchema = zod_1.z.object({ success: zod_1.z.literal(true) });

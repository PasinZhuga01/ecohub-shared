"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successObject = exports.emptyObject = exports.interactedAtSchema = void 0;
const zod_1 = require("zod");
exports.interactedAtSchema = zod_1.z.string().min(1);
exports.emptyObject = zod_1.z.object({}).strict();
exports.successObject = zod_1.z.object({ success: zod_1.z.literal(true) });

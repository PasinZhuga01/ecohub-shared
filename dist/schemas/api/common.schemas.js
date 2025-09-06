"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successObject = exports.emptyObject = void 0;
const zod_1 = require("zod");
exports.emptyObject = zod_1.z.object({}).strict();
exports.successObject = zod_1.z.object({ success: zod_1.z.literal(true) });

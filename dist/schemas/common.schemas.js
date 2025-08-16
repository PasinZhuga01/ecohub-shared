"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.id = void 0;
const zod_1 = require("zod");
exports.id = zod_1.z.number().int().min(1);

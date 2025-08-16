"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartItem = exports.catalogItem = exports.market = exports.currency = exports.project = exports.user = exports.identifiedObject = void 0;
const zod_1 = require("zod");
/* utils objects */
exports.identifiedObject = zod_1.z.object({ id: zod_1.z.number().int().min(1) });
/* database models */
exports.user = exports.identifiedObject.extend({
    login: zod_1.z.string().min(1).max(80),
    password: zod_1.z.string().min(1).max(255)
});
exports.project = exports.identifiedObject.extend({
    user_id: exports.identifiedObject.shape.id,
    name: zod_1.z.string().min(1).max(80),
    interacted_at: zod_1.z.date()
});
exports.currency = exports.identifiedObject.extend({
    project_id: exports.identifiedObject.shape.id,
    icon_src: zod_1.z.string().min(1).max(255),
    name: zod_1.z.string().min(1).max(80),
    rate: zod_1.z.number().int().min(1)
});
exports.market = exports.identifiedObject.extend({
    project_id: exports.identifiedObject.shape.id,
    name: zod_1.z.string().min(1).max(80),
    interacted_at: zod_1.z.date()
});
exports.catalogItem = exports.identifiedObject.extend({
    market_id: exports.identifiedObject.shape.id,
    name: zod_1.z.string().min(1).max(80),
    count: zod_1.z.number().int().min(1),
    price: zod_1.z.number().int().min(1)
});
exports.cartItem = exports.identifiedObject.extend({
    market_id: exports.identifiedObject.shape.id,
    catalog_item_id: exports.identifiedObject.shape.id,
    count: zod_1.z.number().int().min(1)
});

"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const zod_1 = require("zod");
const common_schemas_1 = require("../common.schemas");
const db_schemas_1 = require("../../db.schemas");
exports.api = {
    basePath: '/projects/currencies',
    endpoints: {
        '/get': {
            method: 'GET',
            stringifyRequest: zod_1.z
                .object({
                projectId: zod_1.z.string()
            })
                .transform(({ projectId }) => ({ projectId: Number(projectId) })),
            request: zod_1.z.object({
                projectId: db_schemas_1.project.shape.id
            }),
            response: zod_1.z.array(zod_1.z.object({
                id: db_schemas_1.currency.shape.id,
                iconSrc: db_schemas_1.currency.shape.icon_src,
                name: db_schemas_1.currency.shape.name,
                rate: db_schemas_1.currency.shape.rate
            }))
        },
        '/create': {
            method: 'POST',
            stringifyRequest: zod_1.z
                .object({
                projectId: zod_1.z.string(),
                name: zod_1.z.string(),
                rate: zod_1.z.string()
            })
                .transform((_a) => {
                var { projectId, rate } = _a, object = __rest(_a, ["projectId", "rate"]);
                return (Object.assign(Object.assign({}, object), { projectId: Number(projectId), rate: Number(rate) }));
            }),
            request: zod_1.z.object({
                projectId: db_schemas_1.project.shape.id,
                name: db_schemas_1.currency.shape.name,
                rate: db_schemas_1.currency.shape.rate
            }),
            response: zod_1.z.object({
                id: db_schemas_1.currency.shape.id,
                iconSrc: db_schemas_1.currency.shape.icon_src,
                name: db_schemas_1.currency.shape.name,
                rate: db_schemas_1.currency.shape.rate
            })
        },
        '/rerate': {
            method: 'PATCH',
            request: zod_1.z.object({
                id: db_schemas_1.currency.shape.id,
                rate: db_schemas_1.currency.shape.rate
            }),
            response: zod_1.z.object({
                rate: db_schemas_1.currency.shape.rate
            })
        },
        '/remove': {
            method: 'DELETE',
            stringifyRequest: zod_1.z
                .object({
                id: zod_1.z.string()
            })
                .transform(({ id }) => ({ id: Number(id) })),
            request: zod_1.z.object({
                id: db_schemas_1.currency.shape.id
            }),
            response: common_schemas_1.successObject
        },
        '/shift': {
            method: 'PATCH',
            request: zod_1.z.object({
                projectId: db_schemas_1.project.shape.id,
                value: db_schemas_1.currency.shape.rate
            }),
            response: common_schemas_1.successObject
        }
    }
};

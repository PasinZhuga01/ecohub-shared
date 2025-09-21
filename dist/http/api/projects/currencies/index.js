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
exports.currenciesApi = void 0;
const zod_1 = require("zod");
const schemas_1 = require("../../schemas");
const projects_1 = require("../../../../db/projects");
exports.currenciesApi = {
    basePath: '/projects/currencies',
    endpoints: {
        '/get': {
            method: 'GET',
            rawRequest: zod_1.z
                .object({
                projectId: zod_1.z.string()
            })
                .transform(({ projectId }) => ({ projectId: Number(projectId) })),
            request: zod_1.z.object({
                projectId: projects_1.projectSchema.shape.id
            }),
            response: zod_1.z.array(zod_1.z.object({
                id: projects_1.currencySchema.shape.id,
                iconSrc: projects_1.currencySchema.shape.icon_src,
                name: projects_1.currencySchema.shape.name,
                rate: projects_1.currencySchema.shape.rate
            }))
        },
        '/create': {
            method: 'POST',
            rawRequest: zod_1.z
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
                projectId: projects_1.projectSchema.shape.id,
                name: projects_1.currencySchema.shape.name,
                rate: projects_1.currencySchema.shape.rate
            }),
            response: zod_1.z.object({
                id: projects_1.currencySchema.shape.id,
                iconSrc: projects_1.currencySchema.shape.icon_src,
                name: projects_1.currencySchema.shape.name,
                rate: projects_1.currencySchema.shape.rate
            })
        },
        '/rerate': {
            method: 'PATCH',
            request: zod_1.z.object({
                id: projects_1.currencySchema.shape.id,
                rate: projects_1.currencySchema.shape.rate
            }),
            response: zod_1.z.object({
                rate: projects_1.currencySchema.shape.rate
            })
        },
        '/remove': {
            method: 'DELETE',
            rawRequest: zod_1.z
                .object({
                id: zod_1.z.string()
            })
                .transform(({ id }) => ({ id: Number(id) })),
            request: zod_1.z.object({
                id: projects_1.currencySchema.shape.id
            }),
            response: schemas_1.successObjectSchema
        },
        '/shift': {
            method: 'PATCH',
            request: zod_1.z.object({
                projectId: projects_1.projectSchema.shape.id,
                value: projects_1.currencySchema.shape.rate
            }),
            response: schemas_1.successObjectSchema
        }
    }
};

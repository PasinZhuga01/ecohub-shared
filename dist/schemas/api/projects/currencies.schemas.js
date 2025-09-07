"use strict";
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

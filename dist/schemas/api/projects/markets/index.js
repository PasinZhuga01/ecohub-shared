"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartsItemsApi = exports.catalogsItemsApi = exports.marketsApi = void 0;
var index_schemas_1 = require("./index.schemas");
Object.defineProperty(exports, "marketsApi", { enumerable: true, get: function () { return index_schemas_1.api; } });
var catalogs_items_schemas_1 = require("./catalogs-items.schemas");
Object.defineProperty(exports, "catalogsItemsApi", { enumerable: true, get: function () { return catalogs_items_schemas_1.api; } });
var carts_items_schemas_1 = require("./carts-items.schemas");
Object.defineProperty(exports, "cartsItemsApi", { enumerable: true, get: function () { return carts_items_schemas_1.api; } });

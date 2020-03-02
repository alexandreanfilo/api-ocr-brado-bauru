"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.ContainerSchema = new mongoose_1.Schema({
    placa: String,
    placa_b64: String,
    url: String,
    posicao: String
});
//# sourceMappingURL=container.schema.js.map
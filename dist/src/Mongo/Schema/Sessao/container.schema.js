"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.ContainerSchema = new mongoose_1.Schema({
    placa_ocr: String,
    placa_util: String,
    placa_b64: String,
    url: String,
    posicao: String,
    check: Boolean,
    camera_id: Number
});
//# sourceMappingURL=container.schema.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.FrontalSchema = new mongoose_1.Schema({
    placa_ocr: String,
    placa_util: String,
    placa_b64: String,
    url: String,
    check: Boolean,
    camera_id: Number
});
//# sourceMappingURL=frontal.schema.js.map
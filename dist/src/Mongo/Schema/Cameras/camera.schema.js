"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gate_schema_1 = require("./gate.schema");
const mongoose_1 = require("mongoose");
const endereco_cam_schema_1 = require("./endereco_cam.schema");
exports.CameraSchema = new mongoose_1.Schema({
    camera_id: Number,
    tipo_ocr_id: Number,
    url_gravacao: String,
    ip: String,
    porta: Number,
    marca: String,
    posicao: Number,
    servidor: String,
    ativo: Number,
    sentido: Number,
    gate: gate_schema_1.GateSchema,
    endereco_cam: endereco_cam_schema_1.Endereco_CamSchema
});
//# sourceMappingURL=camera.schema.js.map
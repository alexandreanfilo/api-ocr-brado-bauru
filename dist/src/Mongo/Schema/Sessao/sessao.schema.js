"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const container_schema_1 = require("./container.schema");
const traseira_schema_1 = require("./traseira.schema");
const frontal_schema_1 = require("./frontal.schema");
const gate_schema_1 = require("./gate.schema");
const mongoose_1 = require("mongoose");
const fotos_frontal_schema_1 = require("./fotos_frontal.schema");
const fotos_traseira_schema_1 = require("./fotos_traseira.schema");
const fotos_container_schema_1 = require("./fotos_container.schema");
exports.SessaoSchema = new mongoose_1.Schema({
    sessao_id: Number,
    dh_inicio: Number,
    dh_fim: Number,
    sentido_gate: Number,
    operacao: String,
    timeout: Boolean,
    gate: gate_schema_1.GateSchema,
    frontal: frontal_schema_1.FrontalSchema,
    traseira: [traseira_schema_1.TraseiraSchema],
    container: [container_schema_1.ContainerSchema],
    fotos_frontal: [fotos_frontal_schema_1.Fotos_Frontal_Schema],
    fotos_traseira: [fotos_traseira_schema_1.Fotos_Traseira_Schema],
    fotos_container: [fotos_container_schema_1.Fotos_Container_Schema]
});
//# sourceMappingURL=sessao.schema.js.map
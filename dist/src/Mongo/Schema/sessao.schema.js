"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const container_schema_1 = require("./container.schema");
const traseira_schema_1 = require("./traseira.schema");
const frontal_schema_1 = require("./frontal.schema");
const mongoose_1 = require("mongoose");
exports.SessaoSchema = new mongoose_1.Schema({
    sessao_id: Number,
    dh_inicio: Number,
    dh_fim: Number,
    sentido_gate: String,
    gate: String,
    frontal: frontal_schema_1.FrontalSchema,
    traseira: [traseira_schema_1.TraseiraSchema],
    container: [container_schema_1.ContainerSchema]
});
//# sourceMappingURL=sessao.schema.js.map
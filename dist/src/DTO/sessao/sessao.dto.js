"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const frontal_dto_1 = require("./frontal.dto");
const traseira_dto_1 = require("./traseira.dto");
const container_dto_1 = require("./container.dto");
const gate_dto_1 = require("./gate.dto");
const fotos_frontal_dto_1 = require("./fotos_frontal.dto");
const fotos_container_dto_1 = require("./fotos_container.dto");
const fotos_traseira_1 = require("./fotos_traseira");
class SessaoDTO {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], SessaoDTO.prototype, "sessao_id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], SessaoDTO.prototype, "dh_inicio", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], SessaoDTO.prototype, "dh_fim", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], SessaoDTO.prototype, "sentido_gate", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SessaoDTO.prototype, "operacao", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], SessaoDTO.prototype, "timeout", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => gate_dto_1.GateDTO),
    class_validator_1.IsNotEmptyObject({ each: true }),
    class_validator_1.ValidateNested({ each: true }),
    __metadata("design:type", gate_dto_1.GateDTO)
], SessaoDTO.prototype, "gate", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => frontal_dto_1.FrontalDTO),
    class_validator_1.IsNotEmptyObject({ each: true }),
    class_validator_1.ValidateNested({ each: true }),
    __metadata("design:type", frontal_dto_1.FrontalDTO)
], SessaoDTO.prototype, "frontal", void 0);
__decorate([
    class_transformer_1.Type(() => traseira_dto_1.TraseiraDTO),
    __metadata("design:type", Array)
], SessaoDTO.prototype, "traseira", void 0);
__decorate([
    class_transformer_1.Type(() => container_dto_1.ContainerDTO),
    __metadata("design:type", Array)
], SessaoDTO.prototype, "container", void 0);
__decorate([
    class_transformer_1.Type(() => fotos_frontal_dto_1.FotosFrontalDTO),
    __metadata("design:type", Array)
], SessaoDTO.prototype, "fotos_frontal", void 0);
__decorate([
    class_transformer_1.Type(() => fotos_traseira_1.FotosTraseiraDTO),
    __metadata("design:type", Array)
], SessaoDTO.prototype, "fotos_traseira", void 0);
__decorate([
    class_transformer_1.Type(() => fotos_container_dto_1.FotosContainerDTO),
    __metadata("design:type", Array)
], SessaoDTO.prototype, "fotos_container", void 0);
exports.SessaoDTO = SessaoDTO;
//# sourceMappingURL=sessao.dto.js.map
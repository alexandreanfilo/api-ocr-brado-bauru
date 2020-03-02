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
const endereco_cam_dto_1 = require("./endereco_cam.dto");
const gate_dto_1 = require("./gate.dto");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CameraDTO {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CameraDTO.prototype, "camera_id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CameraDTO.prototype, "tipo_ocr_id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CameraDTO.prototype, "url_gravacao", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CameraDTO.prototype, "ip", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CameraDTO.prototype, "porta", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CameraDTO.prototype, "marca", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CameraDTO.prototype, "posicao", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CameraDTO.prototype, "servidor", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CameraDTO.prototype, "ativo", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CameraDTO.prototype, "sentido", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => gate_dto_1.GateDTO),
    class_validator_1.IsNotEmpty({ each: true }),
    class_validator_1.ValidateNested({ each: true }),
    __metadata("design:type", gate_dto_1.GateDTO)
], CameraDTO.prototype, "gate", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => endereco_cam_dto_1.Endereco_CamDTO),
    class_validator_1.IsNotEmpty({ each: true }),
    class_validator_1.ValidateNested({ each: true }),
    __metadata("design:type", endereco_cam_dto_1.Endereco_CamDTO)
], CameraDTO.prototype, "endereco_cam", void 0);
exports.CameraDTO = CameraDTO;
//# sourceMappingURL=camera.dto.js.map
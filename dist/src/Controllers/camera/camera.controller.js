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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const camera_service_1 = require("../../services/camera/camera.service");
const camera_dto_1 = require("../../DTO/camera/camera.dto");
let CameraController = class CameraController {
    constructor(cameraService) {
        this.cameraService = cameraService;
    }
    async buscaCameras() {
        return await this.cameraService.buscaCameras();
    }
    async buscaCameraPorId(cameraID) {
        return await this.cameraService.buscaCameraPorId(cameraID);
    }
    async allRegister() {
        return await this.cameraService.allRegister();
    }
    async salvaCamera(newCamera) {
        return await this.cameraService.salvaCamera(newCamera);
    }
    async atualizaCamera(cameraID, newCamera) {
        return await this.cameraService.atualizaCamera(cameraID, newCamera);
    }
    async apagaCamera(cameraID) {
        return await this.cameraService.apagaCamera(cameraID);
    }
};
__decorate([
    common_1.Get('/allCont'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CameraController.prototype, "buscaCameras", null);
__decorate([
    common_1.Get('id/:cameraID'),
    __param(0, common_1.Param('cameraID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CameraController.prototype, "buscaCameraPorId", null);
__decorate([
    common_1.Get('/allReg'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CameraController.prototype, "allRegister", null);
__decorate([
    common_1.Post('/insert'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [camera_dto_1.CameraDTO]),
    __metadata("design:returntype", Promise)
], CameraController.prototype, "salvaCamera", null);
__decorate([
    common_1.Patch('update/:cameraID'),
    __param(0, common_1.Param('cameraID')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, camera_dto_1.CameraDTO]),
    __metadata("design:returntype", Promise)
], CameraController.prototype, "atualizaCamera", null);
__decorate([
    common_1.Delete('erase/:cameraID'),
    __param(0, common_1.Param('cameraID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CameraController.prototype, "apagaCamera", null);
CameraController = __decorate([
    common_1.Controller('brado_camera'),
    __metadata("design:paramtypes", [camera_service_1.CameraService])
], CameraController);
exports.CameraController = CameraController;
//# sourceMappingURL=camera.controller.js.map
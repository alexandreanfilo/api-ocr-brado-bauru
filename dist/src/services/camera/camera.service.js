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
const cameras_repository_1 = require("./../../Mongo/Repository/cameras/cameras.repository");
const common_1 = require("@nestjs/common");
let CameraService = class CameraService {
    constructor(cameraRepository) {
        this.cameraRepository = cameraRepository;
    }
    async buscaCameras() {
        const todasCameras = await this.cameraRepository.buscaCameras();
        if (!todasCameras.length) {
            throw new common_1.BadRequestException('Nenhum registro encontrado');
        }
        return todasCameras;
    }
    async buscaCameraPorId(cameraID) {
        try {
            const sucesso = await this.cameraRepository.buscaCameraPorId(cameraID);
            if (!sucesso) {
                throw new common_1.BadRequestException('Sem Nehnum Resultado');
            }
            return sucesso;
        }
        catch (e) {
            throw new common_1.BadRequestException('Sem Nenhum Resultado');
        }
    }
    async salvaCamera(newCamera) {
        return await this.cameraRepository.salvaCamera(newCamera);
    }
    async atualizaCamera(cameraID, newCamera) {
        const sucesso = await this.cameraRepository.buscaCameraPorId(cameraID);
        if (!sucesso) {
            throw new common_1.BadRequestException('Sem Nenhum Resultado');
        }
        const cameraAtualizada = await this.cameraRepository.atualizaCamera(cameraID, newCamera);
        if (cameraAtualizada) {
            return await this.cameraRepository.buscaCameraPorId(cameraID);
        }
        else {
            throw new common_1.BadRequestException('Erro ao Atualizar');
        }
    }
    async allRegister() {
        const todosRegistros = await this.cameraRepository.allRegister();
        if (!todosRegistros) {
            throw new common_1.BadRequestException('Database is empty');
        }
        return todosRegistros;
    }
    async apagaCamera(cameraID) {
        try {
            return await this.cameraRepository.apagaCamera(cameraID);
        }
        catch (e) {
            throw new common_1.BadRequestException('Camera nao existe');
        }
    }
};
CameraService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [cameras_repository_1.CameraRepository])
], CameraService);
exports.CameraService = CameraService;
//# sourceMappingURL=camera.service.js.map
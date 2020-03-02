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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CameraRepository = class CameraRepository {
    constructor(cameraModel) {
        this.cameraModel = cameraModel;
    }
    async buscaCameras() {
        return await this.cameraModel.find({}, { __v: false }).sort({ name: +1 });
    }
    async buscaCameraPorId(cameraID) {
        return await this.cameraModel.findById(cameraID, { __v: false });
    }
    async salvaCamera(newCamera) {
        const salvaCamera = this.cameraModel(newCamera);
        return await salvaCamera.save();
    }
    async atualizaCamera(cameraID, newCamera) {
        return await this.cameraModel.replaceOne({ _id: cameraID }, newCamera);
    }
    async allRegister() {
        return await this.cameraModel.count();
    }
    async apagaCamera(cameraID) {
        return await this.cameraModel.findOneAndDelete({ _id: cameraID });
    }
};
CameraRepository = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('brado_camera')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], CameraRepository);
exports.CameraRepository = CameraRepository;
//# sourceMappingURL=cameras.repository.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const gate_service_1 = require("./services/gate/gate.service");
const gate_controller_1 = require("./Controllers/gate/gate.controller");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const sessao_controller_1 = require("./Controllers/sessao/sessao.controller");
const sessao_service_1 = require("./services/sessao/sessao.service");
const sessao_repository_1 = require("./Mongo/Repository/sessao/sessao.repository");
const sessao_schema_1 = require("./Mongo/Schema/Sessao/sessao.schema");
const camera_schema_1 = require("./Mongo/Schema/Cameras/camera.schema");
const camera_controller_1 = require("./Controllers/camera/camera.controller");
const camera_service_1 = require("./services/camera/camera.service");
const cameras_repository_1 = require("./Mongo/Repository/cameras/cameras.repository");
const gate_schema_1 = require("./Mongo/Schema/Gate/gate.schema");
const gate_repository_1 = require("./Mongo/Repository/gate/gate.repository");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://127.0.0.1:27018/database_ocr', { useNewUrlParser: true, useUnifiedTopology: true }),
            mongoose_1.MongooseModule.forFeature([
                { name: 'brado_sessao', schema: sessao_schema_1.SessaoSchema },
                { name: 'brado_camera', schema: camera_schema_1.CameraSchema },
                { name: 'brado_gate', schema: gate_schema_1.GateSchema }
            ])
        ],
        controllers: [sessao_controller_1.SessaoController, camera_controller_1.CameraController, gate_controller_1.GateController],
        providers: [sessao_service_1.SessaoService, sessao_repository_1.SessaoRepository, camera_service_1.CameraService, cameras_repository_1.CameraRepository, gate_service_1.GateService, gate_repository_1.GateRepository],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
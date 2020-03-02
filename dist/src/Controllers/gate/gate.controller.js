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
const gate_dto_1 = require("./../../DTO/gate/gate.dto");
const gate_service_1 = require("./../../services/gate/gate.service");
const common_1 = require("@nestjs/common");
const gate_interface_1 = require("../../Mongo/Interfaces/gate/gate.interface");
let GateController = class GateController {
    constructor(gateService) {
        this.gateService = gateService;
    }
    async buscaGate() {
        return await this.gateService.buscaGate();
    }
    async buscaGatePorId(gateID) {
        return await this.gateService.buscaGatePorId(gateID);
    }
    async allRegister() {
        return await this.gateService.allRegister();
    }
    async salvaGate(newGate) {
        return await this.gateService.salvaGate(newGate);
    }
    async atualizaGate(gateID, newGate) {
        return await this.gateService.atualizaGate(gateID, newGate);
    }
    async apagaGate(gateID) {
        return await this.gateService.apagaGate(gateID);
    }
};
__decorate([
    common_1.Get('/allCont'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GateController.prototype, "buscaGate", null);
__decorate([
    common_1.Get('id/:gateID'),
    __param(0, common_1.Param('gateID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GateController.prototype, "buscaGatePorId", null);
__decorate([
    common_1.Get('/allReg'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GateController.prototype, "allRegister", null);
__decorate([
    common_1.Post('/insert'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [gate_dto_1.GateDTO]),
    __metadata("design:returntype", Promise)
], GateController.prototype, "salvaGate", null);
__decorate([
    common_1.Patch('update/:gateID'),
    __param(0, common_1.Param('gateID')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, gate_dto_1.GateDTO]),
    __metadata("design:returntype", Promise)
], GateController.prototype, "atualizaGate", null);
__decorate([
    common_1.Delete('erase/:gateID'),
    __param(0, common_1.Param('gateID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GateController.prototype, "apagaGate", null);
GateController = __decorate([
    common_1.Controller('brado_gate'),
    __metadata("design:paramtypes", [gate_service_1.GateService])
], GateController);
exports.GateController = GateController;
//# sourceMappingURL=gate.controller.js.map
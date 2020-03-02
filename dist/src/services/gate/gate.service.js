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
const common_1 = require("@nestjs/common");
const gate_repository_1 = require("../../Mongo/Repository/gate/gate.repository");
const gate_interface_1 = require("../../Mongo/Interfaces/gate/gate.interface");
let GateService = class GateService {
    constructor(gateRepository) {
        this.gateRepository = gateRepository;
    }
    async buscaGate() {
        const todosGate = await this.gateRepository.buscaGate();
        if (!todosGate.length) {
            throw new common_1.BadRequestException('Nenhum Registro Encontrado');
        }
        return todosGate;
    }
    async buscaGatePorId(gateID) {
        try {
            const sucesso = await this.gateRepository.buscaGatePorId(gateID);
            if (!sucesso) {
                throw new common_1.BadRequestException('Sem Nenhum Resultado');
            }
            return sucesso;
        }
        catch (e) {
            throw new common_1.BadRequestException('Sem Nenhum Resultado');
        }
    }
    async salvaGate(newGate) {
        return await this.gateRepository.salvaGate(newGate);
    }
    async atualizaGate(gateID, newGate) {
        const sucesso = await this.gateRepository.buscaGatePorId(gateID);
        if (!sucesso) {
            throw new common_1.BadRequestException('Sem Nenhum Resultado');
        }
        const gateAtualizado = await this.gateRepository.atualizaGate(gateID, newGate);
        if (gateAtualizado) {
            return await this.gateRepository.buscaGatePorId(gateID);
        }
        else {
            throw new common_1.BadRequestException('Erro ao atualizar');
        }
    }
    async allRegister() {
        const todosRegistros = await this.gateRepository.allRegister();
        if (!todosRegistros) {
            throw new common_1.BadRequestException('Database is empty');
        }
        return todosRegistros;
    }
    async apagaGate(gateID) {
        try {
            return await this.gateRepository.apagaGate(gateID);
        }
        catch (e) {
            throw new common_1.BadRequestException('Gate nao existe');
        }
    }
};
GateService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [gate_repository_1.GateRepository])
], GateService);
exports.GateService = GateService;
//# sourceMappingURL=gate.service.js.map
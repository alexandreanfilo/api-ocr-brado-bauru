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
const gate_interface_1 = require("../../Interfaces/gate/gate.interface");
const mongoose_2 = require("mongoose");
let GateRepository = class GateRepository {
    constructor(gateModel) {
        this.gateModel = gateModel;
    }
    async buscaGate() {
        return await this.gateModel.find({}, { __v: false }).sort({ name: +1 });
    }
    async buscaGatePorId(gateID) {
        return await this.gateModel.findById(gateID, { __v: false });
    }
    async salvaGate(newGate) {
        const salvaGate = this.gateModel(newGate);
        return await salvaGate.save();
    }
    async atualizaGate(gateID, newGate) {
        return await this.gateModel.replaceOne({ _id: gateID }, newGate);
    }
    async allRegister() {
        return await this.gateModel.count();
    }
    async apagaGate(gateID) {
        return await this.gateModel.findOneAndDelete({ _id: gateID });
    }
};
GateRepository = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('brado_gate')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], GateRepository);
exports.GateRepository = GateRepository;
//# sourceMappingURL=gate.repository.js.map
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
const sessao_dto_1 = require("../../DTO/sessao.dto");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let SessaoRepository = class SessaoRepository {
    constructor(sessaoModel) {
        this.sessaoModel = sessaoModel;
    }
    async salvaSessao(newSessao) {
        const salvaSessao = this.sessaoModel(newSessao);
        return await salvaSessao.save();
    }
    async buscaSessao() {
        return await this.sessaoModel.find({}, { __v: false }).sort({ name: +1 });
    }
    async buscaSessaoPorId(sessaoID) {
        return await this.sessaoModel.findById(sessaoID, { __v: false });
    }
    async apagaSessao(sessaoID) {
        return this.sessaoModel.findOneAndDelete({ _id: sessaoID });
    }
    async atualizaSessao(sessaoID, newSessao) {
        return await this.sessaoModel.replaceOne({ _id: sessaoID }, newSessao);
    }
    async buscaSessaoPlaca(placaFrontal) {
        return await this.sessaoModel.find({
            $or: [
                {
                    "frontal.placa": { $in: placaFrontal }
                },
            ]
        });
    }
    async buscaSessaoPeriodo(inicio, fim) {
        const h_i = new Date(inicio.getTime());
        const h_f = new Date(fim.getTime());
        return await this.sessaoModel.find({
            dh_inicio: {
                '$gte': h_i,
                '$lte': h_f
            }
        });
    }
    async buscaSessaoData(data) {
        const hora = new Date(data.getTime());
        hora.setDate(data.getDate() + 1);
        const iu = data.getTime();
        console.log(iu);
        console.log(hora.getTime());
        return await this.sessaoModel.find({
            dh_inicio: {
                '$gte': iu,
                '$lte': hora.getTime()
            }
        });
    }
    async allRegister() {
        return await this.sessaoModel.count();
    }
};
SessaoRepository = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('sdf')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], SessaoRepository);
exports.SessaoRepository = SessaoRepository;
//# sourceMappingURL=sessao.repository.js.map
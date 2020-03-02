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
const sessao_service_1 = require("../../services/sessao/sessao.service");
const common_1 = require("@nestjs/common");
const sessao_dto_1 = require("../../DTO/sessao/sessao.dto");
let SessaoController = class SessaoController {
    constructor(sessaoService) {
        this.sessaoService = sessaoService;
    }
    async buscaSessao() {
        return await this.sessaoService.buscaSessao();
    }
    async buscaSessaoPorId(sessaoID) {
        return await this.sessaoService.buscaSessaoPorId(sessaoID);
    }
    async buscaSessaoData(req) {
        const p = req.query;
        const dt = new Date(p.dia);
        const hora = new Date(dt.getTime());
        hora.setDate(dt.getDate() + 1);
        const iu = dt.getTime();
        console.log(iu);
        console.log(hora.getTime());
        const query = {};
        Object.assign(query, {
            dh_inicio: {
                '$gte': iu,
                '$lte': hora.getTime()
            }
        });
        return await this.sessaoService.buscaSessaoData(query);
    }
    async buscaSessaoPeriodo(req) {
        const p = req.query;
        const begin = new Date(p.inicio);
        const finish = new Date(p.fim);
        const h_i = begin.getTime();
        finish.setDate(finish.getDate() + 1);
        const h_f = finish.getTime();
        console.log(p);
        const query = {};
        if (p.inicio) {
            Object.assign(query, {
                dh_inicio: {
                    '$gte': h_i,
                }
            });
        }
        if (p.fim) {
            Object.assign(query, {
                dh_fim: {
                    '$lte': h_f
                }
            });
        }
        if (p.placa) {
            Object.assign(query, {
                $or: [
                    {
                        "frontal.placa_util": {
                            $in: p.placa
                        }
                    },
                    {
                        "traseira.placa_util": {
                            $in: p.placa
                        }
                    },
                    {
                        "container.placa_util": {
                            $in: p.placa
                        }
                    }
                ]
            });
        }
        if (p.gate) {
            const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'W', 'Z',
                'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'w', 'z'];
            let tipo = "E_numero";
            for (let i = 0; i < letras.length; i++) {
                if (p.gate.charAt(0) === letras[i]) {
                    tipo = "E_letra";
                }
            }
            console.log(tipo);
            if (tipo === "E_numero") {
                const n = parseInt(p.gate, 10);
                Object.assign(query, {
                    "gate.gate_id": n
                });
            }
            else {
                Object.assign(query, {
                    "gate.descricao": p.gate
                });
            }
        }
        if (p.camera) {
            Object.assign(query, {
                $or: [
                    {
                        "frontal.camera_id": {
                            $in: p.camera
                        }
                    },
                    {
                        "traseira.camera_id": {
                            $in: p.camera
                        }
                    },
                    {
                        "container.camera_id": {
                            $in: p.camera
                        }
                    }
                ]
            });
        }
        return await this.sessaoService.buscaSessaoPeriodo(query);
    }
    async allRegister() {
        return await this.sessaoService.allRegister();
    }
    async salvaSessao(newSessao) {
        return await this.sessaoService.salvaSessao(newSessao);
    }
    async atualizaSessao(sessaoID, newSessao) {
        return await this.sessaoService.atualizaSessao(sessaoID, newSessao);
    }
    async apagaSessao(sessaoID) {
        return await this.sessaoService.apagaSessao(sessaoID);
    }
};
__decorate([
    common_1.Get('/allCont'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SessaoController.prototype, "buscaSessao", null);
__decorate([
    common_1.Get('id/:sessaoID'),
    __param(0, common_1.Param('sessaoID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SessaoController.prototype, "buscaSessaoPorId", null);
__decorate([
    common_1.Get('search_day'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SessaoController.prototype, "buscaSessaoData", null);
__decorate([
    common_1.Get('search'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SessaoController.prototype, "buscaSessaoPeriodo", null);
__decorate([
    common_1.Get('/allReg'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SessaoController.prototype, "allRegister", null);
__decorate([
    common_1.Post('/insert'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sessao_dto_1.SessaoDTO]),
    __metadata("design:returntype", Promise)
], SessaoController.prototype, "salvaSessao", null);
__decorate([
    common_1.Patch('update/:sessaoID'),
    __param(0, common_1.Param('sessaoID')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, sessao_dto_1.SessaoDTO]),
    __metadata("design:returntype", Promise)
], SessaoController.prototype, "atualizaSessao", null);
__decorate([
    common_1.Delete('erase/:sessaoID'),
    __param(0, common_1.Param('sessaoID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SessaoController.prototype, "apagaSessao", null);
SessaoController = __decorate([
    common_1.Controller('brado_sessao'),
    __metadata("design:paramtypes", [sessao_service_1.SessaoService])
], SessaoController);
exports.SessaoController = SessaoController;
//# sourceMappingURL=sessao.controller.js.map
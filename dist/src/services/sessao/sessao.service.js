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
const sessao_repository_1 = require("../../Mongo/Repository/sessao/sessao.repository");
let SessaoService = class SessaoService {
    constructor(sessaoRepository) {
        this.sessaoRepository = sessaoRepository;
    }
    async buscaSessao() {
        const todasSessao = await this.sessaoRepository.buscaSessao();
        if (!todasSessao.length) {
            throw new common_1.BadRequestException('Nenhum registro encontrado');
        }
        return todasSessao;
    }
    async salvaSessao(newSessao) {
        return await this.sessaoRepository.salvaSessao(newSessao);
    }
    async buscaSessaoPorId(sessaoID) {
        try {
            const sucesso = await this.sessaoRepository.buscaSessaoPorId(sessaoID);
            if (!sucesso) {
                throw new common_1.BadRequestException('Sem nenhum Resultado');
            }
            return sucesso;
        }
        catch (e) {
            throw new common_1.BadRequestException('Sem nenhum Resultado');
        }
    }
    async apagaSessao(sessaoID) {
        try {
            return await this.sessaoRepository.apagaSessao(sessaoID);
        }
        catch (e) {
            throw new common_1.BadRequestException('Essa sessao ano existe');
        }
    }
    async atualizaSessao(sessaoID, newSessao) {
        const sucesso = await this.sessaoRepository.buscaSessaoPorId(sessaoID);
        if (!sucesso) {
            throw new common_1.BadRequestException('Sem Nenhum Resultado');
        }
        const sessaoAtualizada = await this.sessaoRepository.atualizaSessao(sessaoID, newSessao);
        if (sessaoAtualizada) {
            return await this.sessaoRepository.buscaSessaoPorId(sessaoID);
        }
        else {
            throw new common_1.BadRequestException('Erro ao Atualizar');
        }
    }
    async buscaSessaoData(query) {
        try {
            const sucesso = await this.sessaoRepository.buscaSessaoData(query);
            if (!sucesso) {
                throw new common_1.BadRequestException('Sem nenhum Resultado');
            }
            return sucesso;
        }
        catch (e) {
            throw new common_1.BadRequestException('Sem nenhum Resultado');
        }
    }
    async buscaSessaoPeriodo(query) {
        try {
            const sucesso = await this.sessaoRepository.buscaSessaoPeriodo(query);
            if (!sucesso) {
                throw new common_1.BadRequestException('Sem nenhum Resultado');
            }
            return sucesso;
        }
        catch (e) {
            throw new common_1.BadRequestException(e);
        }
    }
    async allRegister() {
        const todosRegistros = await this.sessaoRepository.allRegister();
        if (!todosRegistros) {
            throw new common_1.BadRequestException('Database is empty');
        }
        return todosRegistros;
    }
};
SessaoService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [sessao_repository_1.SessaoRepository])
], SessaoService);
exports.SessaoService = SessaoService;
//# sourceMappingURL=sessao.service.js.map
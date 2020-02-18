import { Sessao } from './../../Mongo/Interfaces/sessao.interface';
import { SessaoService } from './../../services/sessao/sessao.service';
import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { SessaoDTO } from '../../DTO/sessao.dto';


@Controller('sessao')
export class SessaoController {

    constructor(
        private readonly sessaoService : SessaoService
    ){}
    
    @Get()
    async buscaSessao(): Promise <Sessao[]> {
        return await this.sessaoService.buscaSessao();
    }

    @Get('id/:sessaoID')
    async buscaSessaoPorId(@Param('sessaoID') sessaoID: string): Promise <Sessao> {
        return await this.sessaoService.buscaSessaoPorId(sessaoID);
    }

    @Get('placa/:placaFrontal')
    async buscaSessaoPlaca(@Param('placaFrontal') placaFrontal: string): Promise <Sessao[]> {
        return await this.sessaoService.buscaSessaoPlaca(placaFrontal);
    }

    @Get('data/:data')
    async buscaSessaoData(@Param('data') data: string): Promise<Sessao[]>{
        return await this.sessaoService.buscaSessaoData(data);
    }

    @Post()
    async salvaSessao(@Body() newSessao: SessaoDTO): Promise <Sessao> {
        return await this.sessaoService.salvaSessao( newSessao ) 
    }

    @Patch(':sessaoID')
    async atualizaSessao(@Param('sessaoID') sessaoID: string, @Body() newSessao: SessaoDTO): Promise <Sessao> {
        return await this.sessaoService.atualizaSessao(sessaoID, newSessao);
    }

    @Delete(':sessaoID')
    async apagaSessao(@Param('sessaoID') sessaoID : string): Promise <Sessao> {
        return await this.sessaoService.apagaSessao(sessaoID);
    }

}

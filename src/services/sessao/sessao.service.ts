import { Sessao } from './../../Mongo/Interfaces/sessao.interface';
import { SessaoDTO } from './../../DTO/sessao.dto';
import { Injectable, BadRequestException } from '@nestjs/common';
import { SessaoRepository } from 'src/Mongo/Repository/sessao.repository';
import { promises } from 'dns';

@Injectable()
export class SessaoService {

    constructor (
        private readonly sessaoRepository : SessaoRepository
    ){}
 
    async buscaSessao(): Promise <Sessao[]> {
        
        const todasSessao = await this.sessaoRepository.buscaSessao();
    
        if (!todasSessao.length) {
            throw new BadRequestException ('Nenhum registro encontrado');
        }

        return todasSessao;
    }

    async salvaSessao( newSessao: SessaoDTO): Promise <Sessao> {
      
        return await this.sessaoRepository.salvaSessao(newSessao);
    }

    async buscaSessaoPorId(sessaoID : string): Promise <Sessao> {
       
        try {
            const sucesso = await this.sessaoRepository.buscaSessaoPorId(sessaoID);
        
            if(!sucesso){
                throw new BadRequestException ('Sem nenhum Resultado');
            }

            return sucesso;    
        } catch (e) {
            throw new BadRequestException ('Sem nenhum Resultado');
        }
        
    }

    async apagaSessao(sessaoID :  string): Promise <Sessao> {
      
        try {
            return await this.sessaoRepository.apagaSessao(sessaoID);
        } catch (e) {
            throw new BadRequestException('Essa sessao ano existe');
        }
    }

    async atualizaSessao(sessaoID: string, newSessao: SessaoDTO): Promise <Sessao> {
        
        const sucesso = await this.sessaoRepository.buscaSessaoPorId(sessaoID);

        if(!sucesso){
            throw new BadRequestException ('Sem Nenhum Resultado');
        }

        const sessaoAtualizada =  await this.sessaoRepository.atualizaSessao(sessaoID, newSessao);
   
        if(sessaoAtualizada){
            return await this.sessaoRepository.buscaSessaoPorId(sessaoID);
        } else {
            throw new BadRequestException('Erro ao Atualizar');
        }
    }

    async buscaSessaoPlaca(placaFrontal: string): Promise<Sessao[]>{

        const sessaoEncontrada = await this.sessaoRepository.buscaSessaoPlaca(placaFrontal);

        if(!sessaoEncontrada.length){
            throw new BadRequestException('Sem Registros');
        }
        return sessaoEncontrada;
    }

    async buscaSessaoData(data: string): Promise <Sessao[]>{
         
        const sessaoEncontrada = await this.sessaoRepository.buscaSessaoData(data);

        if (!sessaoEncontrada.length){
                throw new BadRequestException('Sem Registro');
        }

        return sessaoEncontrada;
    }
}

import { Sessao } from '../../Mongo/Interfaces/sessao/sessao.interface';
import { SessaoDTO } from '../../DTO/sessao/sessao.dto';
import { Injectable, BadRequestException } from '@nestjs/common';
import { SessaoRepository } from 'src/Mongo/Repository/sessao/sessao.repository';
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


    async buscaSessaoData(query : object): Promise <Sessao[]>{
        
            
        try {
            const sucesso = await this.sessaoRepository.buscaSessaoData(query);

            if(!sucesso){
                throw new BadRequestException ('Sem nenhum Resultado');
            }

            return sucesso;
        } catch (e) {
            throw new BadRequestException ('Sem nenhum Resultado');
        }
     
        
    }

    async buscaSessaoPeriodo(query : object ): Promise <Sessao[]>{
            
        try {
            const sucesso = await this.sessaoRepository.buscaSessaoPeriodo(query);

            if(!sucesso){
                throw new BadRequestException ('Sem nenhum Resultado');
            }
            return sucesso;
        } catch (e) {
            throw new BadRequestException (e);
        }
     
    }

    async allRegister(): Promise <Sessao> {
        
        const todosRegistros = await this.sessaoRepository.allRegister();
    
        if (!todosRegistros) {
            throw new BadRequestException ('Database is empty');
        }

        return todosRegistros;
    }
}
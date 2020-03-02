import { GateDTO } from './../../DTO/gate/gate.dto';
import { Injectable, BadRequestException } from '@nestjs/common';
import { GateRepository } from 'src/Mongo/Repository/gate/gate.repository';
import { Gate } from 'src/Mongo/Interfaces/gate/gate.interface';

@Injectable()
export class GateService {

    constructor (
        private readonly gateRepository : GateRepository
    ) { }

    async buscaGate() : Promise <Gate[]> {
        const todosGate = await this.gateRepository.buscaGate();

        if(!todosGate.length){
            throw new BadRequestException ('Nenhum Registro Encontrado');
        }

        return todosGate;
    }

    async buscaGatePorId (gateID : string) : Promise <Gate> {
        try {
            const sucesso = await this.gateRepository.buscaGatePorId(gateID);

            if(!sucesso){
                throw new BadRequestException('Sem Nenhum Resultado');
            }

            return sucesso;
        } catch (e) {
            throw new BadRequestException('Sem Nenhum Resultado');
        }
    }

    async salvaGate ( newGate : GateDTO ) : Promise <Gate> {
        return await this.gateRepository.salvaGate( newGate );
    }

    async atualizaGate(gateID : string, newGate : GateDTO): Promise <Gate> {
        const sucesso = await this.gateRepository.buscaGatePorId(gateID);

        if(!sucesso){
            throw new BadRequestException('Sem Nenhum Resultado');
        }

        const gateAtualizado = await this.gateRepository.atualizaGate(gateID, newGate);
        
        if(gateAtualizado){
            return await this.gateRepository.buscaGatePorId(gateID);
        } else {
            throw new BadRequestException('Erro ao atualizar');
        }
    }

    async allRegister(): Promise <Gate> {
        const todosRegistros = await this.gateRepository.allRegister();

        if(!todosRegistros){
            throw new BadRequestException('Database is empty');
        }

        return todosRegistros;
    }

    async apagaGate(gateID : string): Promise <Gate> {
        try {
            return await this.gateRepository.apagaGate(gateID);
        } catch (e) {
            throw new BadRequestException('Gate nao existe')
        }
    }
}

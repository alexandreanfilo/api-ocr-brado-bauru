import { GateDTO } from './../../DTO/gate/gate.dto';
import { GateRepository } from 'src/Mongo/Repository/gate/gate.repository';
import { Gate } from 'src/Mongo/Interfaces/gate/gate.interface';
export declare class GateService {
    private readonly gateRepository;
    constructor(gateRepository: GateRepository);
    buscaGate(): Promise<Gate[]>;
    buscaGatePorId(gateID: string): Promise<Gate>;
    salvaGate(newGate: GateDTO): Promise<Gate>;
    atualizaGate(gateID: string, newGate: GateDTO): Promise<Gate>;
    allRegister(): Promise<Gate>;
    apagaGate(gateID: string): Promise<Gate>;
}

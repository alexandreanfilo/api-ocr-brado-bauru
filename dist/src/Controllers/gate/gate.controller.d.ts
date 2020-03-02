import { GateDTO } from './../../DTO/gate/gate.dto';
import { GateService } from './../../services/gate/gate.service';
import { Gate } from 'src/Mongo/Interfaces/gate/gate.interface';
export declare class GateController {
    private readonly gateService;
    constructor(gateService: GateService);
    buscaGate(): Promise<Gate[]>;
    buscaGatePorId(gateID: string): Promise<Gate>;
    allRegister(): Promise<Gate>;
    salvaGate(newGate: GateDTO): Promise<Gate>;
    atualizaGate(gateID: string, newGate: GateDTO): Promise<Gate>;
    apagaGate(gateID: string): Promise<Gate>;
}

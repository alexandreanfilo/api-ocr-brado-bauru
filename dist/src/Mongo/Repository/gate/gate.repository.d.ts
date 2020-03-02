import { GateDTO } from './../../../DTO/gate/gate.dto';
import { Gate } from "src/Mongo/Interfaces/gate/gate.interface";
import { Model } from 'mongoose';
export declare class GateRepository {
    private readonly gateModel;
    constructor(gateModel: Model<Gate>);
    buscaGate(): Promise<Gate[]>;
    buscaGatePorId(gateID: string): Promise<Gate>;
    salvaGate(newGate: GateDTO): Promise<Gate>;
    atualizaGate(gateID: string, newGate: GateDTO): Promise<Gate>;
    allRegister(): Promise<Gate>;
    apagaGate(gateID: string): Promise<Gate>;
}

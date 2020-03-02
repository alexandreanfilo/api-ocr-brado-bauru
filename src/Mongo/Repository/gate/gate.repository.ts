import { GateDTO } from './../../../DTO/gate/gate.dto';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Gate } from "src/Mongo/Interfaces/gate/gate.interface";
import { Model } from 'mongoose';


@Injectable()
export class GateRepository {
    
    constructor (
        @InjectModel('brado_gate') private readonly gateModel : Model <Gate>
    ) { }

    async buscaGate(): Promise <Gate[]> {
        return await this.gateModel.find({}, { __v: false}).sort({ name : +1 });
    }

    async buscaGatePorId(gateID : string): Promise<Gate> {
        return await this.gateModel.findById(gateID, { __v : false});
    }
    
    async salvaGate ( newGate : GateDTO): Promise <Gate> {
        const salvaGate = this.gateModel(newGate);
        return await salvaGate.save();
    }

    async atualizaGate(gateID : string, newGate : GateDTO): Promise <Gate>{
        return await this.gateModel.replaceOne({ _id : gateID}, newGate);
    }

    async allRegister(): Promise <Gate> {
        return await this.gateModel.count();
    }

    async apagaGate(gateID : string): Promise<Gate> {
        return await this.gateModel.findOneAndDelete({ _id: gateID});
    }
}
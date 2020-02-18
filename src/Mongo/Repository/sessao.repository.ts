import { Injectable } from "@nestjs/common";
import { SessaoDTO } from "src/DTO/sessao.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { Sessao } from "../Interfaces/sessao.interface";


@Injectable()
export class SessaoRepository {

    constructor(
        @InjectModel('sessao') private readonly sessaoModel : Model<Sessao> 
    ){}

    async salvaSessao( newSessao : SessaoDTO ): Promise < Sessao > {
        const salvaSessao = this.sessaoModel(newSessao);
        return await salvaSessao.save();
    }

    async buscaSessao(): Promise <Sessao[]>{
        return await this.sessaoModel.find({}, { __v : false} ).sort({ name : +1});
    }

    async buscaSessaoPorId(sessaoID: string): Promise <Sessao> {
        return await this.sessaoModel.findById(sessaoID, { __v : false});
    } 

    async apagaSessao(sessaoID: string): Promise <Sessao> {
        return  this.sessaoModel.findOneAndDelete({ _id : sessaoID });
    }

    async atualizaSessao(sessaoID: string, newSessao: SessaoDTO): Promise <Sessao> {
        return await this.sessaoModel.replaceOne ( { _id : sessaoID}, newSessao)
    }

    async buscaSessaoPlaca(placaFrontal: string): Promise<Sessao[]>{
        return await this.sessaoModel.find({
            
            $or : [
                {
                    "frontal.placa" : { $in : placaFrontal }
                },
            ]
        },
            {
                __v : false 
            },
        )
    }

    async buscaSessaoData(data: string): Promise<Sessao[]>{

        return await this.sessaoModel.find({
            dh_inicio: {
                '$regex' : data, '$options' : 'i'
            }
            },
            {
               __v : false 
            }
        )
    }
}
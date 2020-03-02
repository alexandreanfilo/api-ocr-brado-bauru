import { SessaoDTO } from "src/DTO/sessao/sessao.dto";
import { Model } from 'mongoose';
import { Sessao } from "../../Interfaces/sessao/sessao.interface";
export declare class SessaoRepository {
    private readonly sessaoModel;
    constructor(sessaoModel: Model<Sessao>);
    salvaSessao(newSessao: SessaoDTO): Promise<Sessao>;
    buscaSessao(): Promise<Sessao[]>;
    buscaSessaoPorId(sessaoID: string): Promise<Sessao>;
    apagaSessao(sessaoID: string): Promise<Sessao>;
    atualizaSessao(sessaoID: string, newSessao: SessaoDTO): Promise<Sessao>;
    buscaSessaoPeriodo(query: object): Promise<Sessao[]>;
    buscaSessaoData(query: object): Promise<Sessao[]>;
    allRegister(): Promise<Sessao>;
}

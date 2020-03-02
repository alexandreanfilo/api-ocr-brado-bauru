import { SessaoDTO } from "src/DTO/sessao.dto";
import { Model } from 'mongoose';
import { Sessao } from "../Interfaces/sessao.interface";
export declare class SessaoRepository {
    private readonly sessaoModel;
    constructor(sessaoModel: Model<Sessao>);
    salvaSessao(newSessao: SessaoDTO): Promise<Sessao>;
    buscaSessao(): Promise<Sessao[]>;
    buscaSessaoPorId(sessaoID: string): Promise<Sessao>;
    apagaSessao(sessaoID: string): Promise<Sessao>;
    atualizaSessao(sessaoID: string, newSessao: SessaoDTO): Promise<Sessao>;
    buscaSessaoPlaca(placaFrontal: string): Promise<Sessao[]>;
    buscaSessaoPeriodo(inicio: Date, fim: Date): Promise<Sessao[]>;
    buscaSessaoData(data: Date): Promise<Sessao[]>;
    allRegister(): Promise<Sessao>;
}

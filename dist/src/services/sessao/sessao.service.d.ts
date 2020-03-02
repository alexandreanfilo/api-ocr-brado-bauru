import { Sessao } from '../../Mongo/Interfaces/sessao/sessao.interface';
import { SessaoDTO } from '../../DTO/sessao/sessao.dto';
import { SessaoRepository } from 'src/Mongo/Repository/sessao/sessao.repository';
export declare class SessaoService {
    private readonly sessaoRepository;
    constructor(sessaoRepository: SessaoRepository);
    buscaSessao(): Promise<Sessao[]>;
    salvaSessao(newSessao: SessaoDTO): Promise<Sessao>;
    buscaSessaoPorId(sessaoID: string): Promise<Sessao>;
    apagaSessao(sessaoID: string): Promise<Sessao>;
    atualizaSessao(sessaoID: string, newSessao: SessaoDTO): Promise<Sessao>;
    buscaSessaoData(query: object): Promise<Sessao[]>;
    buscaSessaoPeriodo(query: object): Promise<Sessao[]>;
    allRegister(): Promise<Sessao>;
}

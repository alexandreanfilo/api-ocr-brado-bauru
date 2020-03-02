import { Sessao } from '../../Mongo/Interfaces/sessao/sessao.interface';
import { SessaoService } from '../../services/sessao/sessao.service';
import { SessaoDTO } from '../../DTO/sessao/sessao.dto';
export declare class SessaoController {
    private readonly sessaoService;
    constructor(sessaoService: SessaoService);
    buscaSessao(): Promise<Sessao[]>;
    buscaSessaoPorId(sessaoID: string): Promise<Sessao>;
    buscaSessaoData(req: any): Promise<Sessao[]>;
    buscaSessaoPeriodo(req: any): Promise<Sessao[]>;
    allRegister(): Promise<Sessao>;
    salvaSessao(newSessao: SessaoDTO): Promise<Sessao>;
    atualizaSessao(sessaoID: string, newSessao: SessaoDTO): Promise<Sessao>;
    apagaSessao(sessaoID: string): Promise<Sessao>;
}

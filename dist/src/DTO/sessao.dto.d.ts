import { FrontalDTO } from './frontal.dto';
import { TraseiraDTO } from './traseira.dto';
import { ContainerDTO } from './container.dto';
export declare class SessaoDTO {
    readonly sessao_id: number;
    readonly dh_inicio: number;
    readonly dh_fim: number;
    readonly sentido_gate: string;
    readonly gate: string;
    readonly frontal: FrontalDTO;
    readonly traseira: TraseiraDTO[];
    readonly container: ContainerDTO[];
}

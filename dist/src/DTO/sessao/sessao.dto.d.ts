import { FrontalDTO } from './frontal.dto';
import { TraseiraDTO } from './traseira.dto';
import { ContainerDTO } from './container.dto';
import { GateDTO } from './gate.dto';
import { FotosFrontalDTO } from './fotos_frontal.dto';
import { FotosContainerDTO } from './fotos_container.dto';
import { FotosTraseiraDTO } from './fotos_traseira';
export declare class SessaoDTO {
    readonly sessao_id: number;
    readonly dh_inicio: number;
    readonly dh_fim: number;
    readonly sentido_gate: number;
    readonly operacao: string;
    readonly timeout: boolean;
    readonly gate: GateDTO;
    readonly frontal: FrontalDTO;
    readonly traseira: TraseiraDTO[];
    readonly container: ContainerDTO[];
    readonly fotos_frontal: FotosFrontalDTO[];
    readonly fotos_traseira: FotosTraseiraDTO[];
    readonly fotos_container: FotosContainerDTO[];
}

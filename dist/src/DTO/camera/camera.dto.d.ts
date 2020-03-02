import { Endereco_CamDTO } from './endereco_cam.dto';
import { GateDTO } from './gate.dto';
export declare class CameraDTO {
    readonly camera_id: number;
    readonly tipo_ocr_id: number;
    readonly url_gravacao: string;
    readonly ip: string;
    readonly porta: number;
    readonly marca: string;
    readonly posicao: number;
    readonly servidor: string;
    readonly ativo: number;
    readonly sentido: number;
    readonly gate: GateDTO;
    readonly endereco_cam: Endereco_CamDTO;
}

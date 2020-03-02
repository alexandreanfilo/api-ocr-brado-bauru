import * as mongoose from 'mongoose';
export interface Camera extends Document {
    readonly _id: mongoose.Schema.Types.ObjectId;
    readonly camera_id: number;
    readonly tipo_ocr_id: number;
    readonly url_gravacao: string;
    readonly ip: string;
    readonly porta: number;
    readonly marca: string;
    readonly posicao: number;
    readonly servidor: string;
    readonly ativo: string;
    readonly sentido: string;
    readonly gate: object;
    readonly endereco_cam: object;
}

import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export interface Sessao extends Document {
    readonly _id: mongoose.Schema.Types.ObjectId;
    readonly sessao_id: number;
    readonly dh_inicio: number;
    readonly dh_fim: number;
    readonly sentido_gate: number;
    readonly operacao: string;
    readonly timeout: boolean;
    readonly gate: object;
    readonly frontal: object;
    readonly traseira: [object];
    readonly container: [object];
    readonly fotos_frontal: [object];
    readonly fotos_traseira: [object];
    readonly fotos_container: [object];
}

import { GateSchema } from './gate.schema';
import { Schema } from 'mongoose';
import { Endereco_CamSchema } from './endereco_cam.schema';


export const CameraSchema = new Schema ({

    camera_id     : Number,
    tipo_ocr_id   : Number,
    url_gravacao  : String, 
    ip            : String,
    porta         : Number,
    marca         : String,
    posicao       : Number,
    servidor      : String,
    ativo         : Number,
    sentido       : Number,
    gate          : GateSchema,
    endereco_cam  : Endereco_CamSchema
})
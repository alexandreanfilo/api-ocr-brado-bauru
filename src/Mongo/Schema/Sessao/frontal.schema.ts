import { Schema } from 'mongoose';

export const FrontalSchema = new Schema ({

    placa_ocr     : String,
    placa_util    : String,
    placa_b64     : String,
    url           : String,
    check         : Boolean,
    camera_id     : Number

})
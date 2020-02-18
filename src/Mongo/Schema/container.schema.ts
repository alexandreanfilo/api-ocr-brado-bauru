import { Schema } from 'mongoose';

export const ContainerSchema = new Schema ({
    
    placa     : String,
    placa_b64 : String,
    url       : String,
    posicao   : String
})
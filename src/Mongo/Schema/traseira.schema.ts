import { Schema } from 'mongoose';

export const TraseiraSchema = new Schema ({
    
    placa     : String,
    placa_b64 : String,
    url       : String

})
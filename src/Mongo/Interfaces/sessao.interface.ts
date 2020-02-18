import { Document, Schema } from 'mongoose';
import * as mongoose from 'mongoose';

export interface Sessao extends Document {
    
     readonly _id          : mongoose.Schema.Types.ObjectId;
     readonly sessao_id    : number,
     readonly dh_inicio    : string,
     readonly dh_fim       : string,
     readonly sentido_gate : string,
     readonly gate         : string, 
     readonly frontal      : [object],
     readonly traseira     : [object],
     readonly container    : [object]
}
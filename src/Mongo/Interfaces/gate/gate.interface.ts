import { Schema } from 'mongoose';
import * as mongoose from 'mongoose';

export interface Gate extends Document {
    
    readonly _id            : mongoose.Schema.Types.ObjectId;
    readonly gate_id        : number;
    readonly descricao      : string;
    readonly abreviatura    : string;
    
}
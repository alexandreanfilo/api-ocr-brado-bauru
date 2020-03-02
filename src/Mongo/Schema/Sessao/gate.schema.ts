import { Schema } from 'mongoose';

export const GateSchema = new Schema ({

    gate_id        : Number,
    descricao      : String,
    abreviatura    : String
})
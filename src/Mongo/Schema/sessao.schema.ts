import { ContainerSchema } from './container.schema';
import { TraseiraSchema } from './traseira.schema';
import { FrontalSchema } from './frontal.schema';
import { Schema } from 'mongoose';

export const SessaoSchema = new Schema ({

    sessao_id    : Number,
    dh_inicio    : String,
    dh_fim       : String,
    sentido_gate : String,
    gate         : String,
    frontal      : FrontalSchema,
    traseira     : [TraseiraSchema],
    container    : [ContainerSchema]

})
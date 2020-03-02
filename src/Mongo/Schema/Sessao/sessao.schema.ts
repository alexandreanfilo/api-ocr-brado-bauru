import { ContainerSchema } from './container.schema';
import { TraseiraSchema } from './traseira.schema';
import { FrontalSchema } from './frontal.schema';
import { GateSchema } from './gate.schema';
import { Schema } from 'mongoose';
import { Fotos_Frontal_Schema } from './fotos_frontal.schema';
import { Fotos_Traseira_Schema } from './fotos_traseira.schema';
import { Fotos_Container_Schema } from './fotos_container.schema';

export const SessaoSchema = new Schema ({

    sessao_id       : Number,
    dh_inicio       : Number,
    dh_fim          : Number,
    sentido_gate    : Number,
    operacao        : String,
    timeout         : Boolean,
    gate            : GateSchema,
    frontal         : FrontalSchema,
    traseira        : [TraseiraSchema],
    container       : [ContainerSchema],
    fotos_frontal  :  [Fotos_Frontal_Schema],
    fotos_traseira  : [Fotos_Traseira_Schema],
    fotos_container : [Fotos_Container_Schema]

})
import { IsNotEmpty, IsString, IsNumber, IsNotEmptyObject, ValidateNested, ArrayMinSize, IsArray, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

import { FrontalDTO } from './frontal.dto';
import { TraseiraDTO } from './traseira.dto';
import { ContainerDTO } from './container.dto';
import { GateDTO } from './gate.dto';
import { FotosFrontalDTO } from './fotos_frontal.dto';
import { FotosContainerDTO } from './fotos_container.dto';
import { FotosTraseiraDTO } from './fotos_traseira';

export class SessaoDTO {
    
    @IsNotEmpty()
    @IsNumber()
    readonly sessao_id: number;

    @IsNotEmpty()
    @IsNumber()
    readonly dh_inicio: number;

    @IsNotEmpty()
    @IsNumber()
    readonly dh_fim: number;

    @IsNotEmpty()
    @IsNumber()
    readonly sentido_gate: number;

    @IsNotEmpty()
    @IsString()
    readonly operacao: string;

    @IsNotEmpty()
    @IsBoolean()
    readonly timeout: boolean;

    @IsNotEmpty()
    @Type(() => GateDTO)
    @IsNotEmptyObject({each : true })
    @ValidateNested({ each : true })
    readonly gate: GateDTO;

    @IsNotEmpty()
    @Type(() => FrontalDTO)
    @IsNotEmptyObject({each : true })
    @ValidateNested({ each : true })
    readonly frontal: FrontalDTO;
    
    //@IsNotEmpty()
    //@ArrayMinSize(1)
    //@IsNotEmpty({ each : true })
    //@ValidateNested({ each : true })
    @Type(() => TraseiraDTO)
    readonly traseira: TraseiraDTO [];

    @Type(() => ContainerDTO)
    readonly container: ContainerDTO [];

    //@IsNotEmpty()
    @Type(() => FotosFrontalDTO)
    readonly fotos_frontal: FotosFrontalDTO [];

    //@IsNotEmpty()
    @Type(() => FotosTraseiraDTO)
    readonly fotos_traseira: FotosTraseiraDTO [];

    //@IsNotEmpty()
    @Type(() => FotosContainerDTO)
    readonly fotos_container: FotosContainerDTO [];


 }
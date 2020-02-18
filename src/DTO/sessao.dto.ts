import { IsNotEmpty, IsString, IsNumber, IsNotEmptyObject, ValidateNested, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';

import { FrontalDTO } from './frontal.dto';
import { TraseiraDTO } from './traseira.dto';
import { ContainerDTO } from './container.dto';

export class SessaoDTO {
    
    @IsNotEmpty()
    @IsNumber()
    readonly sessao_id: number;

    @IsNotEmpty()
    @IsString()
    readonly dh_inicio: string;

    @IsNotEmpty()
    @IsString()
    readonly dh_fim: string;

    @IsNotEmpty()
    @IsString()
    readonly sentido_gate: string;

    @IsNotEmpty()
    @IsString()
    readonly gate: string;

    @IsNotEmpty()
    @Type(() => FrontalDTO)
    @IsNotEmptyObject({each : true })
    @ValidateNested({ each : true })
    readonly frontal: FrontalDTO;
    
    @IsNotEmpty()
    @Type(() => TraseiraDTO)
    @ArrayMinSize(1)
    @IsNotEmpty({ each : true })
    @ValidateNested({ each : true })
    readonly traseira: TraseiraDTO [];

    @Type(() => ContainerDTO)
    readonly container: ContainerDTO [];
}
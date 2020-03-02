import { Endereco_CamDTO } from './endereco_cam.dto';
import { GateDTO } from './gate.dto';
import { IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

 

export class CameraDTO {

    @IsNotEmpty()
    @IsNumber()
    readonly camera_id : number;

    @IsNotEmpty()
    @IsNumber()
    readonly tipo_ocr_id : number;

    @IsNotEmpty()
    @IsString()
    readonly url_gravacao : string;

    @IsNotEmpty()
    @IsString()
    readonly ip : string;

    @IsNotEmpty()
    @IsNumber()
    readonly porta : number;

    @IsNotEmpty()
    @IsString()
    readonly marca : string;

    @IsNotEmpty()
    @IsNumber()
    readonly posicao : number;

    @IsNotEmpty()
    @IsString()
    readonly servidor : string;

    @IsNotEmpty()
    @IsNumber()
    readonly ativo : number;

    @IsNotEmpty()
    @IsNumber()
    readonly sentido : number;

    @IsNotEmpty()
    @Type(() => GateDTO)
    @IsNotEmpty({ each : true })
    @ValidateNested ({ each : true })
    readonly gate : GateDTO;

    @IsNotEmpty()
    @Type(() => Endereco_CamDTO)
    @IsNotEmpty({ each : true })
    @ValidateNested({ each : true })
    readonly endereco_cam : Endereco_CamDTO;

}
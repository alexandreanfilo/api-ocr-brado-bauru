import { IsNotEmpty, IsString, IsNumber, IsBoolean } from 'class-validator';

export class ContainerDTO {
    
    @IsNotEmpty()
    @IsString()
    readonly placa_ocr: string;

    @IsNotEmpty()
    @IsString()
    readonly placa_util: string;
    
    //@IsNotEmpty()
    @IsString()
    readonly placa_b64: string;

    @IsNotEmpty()
    @IsString()
    readonly url: string;

    @IsNotEmpty()
    @IsString()
    readonly posicao: string;

    @IsNotEmpty()
    @IsBoolean()
    readonly check: boolean;

    @IsNotEmpty()
    @IsNumber()
    readonly camera_id: number;
}	

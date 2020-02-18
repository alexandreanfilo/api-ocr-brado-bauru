import { IsNotEmpty, IsString } from 'class-validator';

export class TraseiraDTO {
    
    @IsNotEmpty()
    @IsString()
    readonly placa: string;
    
    @IsNotEmpty()
    @IsString()
    readonly placa_b64: string;

    @IsNotEmpty()
    @IsString()
    readonly url: string;    

}

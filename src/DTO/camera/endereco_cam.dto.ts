import { IsNotEmpty, IsString } from "class-validator";


export class Endereco_CamDTO {

    @IsNotEmpty()
    @IsString()
    readonly url_snapshot : string;

    @IsNotEmpty()
    @IsString()
    readonly url_stream : string;
    
}
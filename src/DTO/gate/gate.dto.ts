import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class GateDTO {

    @IsNotEmpty()
    @IsNumber()
    readonly gate_id : number;

    @IsNotEmpty()
    @IsString()
    readonly descricao : string;

    @IsNotEmpty()
    @IsString()
    readonly abreviatura : string;

}
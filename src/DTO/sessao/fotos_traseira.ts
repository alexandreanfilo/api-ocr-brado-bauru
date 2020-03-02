import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class FotosTraseiraDTO {

    @IsNotEmpty()
    @IsString()
    readonly url : string;

    @IsNotEmpty()
    @IsNumber()
    readonly camera_id : number;
}
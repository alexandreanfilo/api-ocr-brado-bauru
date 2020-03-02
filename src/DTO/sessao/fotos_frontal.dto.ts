import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class FotosFrontalDTO {

    @IsNotEmpty()
    @IsString()
    readonly url : string;

    @IsNotEmpty()
    @IsNumber()
    readonly camera_id : number;
}
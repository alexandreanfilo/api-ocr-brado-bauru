import { IsNotEmpty, IsString, IsNumber } from "class-validator";


export class FotosContainerDTO {

    @IsNotEmpty()
    @IsString()
    readonly url : string;

    @IsNotEmpty()
    @IsNumber()
    readonly camera_id : number;
}
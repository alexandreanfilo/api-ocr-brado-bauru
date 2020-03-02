import { CameraDTO } from './../../../DTO/camera/camera.dto';
import { Model } from 'mongoose';
import { Camera } from "../../Interfaces/camera/camera.interface";
export declare class CameraRepository {
    private readonly cameraModel;
    constructor(cameraModel: Model<Camera>);
    buscaCameras(): Promise<Camera[]>;
    buscaCameraPorId(cameraID: string): Promise<Camera>;
    salvaCamera(newCamera: CameraDTO): Promise<Camera>;
    atualizaCamera(cameraID: string, newCamera: CameraDTO): Promise<Camera>;
    allRegister(): Promise<Camera>;
    apagaCamera(cameraID: string): Promise<Camera>;
}

import { CameraService } from 'src/services/camera/camera.service';
import { Camera } from '../../Mongo/Interfaces/camera/camera.interface';
import { CameraDTO } from 'src/DTO/camera/camera.dto';
export declare class CameraController {
    private readonly cameraService;
    constructor(cameraService: CameraService);
    buscaCameras(): Promise<Camera[]>;
    buscaCameraPorId(cameraID: string): Promise<Camera>;
    allRegister(): Promise<Camera>;
    salvaCamera(newCamera: CameraDTO): Promise<Camera>;
    atualizaCamera(cameraID: string, newCamera: CameraDTO): Promise<Camera>;
    apagaCamera(cameraID: string): Promise<Camera>;
}

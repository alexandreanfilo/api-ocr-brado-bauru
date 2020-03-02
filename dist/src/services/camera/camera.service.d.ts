import { CameraDTO } from './../../DTO/camera/camera.dto';
import { CameraRepository } from './../../Mongo/Repository/cameras/cameras.repository';
import { Camera } from '../../Mongo/Interfaces/camera/camera.interface';
export declare class CameraService {
    private readonly cameraRepository;
    constructor(cameraRepository: CameraRepository);
    buscaCameras(): Promise<Camera[]>;
    buscaCameraPorId(cameraID: string): Promise<Camera>;
    salvaCamera(newCamera: CameraDTO): Promise<Camera>;
    atualizaCamera(cameraID: string, newCamera: CameraDTO): Promise<Camera>;
    allRegister(): Promise<Camera>;
    apagaCamera(cameraID: string): Promise<Camera>;
}

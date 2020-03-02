import { CameraDTO } from './../../../DTO/camera/camera.dto';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { Camera } from "../../Interfaces/camera/camera.interface";

@Injectable()
export class CameraRepository {

    constructor (
        @InjectModel('brado_camera') private readonly cameraModel : Model <Camera>

    ) { }

    async buscaCameras(): Promise <Camera[]> {
        return await this.cameraModel.find({}, { __v: false }).sort({ name : + 1});
    }

    async buscaCameraPorId(cameraID : string): Promise <Camera> {
        return await this.cameraModel.findById(cameraID, { __v: false});
    }

    async salvaCamera(newCamera : CameraDTO): Promise <Camera>{
        const salvaCamera = this.cameraModel(newCamera);
        return await salvaCamera.save();
    }

    async atualizaCamera(cameraID : string, newCamera : CameraDTO): Promise <Camera>{
        return await this.cameraModel.replaceOne({ _id: cameraID}, newCamera);
    }

    async allRegister(): Promise <Camera> {
        return await this.cameraModel.count();
    }

    async apagaCamera(cameraID: string): Promise<Camera> {
        return await this.cameraModel.findOneAndDelete({ _id: cameraID});
    }

}
import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CameraService } from 'src/services/camera/camera.service';
import { Camera } from '../../Mongo/Interfaces/camera/camera.interface';
import { CameraDTO } from 'src/DTO/camera/camera.dto';

@Controller('brado_camera')
export class CameraController {

    constructor (
        private readonly cameraService : CameraService
    ) {}

    @Get('/allCont')
    async buscaCameras(): Promise <Camera[]> {
        return await this.cameraService.buscaCameras();
    }

    @Get('id/:cameraID')
    async buscaCameraPorId(@Param('cameraID') cameraID : string): Promise <Camera>{
        return await this.cameraService.buscaCameraPorId(cameraID);
    }

    @Get('/allReg')
    async allRegister(): Promise<Camera> {
        return await this.cameraService.allRegister();
    }

    //===========================================================================================

    @Post('/insert')
    async salvaCamera(@Body() newCamera : CameraDTO): Promise <Camera> {
        return await this.cameraService.salvaCamera( newCamera );
    }

    //===========================================================================================

    @Patch('update/:cameraID')
    async atualizaCamera(@Param('cameraID') cameraID : string, @Body() newCamera: CameraDTO): Promise <Camera> {
        return await this.cameraService.atualizaCamera(cameraID, newCamera);
    }

    //===========================================================================================

    @Delete('erase/:cameraID')
    async apagaCamera(@Param('cameraID') cameraID: string): Promise<Camera>{
        return await this.cameraService.apagaCamera(cameraID);
    }
}

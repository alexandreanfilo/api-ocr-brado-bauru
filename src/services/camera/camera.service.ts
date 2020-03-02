import { CameraDTO } from './../../DTO/camera/camera.dto';
import { CameraRepository } from './../../Mongo/Repository/cameras/cameras.repository';
import { Injectable, BadRequestException } from '@nestjs/common';
import { Camera } from '../../Mongo/Interfaces/camera/camera.interface';

@Injectable()
export class CameraService {

    constructor (
        private readonly cameraRepository : CameraRepository
    ) { }

    async buscaCameras() : Promise <Camera[]> {
        
        const todasCameras = await this.cameraRepository.buscaCameras();

        if (!todasCameras.length){
            throw new BadRequestException ('Nenhum registro encontrado');
        }

        return todasCameras;
    }

    async buscaCameraPorId(cameraID : string) : Promise <Camera> {
        try {
            const sucesso = await this.cameraRepository.buscaCameraPorId(cameraID);

            if(!sucesso) {
                throw new BadRequestException('Sem Nehnum Resultado');
            }

            return sucesso;
        } catch (e) {
            throw new BadRequestException('Sem Nenhum Resultado');
        }
    }

    async salvaCamera( newCamera : CameraDTO ): Promise <Camera> {
        return await this.cameraRepository.salvaCamera( newCamera );
    }

    async atualizaCamera(cameraID : string, newCamera : CameraDTO): Promise <Camera> {
        const sucesso = await this.cameraRepository.buscaCameraPorId(cameraID);

        if(!sucesso){
            throw new BadRequestException('Sem Nenhum Resultado');
        }

        const cameraAtualizada = await this.cameraRepository.atualizaCamera(cameraID, newCamera);

        if(cameraAtualizada){
            return await this.cameraRepository.buscaCameraPorId(cameraID);
        } else {
            throw new BadRequestException ('Erro ao Atualizar');
        }
    }

    async allRegister(): Promise <Camera> {
        const todosRegistros = await this.cameraRepository.allRegister();

        if(!todosRegistros){
            throw new BadRequestException ('Database is empty');
        }

        return todosRegistros;
    }

    async apagaCamera(cameraID : string): Promise <Camera> {
        try {
            return await this.cameraRepository.apagaCamera(cameraID);
        } catch (e) {
            throw new BadRequestException('Camera nao existe');
        }
    }
}

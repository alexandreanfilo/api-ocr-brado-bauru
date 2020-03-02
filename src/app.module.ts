import { GateService } from './services/gate/gate.service';
import { GateController } from './Controllers/gate/gate.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SessaoController } from './Controllers/sessao/sessao.controller';
import { SessaoService } from './services/sessao/sessao.service';
import { SessaoRepository } from './Mongo/Repository/sessao/sessao.repository';
import { SessaoSchema } from './Mongo/Schema/Sessao/sessao.schema';

import { CameraSchema } from './Mongo/Schema/Cameras/camera.schema';
import { CameraController } from './Controllers/camera/camera.controller';
import { CameraService } from './services/camera/camera.service';
import { CameraRepository } from './Mongo/Repository/cameras/cameras.repository';
import { GateSchema } from './Mongo/Schema/Gate/gate.schema';
import { GateRepository } from './Mongo/Repository/gate/gate.repository';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27018/database_ocr', { useNewUrlParser : true , useUnifiedTopology : true }),
 
    MongooseModule.forFeature([
      { name : 'brado_sessao', schema : SessaoSchema },
      { name : 'brado_camera' , schema : CameraSchema },
      { name : 'brado_gate' , schema : GateSchema }
    ])
  ],
  controllers: [ SessaoController , CameraController , GateController],
  providers: [ SessaoService, SessaoRepository, CameraService, CameraRepository, GateService, GateRepository],
})
export class AppModule {}

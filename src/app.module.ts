import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SessaoController } from './Controllers/sessao/sessao.controller';
import { SessaoService } from './services/sessao/sessao.service';
import { SessaoRepository } from './Mongo/Repository/sessao.repository';
import { SessaoSchema } from './Mongo/Schema/sessao.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://172.21.27.45:27018/sessao_nest', { useNewUrlParser : true , useUnifiedTopology : true }),
 
    MongooseModule.forFeature([
      { name : 'sessao', schema : SessaoSchema } 
    ])
  ],
  controllers: [ SessaoController ],
  providers: [ SessaoService, SessaoRepository],
})
export class AppModule {}

import { GateDTO } from './../../DTO/gate/gate.dto';
import { GateService } from './../../services/gate/gate.service';
import { Controller, Post, Body, Get, Patch, Param, Delete } from '@nestjs/common';
import { Gate } from 'src/Mongo/Interfaces/gate/gate.interface';

@Controller('brado_gate')
export class GateController {

    constructor (
        private readonly gateService : GateService
    ) {}

  @Get('/allCont')
  async buscaGate(): Promise <Gate[]> {
    return await this.gateService.buscaGate();
  }

  @Get('id/:gateID')
  async buscaGatePorId(@Param('gateID') gateID : string ): Promise <Gate> {
      return await this.gateService.buscaGatePorId(gateID);
  }

  @Get('/allReg')
  async allRegister(): Promise<Gate> {
    return await this.gateService.allRegister();
  }

  //===========================================================================================

  @Post('/insert')
  async salvaGate(@Body() newGate : GateDTO): Promise <Gate> {
     return await this.gateService.salvaGate( newGate );
  }

  //===========================================================================================

  @Patch('update/:gateID')
  async atualizaGate(@Param('gateID') gateID : string, @Body() newGate: GateDTO): Promise <Gate>{
      return await this.gateService.atualizaGate(gateID, newGate);
  }

  //===========================================================================================

  @Delete('erase/:gateID')
  async apagaGate(@Param('gateID') gateID: string ): Promise <Gate> {
      return await this.gateService.apagaGate(gateID);
  }
}

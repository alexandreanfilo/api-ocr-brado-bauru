import { Sessao } from '../../Mongo/Interfaces/sessao/sessao.interface';
import { SessaoService } from '../../services/sessao/sessao.service';
import { Controller, Get, Post, Patch, Delete, Body, Param, Req } from '@nestjs/common';
import { SessaoDTO } from '../../DTO/sessao/sessao.dto';


@Controller('brado_sessao')
export class SessaoController {

    constructor(
        private readonly sessaoService: SessaoService
    ) { }

    @Get('/allCont')
    async buscaSessao(): Promise<Sessao[]> {
        return await this.sessaoService.buscaSessao();
    }

    @Get('id/:sessaoID')
    async buscaSessaoPorId(@Param('sessaoID') sessaoID: string): Promise<Sessao> {
        return await this.sessaoService.buscaSessaoPorId(sessaoID);
    }
    
    @Get('search_day')
    async buscaSessaoData(@Req() req): Promise<Sessao[]> {

        const p = req.query;

        const dt = new Date(p.dia);

        const hora = new Date(dt.getTime());
        hora.setDate(dt.getDate() + 1);

        const iu = dt.getTime();

        console.log(iu);
        console.log(hora.getTime())

        const query = {};

        Object.assign(query, {
            dh_inicio: {
                '$gte': iu,
                '$lte': hora.getTime()
            }
        });

        return await this.sessaoService.buscaSessaoData(query);
    }

    @Get('search')
    async buscaSessaoPeriodo(@Req() req): Promise<Sessao[]> {

        const p = req.query;

        const begin = new Date(p.inicio);
        const finish = new Date(p.fim);

        const h_i = begin.getTime();

        finish.setDate(finish.getDate() + 1);
        const h_f = finish.getTime();

        console.log(p);

        const query = {};

        if (p.inicio) {
            Object.assign(query, {
                dh_inicio: {
                    '$gte': h_i,
                }
            });
        }

        if (p.fim) {
            Object.assign(query, {
                dh_fim: {
                    '$lte': h_f
                }
            });
        }

        if (p.placa) {
            Object.assign(query, {

                $or: [
                    {
                        "frontal.placa_util":
                        {
                            $in: p.placa
                        }
                    },
                    {
                        "traseira.placa_util":
                        {
                            $in: p.placa
                        }
                    },
                    {
                        "container.placa_util":
                        {
                            $in: p.placa
                        }
                    }
                ]

            });

        }

        if (p.gate) {

            const letras: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'W', 'Z',
                'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'w', 'z'];

            let tipo = "E_numero";
            for (let i = 0; i < letras.length; i++) {
                if (p.gate.charAt(0) === letras[i]) {
                    tipo = "E_letra";
                }
            }

            console.log(tipo);

            if (tipo === "E_numero") {
                const n = parseInt(p.gate, 10);

                Object.assign(query, {
                    "gate.gate_id": n
                });
            } else {
                Object.assign(query, {
                    "gate.descricao": p.gate
                });
            }
        }

        if (p.camera) {
            Object.assign(query, {

                $or: [
                    {
                        "frontal.camera_id":
                        {
                            $in: p.camera
                        }
                    },
                    {
                        "traseira.camera_id":
                        {
                            $in: p.camera
                        }
                    },
                    {
                        "container.camera_id":
                        {
                            $in: p.camera
                        }
                    }
                ]

            });

        }

        return await this.sessaoService.buscaSessaoPeriodo(query);
    }

    @Get('/allReg')
    async allRegister(): Promise<Sessao> {
        return await this.sessaoService.allRegister();
    }

    //===========================================================================================

    @Post('/insert')
    async salvaSessao(@Body() newSessao: SessaoDTO): Promise<Sessao> {
        return await this.sessaoService.salvaSessao(newSessao);
    }

    //===========================================================================================

    @Patch('update/:sessaoID')
    async atualizaSessao(@Param('sessaoID') sessaoID: string, @Body() newSessao: SessaoDTO): Promise<Sessao> {
        return await this.sessaoService.atualizaSessao(sessaoID, newSessao);
    }

    //===========================================================================================

    @Delete('erase/:sessaoID')
    async apagaSessao(@Param('sessaoID') sessaoID: string): Promise<Sessao> {
        return await this.sessaoService.apagaSessao(sessaoID);
    }



}
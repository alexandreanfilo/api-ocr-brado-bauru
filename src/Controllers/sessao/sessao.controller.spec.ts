import { Test, TestingModule } from '@nestjs/testing';
import { SessaoController } from './sessao.controller';

describe('Sessao Controller', () => {
  let controller: SessaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SessaoController],
    }).compile();

    controller = module.get<SessaoController>(SessaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

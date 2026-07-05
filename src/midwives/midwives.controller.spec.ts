import { Test, TestingModule } from '@nestjs/testing';
import { MidwivesController } from './midwives.controller';
import { MidwivesService } from './midwives.service';

describe('MidwivesController', () => {
  let controller: MidwivesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MidwivesController],
      providers: [MidwivesService],
    }).compile();

    controller = module.get<MidwivesController>(MidwivesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { MidwivesService } from './midwives.service';

describe('MidwivesService', () => {
  let service: MidwivesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MidwivesService],
    }).compile();

    service = module.get<MidwivesService>(MidwivesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

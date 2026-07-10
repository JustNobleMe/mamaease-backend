import { Test, TestingModule } from '@nestjs/testing';
import { HydrationService } from './hydration.service';

describe('HydrationService', () => {
  let service: HydrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HydrationService],
    }).compile();

    service = module.get<HydrationService>(HydrationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

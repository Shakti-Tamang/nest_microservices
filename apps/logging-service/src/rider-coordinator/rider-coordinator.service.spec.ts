import { Test, TestingModule } from '@nestjs/testing';
import { RiderCoordinatorService } from './rider-coordinator.service';

describe('RiderCoordinatorService', () => {
  let service: RiderCoordinatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RiderCoordinatorService],
    }).compile();

    service = module.get<RiderCoordinatorService>(RiderCoordinatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

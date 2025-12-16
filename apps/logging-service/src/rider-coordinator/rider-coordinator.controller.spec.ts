import { Test, TestingModule } from '@nestjs/testing';
import { RiderCoordinatorController } from './rider-coordinator.controller';

describe('RiderCoordinatorController', () => {
  let controller: RiderCoordinatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RiderCoordinatorController],
    }).compile();

    controller = module.get<RiderCoordinatorController>(RiderCoordinatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

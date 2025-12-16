import { Module } from '@nestjs/common';
import { RiderCoordinatorController } from './rider-coordinator.controller';
import { RiderCoordinatorService } from './rider-coordinator.service';

@Module({
  controllers: [RiderCoordinatorController],
  providers: [RiderCoordinatorService]
})
export class RiderCoordinatorModule {}

import { Module } from '@nestjs/common';
import { RiderCoordinatorController } from './rider-coordinator.controller';
import { RiderCoordinatorService } from './rider-coordinator.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinator, RiderCoordinatorSchema } from './schemas/rider-coordinator.schemas';

@Module({

    imports:[MongooseModule.forFeature([{name:RiderCoordinator.name,schema:RiderCoordinatorSchema}])],
  controllers: [RiderCoordinatorController],
  providers: [RiderCoordinatorService]
})
export class RiderCoordinatorModule {}

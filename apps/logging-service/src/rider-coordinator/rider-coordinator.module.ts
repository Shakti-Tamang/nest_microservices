import { Module } from '@nestjs/common';
import { RiderCoordinatorController } from './rider-coordinator.controller';
import { RiderCoordinatorService } from './rider-coordinator.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinator, RiderCoordinatorSchema } from './schemas/rider-coordinator.schemas';

import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports:[MongooseModule.forFeature([{name:RiderCoordinator.name,schema:RiderCoordinatorSchema}]),
  ClientsModule.register([{name:'RIDER_SERVICE',transport:Transport.TCP,
  options: {
          host: '127.0.0.1',
          port: 3002,
        },

  }])
  ],
  controllers: [RiderCoordinatorController],
  providers: [RiderCoordinatorService]
})
export class RiderCoordinatorModule {}

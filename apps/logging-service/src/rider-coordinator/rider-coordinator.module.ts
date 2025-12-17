/* The RiderCoordinatorModule class in a NestJS application imports necessary modules, controllers, and
services for managing rider coordinators and sets up a microservice client for communication with a
rider service. */
import { Module } from '@nestjs/common';
import { RiderCoordinatorController } from './rider-coordinator.controller';
import { RiderCoordinatorService } from './rider-coordinator.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  RiderCoordinator,
  RiderCoordinatorSchema,
} from './schemas/rider-coordinator.schemas';
import { ClientsModule, Transport } from '@nestjs/microservices';

export const ORDER_SERVICE_RABBITMQ = 'rabbitMQ_order_service';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RiderCoordinator.name, schema: RiderCoordinatorSchema },
    ]),

    // for syncronous http
    // ClientsModule.register([
    //   {
    //     name: 'RIDER_SERVICE',
    //     transport: Transport.TCP,
    //     options: {
    //       host: '127.0.0.1',
    //       port: 3002,
    //     },
    //   },
    // ]),

    ClientsModule.register([
      {
        name: ORDER_SERVICE_RABBITMQ,
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@localhost:5672'],
          queue: 'order_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [RiderCoordinatorController],
  providers: [RiderCoordinatorService],
})
export class RiderCoordinatorModule {}

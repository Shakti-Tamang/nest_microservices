import { Module } from '@nestjs/common';
import { LoggingServiceController } from './logging-service.controller';
import { LoggingServiceService } from './logging-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinatorModule } from './rider-coordinator/rider-coordinator.module';
@Module({
  imports: [  MongooseModule.forRoot(
  'mongodb://root:root@localhost:27017/logs_db?authSource=admin',
), RiderCoordinatorModule

  ],
  controllers: [LoggingServiceController],
  providers: [LoggingServiceService],
})
export class LoggingServiceModule {}

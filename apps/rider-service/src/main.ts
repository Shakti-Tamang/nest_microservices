import { NestFactory } from '@nestjs/core';
import { RiderServiceModule } from './rider-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

// for syncronous http
// async function bootstrap() {
//   const microservice =
//     await NestFactory.createMicroservice<MicroserviceOptions>(
//       RiderServiceModule,
//       {
//         transport: Transport.TCP,
//         options: {
//           host: '127.0.0.1',
//           port: 3002,
//         },
//       },
//     );
//   await microservice.listen();
// }
// bootstrap();

async function bootstrap() {
  const app = await NestFactory.create(RiderServiceModule);
  const RABBITMQ_URL = 'amqp://guest:guest@localhost:5672';
  app.enableCors();
  await app.listen(3002);

  const microservice = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [RABBITMQ_URL],
      queue: 'order_queue',
      queueOptions: { durable: true },
    },
  });

  await microservice.listen();

  Logger.log('Application  is listening on rabbitmq');
}
bootstrap();

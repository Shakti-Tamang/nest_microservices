import { NestFactory } from '@nestjs/core';
import { RiderServiceModule } from './rider-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const microservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(
      RiderServiceModule,
      {
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3002,
        },
      },
    );
  await microservice.listen();
}
bootstrap();

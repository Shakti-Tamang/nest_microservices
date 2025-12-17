import { NestFactory } from '@nestjs/core';
import { LoggingServiceModule } from './logging-service.module';

async function bootstrap() {
  const app = await NestFactory.create(LoggingServiceModule);
  await app.listen(process.env.port ?? 3001);
}
bootstrap();

// command to create nx monorepo
// npx create-turbo@latest my-monorepo

// PS C:\Users\Shakti\Desktop\BCA\microservciesnest\uberservice> npm install -g npm-check-updates


// nest generate app shakti-service


//  docker run --name mongod mongo:latest

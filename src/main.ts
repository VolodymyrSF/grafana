import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'node:process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Дозволяє запити з будь-якого джерела
  await app.listen(3333);
  console.log(`Server running`);
}
bootstrap();




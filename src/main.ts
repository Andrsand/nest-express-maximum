import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() { // обертка
  const app = await NestFactory.create(AppModule); // создание главного модуля
  await app.listen(3000);
}
bootstrap();

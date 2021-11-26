import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
process.env.RUNNING = 'true'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

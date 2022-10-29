import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configurationService = app.get(ConfigService);
  app.enableCors();
  await app.listen(configurationService.get('port'));
}
bootstrap().then(() => console.log('inicializou'));

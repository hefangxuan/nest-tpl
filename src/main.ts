import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// 创建logger日志类
const logger = new Logger('Hefx:: bootstrap');

async function bootstrap() {
  // 定义端口号

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService = app.get(ConfigService);

  const PORT = configService.get('app.APP_PORT');

  app.useStaticAssets(join(__dirname, '../public'), {
    prefix: '/static/',
  });

  await app.listen(PORT, '0.0.0.0');

  logger.log(`Hefx API Server started on: ${await app.getUrl()}`);
}
bootstrap().then();

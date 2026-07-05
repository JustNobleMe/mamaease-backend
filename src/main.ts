import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    credentials: true,
  })

  app.setGlobalPrefix('api');
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
    }),
  );
  

  const config = new DocumentBuilder()
    .setTitle('MamaEase API')
    .setDescription('Backend API for MamaEase Mobile Application')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  app.enableCors();

    SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 3000);

  console.log(
    `MamaEase API running at ${process.env.PORT || 3000}`,
  );

  console.log(
    `Swagger docs available at ${process.env.PORT || 3000}/docs`,
  );
}

bootstrap();

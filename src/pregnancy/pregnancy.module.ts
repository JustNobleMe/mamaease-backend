import { Module } from '@nestjs/common';
import { PregnancyService } from './pregnancy.service';
import { PregnancyController } from './pregnancy.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PregnancyController],
  providers: [PregnancyService, PrismaService],
})
export class PregnancyModule {}

import { Module } from '@nestjs/common';

import { MidwivesService } from './midwives.service';
import { MidwivesController } from './midwives.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [MidwivesController],
  providers: [MidwivesService, PrismaService],
})
export class MidwivesModule {}

import { Module } from '@nestjs/common';
import { MidwivesService } from './midwives.service';
import { MidwivesController } from './midwives.controller';

@Module({
  controllers: [MidwivesController],
  providers: [MidwivesService],
})
export class MidwivesModule {}

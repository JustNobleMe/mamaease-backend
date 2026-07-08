import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  UseGuards
} from '@nestjs/common';

import { MidwivesService } from './midwives.service';
import { CreateMidwifeDto } from './dto/create-midwife.dto';
import { UpdateMidwifeDto } from './dto/update-midwife.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('midwives')
export class MidwivesController {
  constructor(private readonly midwivesService: MidwivesService) {}

  @Post()
  create(@Body() dto: CreateMidwifeDto) {
    return this.midwivesService.create(dto);
  }

  @Get()
  findAll() {
    return this.midwivesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.midwivesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateMidwifeDto) {
    return this.midwivesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.midwivesService.remove(id);
  }
}

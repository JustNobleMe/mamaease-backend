import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MidwivesService } from './midwives.service';
import { CreateMidwifeDto } from './dto/create-midwife.dto';
import { UpdateMidwifeDto } from './dto/update-midwife.dto';

@Controller('midwives')
export class MidwivesController {
  constructor(private readonly midwivesService: MidwivesService) {}

  @Post()
  create(@Body() createMidwifeDto: CreateMidwifeDto) {
    return this.midwivesService.create(createMidwifeDto);
  }

  @Get()
  findAll() {
    return this.midwivesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.midwivesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMidwifeDto: UpdateMidwifeDto) {
    return this.midwivesService.update(+id, updateMidwifeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.midwivesService.remove(+id);
  }
}

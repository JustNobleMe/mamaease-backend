import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete 
} from '@nestjs/common';

import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard) 
@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post()
  create(@Body() dto: CreateDoctorDto) {
    return this.doctorsService.create(dto);
  }

  @Get()
  findAll() {
    return this.doctorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctorsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') 
    id: string, 
    @Body() dto: UpdateDoctorDto) {
    return this.doctorsService.update(id, dto);
  }

  @Delete(':id')
  remove(
    @Param('id') 
    id: string) {
    return this.doctorsService.remove(id);
  }
}

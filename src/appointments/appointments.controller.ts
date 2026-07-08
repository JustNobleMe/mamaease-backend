import { 
  Controller,
  Get, 
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards
} from '@nestjs/common';

import { JwtAuthGuard } from '../guards/jwt-auth.guard';

import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentStatusDto } from './dto/update-status.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('appointments')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post()
  create(
    @Request() req,
    @Body() dto: CreateAppointmentDto) {
    return this.appointmentsService.create(
      req.user.id,
      dto,
    );
  }

  @Get()
  findAll(
    @Request() req
  ) {
    return this.appointmentsService.findAll(
      req.user.id,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentsService.findOne(id);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body() statusDto: UpdateAppointmentStatusDto) {
    return this.appointmentsService.update(id, statusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentsService.remove(id);
  }
}

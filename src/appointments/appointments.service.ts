import { 
  Injectable,
  BadRequestException,
  NotFoundException,
 } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentStatusDto } from './dto/update-status.dto';

@Injectable()
export class AppointmentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, dto: CreateAppointmentDto) {
    if (!dto.doctorId && !dto.midwifeId) {
      throw new BadRequestException(
        "Doctor or Midwife must be selected",
      );
    }

    return this.prisma.appointment.create({
      data: {
        userId,
        doctorId: dto.doctorId,
        midwifeId: dto.midwifeId,
        date: new Date(dto.date),
        type: dto.type,
        notes: dto.notes,
      },
      include: {
        doctor: true,
        midwife: true,
      },
    });
  }

  findAll(userId: string) {
    return this.prisma.appointment.findMany({
      where: {
        userId,
      },
      include: {
        doctor: true,
        midwife: true,
      },
      orderBy: {
        date: 'asc',
      }
    });
  }

  async findOne(id: string) {
    const appointment = await this.prisma.appointment.findUnique({
      where: {
        id,
      },
      include: {
        doctor: true,
        midwife: true,
        user: true,
      },
    });

    if (!appointment) {
      throw new NotFoundException('Appointment not found');
    }
    return appointment;
  }

  update(
    id: string, 
    dto: UpdateAppointmentStatusDto
  ) {
    return this.prisma.appointment.update({
      where: {
        id,
      },
      data: {
        status: dto.status,
      },
    });
  }

  remove(id: string) {
    this.prisma.appointment.delete({
      where: { id },
    });
    return { message: 'Appointment deleted successfully' };
  }
}

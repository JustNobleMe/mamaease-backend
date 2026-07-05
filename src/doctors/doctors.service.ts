import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Injectable()
export class DoctorsService {
  constructor(private readonly prisma: PrismaService) {}
  create(dto: CreateDoctorDto) {
    return this.prisma.doctor.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.doctor.findMany({
      orderBy: {
        rating: 'desc',
      }
    });
  }

  findOne(id: string) {
    return this.prisma.doctor.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, dto: UpdateDoctorDto) {
    return this.prisma.doctor.update({
      where: {
        id,
      },
      data: dto,
    });
  }

  remove(id: string) {
    this.prisma.doctor.delete({
      where: {
        id,
      },
    });
    return { message: `Doctor with id ${id} has been deleted` };
  }
}

import {
  Injectable,
  ConflictException,
  NotFoundException
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { CreatePregnancyDto } from './dto/create-pregnancy.dto';
import { UpdatePregnancyDto } from './dto/update-pregnancy.dto';

@Injectable()
export class PregnancyService {
  constructor(private prisma: PrismaService ) {}

  async create(userId: string, dto: CreatePregnancyDto) {
    const exists = await this.prisma.pregnancyRecord.findUnique({
      where: {
        userId,
      },
    });

    if (exists) {
      throw new ConflictException(
        'Pregnancy record already exists',
      );
    }

    return this.prisma.pregnancyRecord.create({
      data: {
        userId,
        currentWeek: dto.currentWeek,
        dueDate: new Date(dto.dueDate),
        bloodGroup: dto.bloodGroup,
        emergencyContact: dto.emergencyContact,
        doctorName: dto.doctorName,
        hospital: dto.hospital,
      },
    });
  }

  async get(userId: string){
    const pregnancy = await this.prisma.pregnancyRecord.findUnique({
      where: {
        userId,
      },
    });

    if (!pregnancy) {
      throw new NotFoundException(
        'Pregnancy record not found',
      );
    }

    return pregnancy;
  }

  async update(userId: string, dto: UpdatePregnancyDto) {
    return this.prisma.pregnancyRecord.update({
      where: {
        userId,
      },
      data: {
        ...dto,
        dueDate: dto.dueDate ? new Date(dto.dueDate) : undefined,
      },
    });
  }
}

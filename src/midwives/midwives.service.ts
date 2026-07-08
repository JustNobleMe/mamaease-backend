import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { CreateMidwifeDto } from './dto/create-midwife.dto';
import { UpdateMidwifeDto } from './dto/update-midwife.dto';

@Injectable()
export class MidwivesService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateMidwifeDto) {
    return this.prisma.midWife.create({ 
      data: dto 
    });
  }

  findAll() {
    return this.prisma.midWife.findMany({
      orderBy: {
        rating: 'desc',
      },
    });
  }

  findOne(id: string) {
    return this.prisma.midWife.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, dto: UpdateMidwifeDto) {
    return this.prisma.midWife.update({
      where: {
        id,
      },
      data: dto,
    });
  }

  remove(id: string) {
   this.prisma.midWife.delete({
      where: {
        id,
      },
    })
    return { message: `Midwife with ID ${id} has been deleted.` };
  }
}

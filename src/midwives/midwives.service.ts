import { Injectable } from '@nestjs/common';
import { CreateMidwifeDto } from './dto/create-midwife.dto';
import { UpdateMidwifeDto } from './dto/update-midwife.dto';

@Injectable()
export class MidwivesService {
  create(createMidwifeDto: CreateMidwifeDto) {
    return 'This action adds a new midwife';
  }

  findAll() {
    return `This action returns all midwives`;
  }

  findOne(id: number) {
    return `This action returns a #${id} midwife`;
  }

  update(id: number, updateMidwifeDto: UpdateMidwifeDto) {
    return `This action updates a #${id} midwife`;
  }

  remove(id: number) {
    return `This action removes a #${id} midwife`;
  }
}

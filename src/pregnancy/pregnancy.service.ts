import { Injectable } from '@nestjs/common';
import { CreatePregnancyDto } from './dto/create-pregnancy.dto';
import { UpdatePregnancyDto } from './dto/update-pregnancy.dto';

@Injectable()
export class PregnancyService {
  create(createPregnancyDto: CreatePregnancyDto) {
    return 'This action adds a new pregnancy';
  }

  findAll() {
    return `This action returns all pregnancy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pregnancy`;
  }

  update(id: number, updatePregnancyDto: UpdatePregnancyDto) {
    return `This action updates a #${id} pregnancy`;
  }

  remove(id: number) {
    return `This action removes a #${id} pregnancy`;
  }
}

import { PartialType } from '@nestjs/swagger';
import { CreateMidwifeDto } from './create-midwife.dto';

export class UpdateMidwifeDto extends PartialType(CreateMidwifeDto) {}

import { 
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Request,
  UseGuards
} from '@nestjs/common';

import { JwtAuthGuard } from '../guards/jwt-auth.guard';

import { PregnancyService } from './pregnancy.service';

import { CreatePregnancyDto } from './dto/create-pregnancy.dto';
import { UpdatePregnancyDto } from './dto/update-pregnancy.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('pregnancy')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class PregnancyController {
  constructor(private readonly pregnancyService: PregnancyService) {}

  @Post()
  create(
    @Request() req,
    @Body() dto: CreatePregnancyDto) {
    return this.pregnancyService.create(
      req.user.id,
      dto,
    );
  }

  @Get()
  get(@Request() req) {
    return this.pregnancyService.get(
      req.user.id,
    );
  }

  @Patch()
  update(
    @Request() req,
    @Body() dto: UpdatePregnancyDto,
  ) {
    return this.pregnancyService.update(
      req.user.id,
      dto,
    );
  }
}

import {
    IsEnum,
    IsOptional,
    IsString,
    IsDateString,
} from 'class-validator';

import { AppointmentType } from '@prisma/client';

export class CreateAppointmentDto {
    @IsOptional()
    @IsString()
    doctorId?: string;

    @IsOptional()
    @IsString()
    midwifeId?: string;

    @IsDateString()
    date: string;

    @IsEnum(AppointmentType)
    type: AppointmentType;

    @IsOptional()
    @IsString()
    notes?: string;
}

import {
    IsDateString,
    IsInt,
    IsOptional,
    IsString
} from 'class-validator';

export class CreatePregnancyDto {
    @IsInt()
    currentWeek: number;

    @IsDateString()
    dueDate: string;

    @IsOptional()
    @IsString()
    bloodGroup?: string;

    @IsOptional()
    @IsString()
    emergencyContact?: string;

    @IsOptional()
    @IsString()
    doctorName?: string;

    @IsOptional()
    @IsString()
    hospital?: string;
}

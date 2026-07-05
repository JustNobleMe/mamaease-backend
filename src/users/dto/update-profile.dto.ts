import {
    IsOptional,
    IsString,
    IsDateString,
} from 'class-validator';

export class UpdateProfileDto {
    @IsOptional()
    @IsString()
    fullName?: string;

    @IsOptional()
    @IsString()
    phone?: string;

    @IsOptional()
    @IsString()
    address?: string;

    @IsOptional()
    @IsDateString()
    dateOfBirth?: string;

    @IsOptional()
    @IsString()
    bloodGroup?: string;

    @IsOptional()
    @IsString()
    profileImage?: string;
}
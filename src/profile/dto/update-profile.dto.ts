import { IsOptional, IsString, IsInt } from 'class-validator';

export class UpdateProfileDto {
    @IsOptional()
    @IsString()
    firstName?: string;

    @IsOptional()
    @IsString()
    phone?: string;

    @IsOptional()
    @IsString()
    location?: string;

    @IsOptional()
    @IsInt()
    bloodGroup?: string;

    @IsOptional()
    @IsString()
    profileImage?: string;
}
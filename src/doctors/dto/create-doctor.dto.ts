import {
    IsNotEmpty,
    IsNumber,
    IsString
} from 'class-validator';

export class CreateDoctorDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    speciality: string;

    @IsString()
    qualification: string;

    @IsString()
    hospital: string;

    @IsString()
    experience: string;

    @IsNumber()
    fee: number;

    @IsString()
    image: string;

    @IsNumber()
    rating: number;

    @IsString()
    about: string;
}
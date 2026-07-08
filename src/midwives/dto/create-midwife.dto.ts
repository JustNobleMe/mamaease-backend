import {
    IsString,
    IsNotEmpty,
    IsNumber,
    isNumber,
} from 'class-validator';

export class CreateMidwifeDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    qualification!: string;

    @IsString()
    experience!: string;

    @IsString()
    image!: string;

    @IsNumber()
    fee!: number

    @IsNumber()
    rating!: number

    @IsString()
    about!: string;

    @IsString()
    availability!: string;
}

import { IsInt, Min } from 'class-validator';

export class CreateHydrationDto {
    @IsInt()
    @Min(1)
    amount: number;
}
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
    constructor(private readonly prisma: PrismaService) {}

    getProfile(userId: string) {
        return this.prisma.user.findUnique({
            where: {
                id: userId,
            }
        });
    }

    updateProfile(
        userId: string,
        dto: UpdateProfileDto
    ){
        return this.prisma.user.update({
            where: {
                id: userId,
            },
            data: dto
        })
    }
}

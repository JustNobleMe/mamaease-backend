import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async getProfile(userId: string) {
        return this.prisma.user.findUnique({
            where: {
                id: userId
            },
            select: {
                id: true,
                fullName: true,
                email: true,
                phone: true,
                address: true,
                bloodGroup: true,
                profileImage: true,
                dateOfBirth: true,
                createdAt: true,
            },
        });
    }

    async updateProfile(
        userId: string,
        dto: UpdateProfileDto
    ) {
        return this.prisma.user.update({
            where: {
                id: userId
            },
            data: {
                ...dto,
                dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth): undefined
            },
        });
    }
}

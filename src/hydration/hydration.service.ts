import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateHydrationDto } from './dto/create-hydration.dto';

@Injectable()
export class HydrationService {
    constructor(private prisma: PrismaService) {}

    create(userId: string, dto: CreateHydrationDto ) {
        return this.prisma.hydrationRecord.create({
            data: {
                userId,
                amount: dto.amount
            },
        });
    }

    findAll(userId: string) {
        return this.prisma.hydrationRecord.findMany({
            where: { userId },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }

    remove(id: string) {
        return this.prisma.hydrationRecord.delete({
            where: { id },
        })
    }
}

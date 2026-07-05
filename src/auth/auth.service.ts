import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';

import * as bcrypt from 'bcrypt';

import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ) { }

    async register(dto: RegisterDto) {
        const existingUser = await this.prisma.user.findFirst({
            where: {
                OR: [
                    {
                        email: dto.email,
                    },
                    {
                        phone: dto.phone,
                    },
                ],
            },
        });

        if (existingUser) {
            throw new BadRequestException(
                'Email or Phone Number already exists',
            );
        }

        const hashedPassword = await bcrypt.hash(dto.password, 10);

        const user = await this.prisma.user.create({
            data: {
                fullName: dto.fullName,
                email: dto.email,
                phone: dto.phone,
                password: hashedPassword,
            },
        });

        const token = await this.generateToken(user.id, user.email);

        return {
            message: 'Registration successful',
            access_token: token,

            user: {
                id: user.id,
                fullName: user.fullName,
                email: user.email,
                phone: user.phone,
            }
        };
    }

    async login(dto: LoginDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            }
        });

        if (!user) {
            throw new UnauthorizedException('Invalid email or password');
        }

        const passwordMatch = await bcrypt.compare(dto.password, user.password);

        if (!passwordMatch) {
            throw new UnauthorizedException('Invalid email or password');
        }

        const token = await this.generateToken(user.id, user.email);

        return {
            message: 'Login successful',
            access_token: token,
            
            user: {
                id: user.id,
                fullName: user.fullName,
                email: user.email,
                phone: user.phone,
            }
        };
    }

    async validateUser(userId: string) {
        return this.prisma.user.findUnique({
            where: {
                id: userId,
            },

            select: {
                id: true,
                fullName: true,
                email: true,
                phone: true,
                profileImage: true,
                createdAt: true,
            }
        });
    }

    async generateToken(
        userId: string,
        email: string
    ) {
        const payload = {
            sub: userId,
            email,
        }

        return this.jwtService.signAsync(payload);
    }
}

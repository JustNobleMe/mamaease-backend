import {
    Body,
    Controller,
    Get,
    Post,
    Req,
    UseGuards,
} from '@nestjs/common';

import { AuthService } from './auth.service';

import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}

    @Post('register')
    register(
        @Body() dto: RegisterDto
    ) {
        return this.authService.register(dto);
    }

    @Post('login')
    login(
        @Body() dto: LoginDto
    ){
        return this.authService.login(dto);
    }

    @Get('me')
    me(@Req() req) {
        return this.authService.validateUser(req.user.id);
    }
}
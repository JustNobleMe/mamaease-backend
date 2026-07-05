import { 
    Body,
    Controller,
    Get,
    Patch,
    Req,
    UseGuards
 } from '@nestjs/common';
 import { JwtAuthGuard } from '../guards/jwt-auth.guard';
 import { UsersService } from './users.service';
 import { UpdateProfileDto } from './dto/update-profile.dto';
 import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('profile')
    getProfile(@Req() req) {
        return this.usersService.getProfile(req.user.id);
    }

    @Patch('profile')
    updateProfile(
        @Req() req,
        @Body() dto: UpdateProfileDto
    ) {
        return this.usersService.updateProfile(
            req.user.id,
            dto
        )
    }
}

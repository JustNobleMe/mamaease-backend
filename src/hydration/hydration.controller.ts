import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Req,
    UseGuards
} from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { HydrationService } from './hydration.service';
import { CreateHydrationDto } from './dto/create-hydration.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('hydration')
export class HydrationController {
    constructor(private hydrationService: HydrationService) {}

    @Post()
    create(
        @Req() req,
        @Body() dto: CreateHydrationDto
) {
    return this.hydrationService.create(
        req.user.id,
        dto
    );
}

@Get()
findAll(
    @Req() req
) {
    return this.hydrationService.findAll(
        req.user.userId
    )
}

@Delete(':id')
remove(@Param('id') id: string) {
    return this.hydrationService.remove(id);
}
}

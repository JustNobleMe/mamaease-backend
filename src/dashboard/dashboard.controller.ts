import {
    Controller,
    Get,
    Request,
    UseGuards,
} from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('dashboard')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class DashboardController {
    constructor(
        private readonly dashboardService: DashboardService,
    ) {}

    @Get()
    async getDashboard(@Request() req) {
        return this.dashboardService.getDashboard(
            req.user.userId,
        );
    }
}

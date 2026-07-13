import {
    Controller,
    Get,
    Request,
    UseGuards,
} from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('dashboard')
@UseGuards(JwtAuthGuard)
export class DashboardController {
    constructor(
        private readonly dashboardService: DashboardService,
    ) {}

    @Get()
    async getDashboard(@Request() req) {
        console.log(req.user);
        return this.dashboardService.getDashboard(
            req.user.id,
        );
    }
}

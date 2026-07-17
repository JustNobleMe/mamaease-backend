import { 
    Injectable,
    NotFoundException
 } from '@nestjs/common';
 import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DashboardService {
    constructor(
        private readonly prisma: PrismaService,
    ) {}

    async getDashboard(userId: string) {
        //User
        const user = await this.prisma.user.findUnique({
            where: { id: userId, },
            select: {
                fullName: true,
                profileImage: true,
            },
        });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        // Pregnancy Record
        const pregnancy = await this.prisma.pregnancyRecord.findUnique({
            where: {
                userId,
            },
        });
        let pregnancyData: {
            currentWeek: number;
            progress: number;
            dueDate: string;
        } | null = null;

        if (pregnancy) {
            const progress = Math.round((pregnancy.currentWeek / 40) * 100);

            pregnancyData = {
                currentWeek: pregnancy.currentWeek,
                progress,
                dueDate: pregnancy.dueDate.toISOString().split('T')[0],
            };
        }

        //upcoming appointment
        const appointment = await this.prisma.appointment.findFirst({
            where: {
                userId,
                status: {
                    in: ['PENDING', 'CONFIRMED'],
                },
                date: {
                    gte: new Date(),
                },
            },
            include: {
                doctor: true,
                midwife: true,
            },
            orderBy: {
                date: 'asc',
            },
        });

        let appointmentData: {
            name: string | undefined;
            type: string;
            date: string;
            time: string;
        } | null = null;

        if (appointment) {
            const isDoctor = appointment.type === 'DOCTOR';

            appointmentData = {
                name: isDoctor ? appointment.doctor?.name : appointment.midwife?.name,

                type: isDoctor ? 'Doctor' : 'Midwife',

                date: this.formatDate(appointment.date),

                time: this.formatTime(appointment.date,),
            };
        }

        return {
            user,
            pregnancy: pregnancyData,
            appointment: appointmentData,
        };
    }

    private formatDate(date: Date): string {
        const today = new Date();

        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);

        if (date.toDateString() === today.toDateString()) {
            return 'Today';
        }

        if (date.toDateString() === tomorrow.toDateString()) {
            return 'Tomorrow';
        }

        return date.toLocaleDateString('en-Us', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    }

    private formatTime(date: Date): string {
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        });
    }
}

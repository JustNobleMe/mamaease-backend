import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DoctorsModule } from './doctors/doctors.module';
import { MidwivesModule } from './midwives/midwives.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { PregnancyModule } from './pregnancy/pregnancy.module';
import { MarketplaceModule } from './marketplace/marketplace.module';
import { OrdersModule } from './orders/orders.module';
import { ExercisesModule } from './exercises/exercises.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ProfileModule } from './profile/profile.module';
import { HydrationModule } from './hydration/hydration.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule, UsersModule, DoctorsModule, MidwivesModule, AppointmentsModule, PregnancyModule, MarketplaceModule, OrdersModule, ExercisesModule, NotificationsModule, ProfileModule, HydrationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

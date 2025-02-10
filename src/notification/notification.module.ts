// src/notification/notification.module.ts
import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule], // Importation du module Prisma
  controllers: [NotificationController],
  providers: [NotificationService],
  exports: [NotificationService], // Exportation de NotificationService
})
export class NotificationModule {}

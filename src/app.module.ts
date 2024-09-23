// src/app.module.ts
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { DatabaseModule } from './database/database.module';
import { DirisLogsController } from './diris-logs/diris-logs.controller';
import { DirisLogsService } from './diris-logs/diris-logs.service';
import { DirisLogsScheduler } from './diris-logs/diris-logs-scheduler';

@Module({
  imports: [DatabaseModule,ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'src', 'front'), // Вказуємо шлях до директорії з вашими статичними файлами
  }),],
  controllers: [DirisLogsController],
  providers: [DirisLogsService, DirisLogsScheduler],
})
export class AppModule {}

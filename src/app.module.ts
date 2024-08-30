// src/app.module.ts
import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { DirisLogsController } from './diris-logs/diris-logs.controller';
import { DirisLogsService } from './diris-logs/diris-logs.service';
import { DirisLogsScheduler } from './diris-logs/diris-logs-scheduler';

@Module({
  imports: [DatabaseModule],
  controllers: [DirisLogsController],
  providers: [DirisLogsService, DirisLogsScheduler],
})
export class AppModule {}

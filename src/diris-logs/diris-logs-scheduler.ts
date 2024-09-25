import { Injectable, OnModuleInit } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { DirisLogsService } from './diris-logs.service';

@Injectable()
export class DirisLogsScheduler implements OnModuleInit {
  constructor(private readonly dirisLogsService: DirisLogsService) {}

  async onModuleInit() {
    await this.dirisLogsService.updateDirisLogs();
  }

  @Interval(10000)  // кожні 10 секунд
  async updateLogs() {
    await this.dirisLogsService.updateDirisLogs();
  }
}

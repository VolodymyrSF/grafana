// src/schedulers/diris-logs-scheduler.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { DirisLogsService } from './diris-logs.service';

@Injectable()
export class DirisLogsScheduler implements OnModuleInit {
  constructor(private readonly dirisLogsService: DirisLogsService) {}

  async onModuleInit() {
    await this.fetchData();
  }

  @Interval(10000) // кожні 10 секунд
  async fetchData() {
    const data = await this.dirisLogsService.getDirisLogs();
    console.log(data); // Вивід даних в консоль або інший спосіб обробки
  }
}

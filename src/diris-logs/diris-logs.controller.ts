import { Controller, Get } from '@nestjs/common';
import { DirisLogsService } from './diris-logs.service';

@Controller('diris-logs') // Це встановлює базовий шлях для цього контролера
export class DirisLogsController {
  constructor(private readonly dirisLogsService: DirisLogsService) {}

  @Get() // Цей метод відповідає на запити GET до /diris-logs
  async getDirisLogs() {
    return await this.dirisLogsService.getDirisLogs();
  }
}

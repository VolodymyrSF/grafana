import { Controller, Get } from '@nestjs/common';
import { DirisLogsService } from './diris-logs.service';

@Controller('diris-logs')
export class DirisLogsController {
  constructor(private readonly dirisLogsService: DirisLogsService) {}

  @Get() // Ендпоінт для повернення кешованих даних
  getDirisLogs() {
    return this.dirisLogsService.getCachedDirisLogs();
  }
}

import { Controller, Get } from '@nestjs/common';
import { DirisLogsService } from './diris-logs.service';

@Controller('diris-logs')
export class DirisLogsController {
  constructor(private readonly dirisLogsService: DirisLogsService) {}

  @Get()
  async getDirisLogs() {
    await this.dirisLogsService.updateDirisLogs(); // Оновлюємо дані перед отриманням
    return this.dirisLogsService.getCachedDirisLogs();
  }

}

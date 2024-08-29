import { Controller, Get } from '@nestjs/common';
import { DataFetcherService } from './data-fetcher.service';

@Controller('data')
export class DataFetcherController {
  constructor(private readonly dataFetcherService: DataFetcherService) {}

  @Get()
  async getData() {
    const data = await this.dataFetcherService.fetchData();
    return data;
  }
  @Get('initial-data')
  async getInitialData() {
    return this.dataFetcherService.fetchData();
  }
}

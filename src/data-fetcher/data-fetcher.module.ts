import { Module } from '@nestjs/common';
import { DataFetcherService } from './data-fetcher.service';
import { DataFetcherController } from './data-fetcher.controller';
import { DataFetcherGateway } from './data-fetcher.gateway';


@Module({
  providers: [DataFetcherService, DataFetcherGateway],
  controllers: [DataFetcherController],
  exports: [DataFetcherService],
})

export class DataFetcherModule{}
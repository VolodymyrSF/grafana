
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {DataFetcherModule} from './data-fetcher/data-fetcher.module'
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'srv-docker-1.oez.oliyar.com.ua',
      port: 5432,
      username: 'energo',
      password: 'jkhsdfjghsadf9kjhKJHJK',
      database: 'energo',
      autoLoadEntities: true,
      synchronize: true,
    }),
    DataFetcherModule
  ],
})
export class AppModule {}
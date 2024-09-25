import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { IdirisType } from '../types/IdirisType';

@Injectable()
export class DirisLogsService {
  private cachedData: IdirisType[] = [];

  constructor(private dataSource: DataSource) {}

  async updateDirisLogs(): Promise<void> {
    const query = `
      SELECT
        diris_time AS "time",
        diris_id,
        f,
        i1,
        i2,
        i3,
        pa,
        pa_p,
        pa_r,
        pa_s,
        u12,
        u23,
        u31
      FROM diris_logs
      WHERE
        diris_id IN (90, 91)
        AND diris_time >= NOW() - INTERVAL '10 seconds'
      ORDER BY diris_time;
    `;


    this.cachedData = await this.dataSource.query(query);
  }

  getCachedDirisLogs(): IdirisType[] {
    return this.cachedData;
  }
}

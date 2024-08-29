import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DataFetcherService {
  constructor(private dataSource: DataSource) {}

  async fetchData(): Promise<any> {
    return await this.dataSource.query(`
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
      ORDER BY diris_time
    `);
  console.log(this.dataSource)}
}

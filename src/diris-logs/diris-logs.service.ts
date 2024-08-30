import { Injectable } from '@nestjs/common'; // Імпорт Injectable з @nestjs/common
import { DataSource } from 'typeorm'; // Імпорт DataSource з typeorm

@Injectable()
export class DirisLogsService {
  constructor(private dataSource: DataSource) {}

  async getDirisLogs(): Promise<any> {
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
        AND diris_time >= NOW() - INTERVAL '10 seconds' -- вибирає записи за останні 10 секунд
      ORDER BY diris_time;
    `;

    // Виконуємо SQL-запит та повертаємо результат
    return await this.dataSource.query(query);
  }
}


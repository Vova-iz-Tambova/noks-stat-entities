import { BaseApi } from "../../api 2/modules/BaseApi";
import { z } from 'zod';
import { SReport } from '../../entities/report/scheme';
import { Report } from '../../entities/report/types';

export class ApiReport extends BaseApi {
  private static instance: ApiReport;
  private localBaseUrl = `api/stat`;
  private constructor() {
    super();
  }

  public static getInstance() {
    ApiReport.instance = new ApiReport();
    return ApiReport.instance;
  }

  public async GET(stat_id: number) {
    const result: Array<Report> = await this.get(
      {
        url: `${this.localBaseUrl}/${stat_id}/report`,
      },
      z.array(SReport)
    );
    return result;
  }

  public async GET_BY_ID(stat_id: number, report_id: number) {
    const result: Report = await this.get(
      {
        url: `${this.localBaseUrl}/${stat_id}/report/${report_id}`,
      },
      SReport
    );
    return result;
  }

  public async DEL(stat_id: number, report_id: number) {
    const result: Report = await this.delete(
      {
        url: `${this.localBaseUrl}/${stat_id}/report/${report_id}`,
      },
      z.number()
    );
    return result;
  }
}
import { BaseApi } from "../../api 2/modules/BaseApi";
import { z } from 'zod';
import { SReport } from '../../entities/report/scheme';
import { postReport, putReport, Report } from '../../entities/report/types';

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

  public async POST(stat_id: number, data: postReport): Promise<number> {
    const result: number = await this.post(
      {
        url: `${this.localBaseUrl}/${stat_id}/report`,
        data: data,
      },
      z.number()
    );
    return result;
  }

  public async DELETE(stat_id: number, report_id: number): Promise<boolean> {
    const result: boolean = await this.delete(
      {
        url: `${this.localBaseUrl}/${stat_id}/report/${report_id}`,
      },
      z.boolean()
    );
    return result;
  }

  public async PUT(stat_id: number, report_id: number, data: putReport): Promise<boolean> {
    const result: boolean = await this.put(
      {
        url: `${this.localBaseUrl}/${stat_id}/report/${report_id}`,
        data: data,
      },
      z.boolean()
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

  public async GET_ALL(stat_id: number) {
    const result: Array<Report> = await this.get(
      {
        url: `${this.localBaseUrl}/${stat_id}/report`,
      },
      z.array(SReport)
    );
    return result;
  }
}
import { BaseApi } from "../../api 2/modules/BaseApi";
import { z } from 'zod';
import { SInfoReport } from '../../entities/info-report/scheme'
import { InfoReport } from '../../entities/info-report/types';

export class ApiInfoReport extends BaseApi {

  private static instance: ApiInfoReport;
  private readonly BASE_URL = "http://beta-noks.local";
  private readonly API_BASE_URL = "/api/stat/info/type";

  private constructor() {
    super();
  }

  public static getInstance(): ApiInfoReport {
    if (!ApiInfoReport.instance) {
      ApiInfoReport.instance = new ApiInfoReport();
    }
    return ApiInfoReport.instance;
  }

  public async GET() {
    const result: Array<InfoReport> = await this.get(
        {
            url: this.BASE_URL + this.API_BASE_URL,
        },
        z.array(SInfoReport)
    );
    return result;
}

  public async GET_BYTYPE(type: number) {
    const result: InfoReport = await this.get(
      {
        url: `${this.BASE_URL}${this.API_BASE_URL}/${type}`,
      },
      SInfoReport
    );
    return result;
  }
}
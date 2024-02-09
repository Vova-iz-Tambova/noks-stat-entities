import { BaseApi } from "../../api 2/modules/BaseApi";
import { z } from 'zod';
import { SReportInfo } from '../../entities/report-info/scheme'
import { ReportInfo } from '../../entities/report-info/types';

export class ApiReportInfo extends BaseApi {

  private static instance: ApiReportInfo;
  private readonly BASE_URL = "http://beta-noks.local";
  private readonly API_BASE_URL = "/api/stat/info/type";

  private constructor() {
    super();
  }

  public static getInstance(): ApiReportInfo {
    if (!ApiReportInfo.instance) {
      ApiReportInfo.instance = new ApiReportInfo();
    }
    return ApiReportInfo.instance;
  }

  public async GET() {
    const result: Array<ReportInfo> = await this.get(
        {
            url: this.BASE_URL + this.API_BASE_URL,
        },
        z.array(SReportInfo)
    );
    return result;
}

  public async GET_BYTYPE(type: number) {
    const result: ReportInfo = await this.get(
      {
        url: `${this.BASE_URL}${this.API_BASE_URL}/${type}`,
      },
      SReportInfo
    );
    return result;
  }
}
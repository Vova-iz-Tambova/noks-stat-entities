import { BaseApi } from "../../api 2/modules/BaseApi";
import { z } from 'zod';
import { SReportInfo, REPORT_TYPE } from '../../entities/report-info/scheme';
import { ReportInfo } from '../../entities/report-info/types';

export class ApiReportInfo extends BaseApi {
  private static instance: ApiReportInfo;
  private localBaseUrl = "api/stat/info/type";
  private constructor() {
    super();
  }

  public static getInstance() {
    ApiReportInfo.instance = new ApiReportInfo();
    return ApiReportInfo.instance;
  }

  public async GET_ALL() {
    const result: Array<ReportInfo> = await this.get(
      {
        url: `${this.localBaseUrl}`,
      },
      z.array(SReportInfo)
    );
    return result;
  }

  public async GET_BY_TYPE(type: REPORT_TYPE) {
    const result: ReportInfo = await this.get(
      {
        url: `${this.localBaseUrl}/${type}`,
      },
      SReportInfo
    );
    return result;
  }
}
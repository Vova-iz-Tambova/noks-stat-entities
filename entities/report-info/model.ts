import { ReportInfo } from './types';
import { ApiReportInfo } from '../../api/modules/ReportInfo';

export class InfoReportModel {

  static async getInfoReportAll(): Promise<Array<ReportInfo>> {
    return ApiReportInfo.getInstance().GET();
}

  static async getInfoReportByType(type: number): Promise<ReportInfo> {
    return ApiReportInfo.getInstance().GET_BYTYPE(type);
  }
}
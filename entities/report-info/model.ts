import { ReportInfo } from './types';
import { ApiReportInfo } from '../../api/modules/ReportInfo';
import { REPORT_TYPE } from './scheme';

export class ReportInfoModel {

  static async getAllReportInfo(): Promise<Array<ReportInfo>> {
    return ApiReportInfo.getInstance().GET_ALL();
  }

  static async getReportInfoByType(type: REPORT_TYPE): Promise<ReportInfo> {
    return ApiReportInfo.getInstance().GET_BY_TYPE(type);
  }
}
import { ReportInfo } from './types';
import { ApiReportInfo } from '../../api/modules/ReportInfo';
import { REPORT_TYPE } from './scheme';

export class ReportInfoModel {

  static async getAll(): Promise<Array<ReportInfo>> {
    return ApiReportInfo.getInstance().GET();
  }

  static async get(type: REPORT_TYPE): Promise<ReportInfo> {
    return ApiReportInfo.getInstance().GET_BY_TYPE(type);
  }
}
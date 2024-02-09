import { ReportInfo } from './types';
import { ApiReportInfo } from '../../api/modules/ReportInfo';

export class ReportInfoModel {

  static async getAll(): Promise<Array<ReportInfo>> {
    return ApiReportInfo.getInstance().GET();
}

  static async getByType(type: number): Promise<ReportInfo> {
    return ApiReportInfo.getInstance().GET_BY_TYPE(type);
  }
}
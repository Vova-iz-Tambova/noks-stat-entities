import { Report } from './types';
import { ApiReport } from '../../api/modules/Report';

export class ReportModel {

  static async getReportAll(stat_id: number): Promise<Array<Report>> {
    return ApiReport.getInstance().GET(stat_id);
}

  static async getReportById(report_id: number, stat_id: number): Promise<Report> {
    return ApiReport.getInstance().GET_BYID(report_id, stat_id);
  }
}
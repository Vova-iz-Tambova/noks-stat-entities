import { postReport, putReport, Report } from './types';
import { ApiReport } from '../../api/modules/Report';

export class ReportModel {
  static async postReport(stat_id: number, data: postReport): Promise<number> {
    return ApiReport.getInstance().POST(stat_id, data);
  }

  static async deleteReport(stat_id: number, report_id: number): Promise<boolean> {
    return ApiReport.getInstance().DELETE(stat_id, report_id);
  }

  static async putReport(stat_id: number, report_id: number, data: putReport): Promise<boolean> {
    return ApiReport.getInstance().PUT(stat_id, report_id, data);
  }

  static async getReportById(stat_id: number, report_id: number): Promise<Report> {
    return ApiReport.getInstance().GET_BY_ID(stat_id, report_id);
  }

  static async getAllReports(stat_id: number): Promise<Array<Report>> {
    return ApiReport.getInstance().GET_ALL(stat_id);
  }
}
import { Report } from './types';
import { ApiReport } from '../../api/modules/Report';

export class ReportModel {

  static async post(stat_id: number): Promise<number> {
    return ApiReport.getInstance().POST(stat_id);
  }

  static async delete(stat_id: number, report_id: number): Promise<boolean> {
    return ApiReport.getInstance().DELETE(stat_id, report_id);
  }

  static async put(stat_id: number, report_id: number): Promise<boolean> {
    return ApiReport.getInstance().PUT(stat_id, report_id);
  }

  static async getById(stat_id: number, report_id: number): Promise<Report> {
    return ApiReport.getInstance().GET_BY_ID(stat_id, report_id);
  }

  static async getAll(stat_id: number): Promise<Array<Report>> {
    return ApiReport.getInstance().GET_ALL(stat_id);
  }
}
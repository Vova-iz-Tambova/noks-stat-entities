import { Report } from './types';
import { ApiReport } from '../../api/modules/Report';

export class ReportModel {

  static async getAll(stat_id: number): Promise<Array<Report>> {
    return ApiReport.getInstance().GET(stat_id);
  }

  static async get(stat_id: number, report_id: number): Promise<Report> {
    return ApiReport.getInstance().GET_BY_ID(stat_id, report_id);
  }
}
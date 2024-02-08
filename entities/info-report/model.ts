import { InfoReport } from './types';
import { ApiInfoReport } from '../../api/modules/InfoReport';

export class InfoReportModel {
  static async getInfoReport(): Promise<InfoReport> {
    return ApiInfoReport.getInstance().GET();
  }
}
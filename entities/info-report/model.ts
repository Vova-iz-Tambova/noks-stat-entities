import { InfoReport } from './types';
import { ApiInfoReport } from '../../api/modules/InfoReport';

export class InfoReportModel {

  static async getInfoReportAll(): Promise<Array<InfoReport>> {
    return ApiInfoReport.getInstance().GET();
}

  static async getInfoReportByType(type: number): Promise<InfoReport> {
    return ApiInfoReport.getInstance().GET_BYTYPE(type);
  }
}
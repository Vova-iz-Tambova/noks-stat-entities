import { YandexDirectAuth, YandexDirectSetting } from './types';
import { ApiYandexDirect } from '../../api/modules/YandexDirect';

export class YandexDirectModel {

  static async putSetting(stat_id: number, integration_id: number): Promise<boolean> {
    return ApiYandexDirect.getInstance().PUT_SETTING(stat_id, integration_id);
  }

  static async postIntegration(stat_id: number): Promise<number> {
    return ApiYandexDirect.getInstance().POST_INTEGRATION(stat_id);
  }

  static async putCampaign(stat_id: number, integration_id: number): Promise<boolean> {
    return ApiYandexDirect.getInstance().PUT_CAMPAIGN(stat_id, integration_id);
  }

  static async getSetting(stat_id: number, integration_id: number): Promise<YandexDirectSetting> {
    return ApiYandexDirect.getInstance().GET_SETTING(stat_id, integration_id);
  }

  static async postAuth(stat_id: string, integration_id: string): Promise<boolean> {
    return ApiYandexDirect.getInstance().POST_AUTH(stat_id, integration_id);
  }

  static async getExist(stat_id: number, integration_id: number): Promise<YandexDirectAuth> {
    return ApiYandexDirect.getInstance().GET_EXIST(stat_id, integration_id);
  }
}
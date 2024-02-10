import { YandexDirectAuth, YandexDirectEntity, YandexDirectSetting } from './types';
import { ApiYandexDirect } from '../../api/modules/YandexDirect';

export class YandexDirectModel {
  // CAMPAIGN CHANNEL YANDEX DIRECT
  static async getEntity(stat_id: string, integration_id: string): Promise<Array<YandexDirectEntity>> {
    return ApiYandexDirect.getInstance().GET_ENTITY(stat_id, integration_id);
  }
  // AUTH CHANNEL YANDEX DIRECT
  static async postAuth(stat_id: string, integration_id: string): Promise<boolean> {
    return ApiYandexDirect.getInstance().POST_AUTH(stat_id, integration_id);
  }

  // EXIST COMPLEX CHANNEL YANDEX.DIRECT
  static async getAuth(stat_id: number, integration_id: number): Promise<YandexDirectAuth> {
    return ApiYandexDirect.getInstance().GET_AUTH(stat_id, integration_id);
  }
  // SETTING CAMPAIGN
  static async putCampaign(stat_id: number, integration_id: number): Promise<boolean> {
    return ApiYandexDirect.getInstance().PUT_CAMPAIGN(stat_id, integration_id);
  }
  // SETTING CHANNEL YANDEX DIRECT
  static async getSetting(stat_id: number, integration_id: number): Promise<YandexDirectSetting> {
    return ApiYandexDirect.getInstance().GET_SETTING(stat_id, integration_id);
  }
  // SETTING CHANNEL YANDEX DIRECT
  static async putSetting(stat_id: number, integration_id: number): Promise<boolean> {
    return ApiYandexDirect.getInstance().PUT_SETTING(stat_id, integration_id);
  }
  // INTEGRATION CHANNEL YANDEX.DIRECT
  static async postIntegration(stat_id: number): Promise<number> {
    return ApiYandexDirect.getInstance().POST_INTEGRATION(stat_id);
  }
}
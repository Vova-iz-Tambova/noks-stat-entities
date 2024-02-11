import {
  YandexDirectAuth,
  YandexDirectSetting,
  putYandexDirectSetting,
  postYandexDirectIntegration,
  putYandexDirectCompaign,
  postYandexDirectAuth
} from './types';
import { ApiYandexDirect } from '../../api/modules/YandexDirect';

export class YandexDirectModel {
  private _stat_id: number;
  private _integration_id: number | null;
  private _data: object | null;

  constructor(stat_id, integration_id?, data?) {
    this._stat_id = stat_id;
    this._integration_id = integration_id;
    this._data = data;
  }

  // SETTING CHANNEL YANDEX DIRECT
  static async putSettingChannel(_stat_id, _integration_id, _data: putYandexDirectSetting): Promise<boolean> {
    return ApiYandexDirect.getInstance(_stat_id, _integration_id).PUT_SETTING(_data);
  }

  // INTEGRATION CHANNEL YANDEX.DIRECT
  static async postIntegrationChannel(_stat_id, _data: postYandexDirectIntegration): Promise<number> {
    return ApiYandexDirect.getInstance(_stat_id).POST_INTEGRATION(_data);
  }

  // SETTING CAMPAIGN
  static async putSettingCampaign(_stat_id, _integration_id, _data: putYandexDirectCompaign): Promise<boolean> {
    return ApiYandexDirect.getInstance(_stat_id, _integration_id).PUT_CAMPAIGN(_data);
  }

  // SETTING CHANNEL YANDEX DIRECT
  static async getSettingChannel(_stat_id, _integration_id): Promise<YandexDirectSetting> {
    return ApiYandexDirect.getInstance(_stat_id, _integration_id).GET_SETTING();
  }

  // AUTH CHANNEL YANDEX DIRECT
  static async postAuthChannel(_stat_id, _integration_id, data: postYandexDirectAuth): Promise<boolean> {
    return ApiYandexDirect.getInstance(_stat_id, _integration_id).POST_AUTH(data);
  }

  // EXIST COMPLEX CHANNEL YANDEX.DIRECT
  static async getExistChannel(_stat_id, _integration_id): Promise<YandexDirectAuth> {
    return ApiYandexDirect.getInstance(_stat_id, _integration_id).GET_EXIST();
  }
}
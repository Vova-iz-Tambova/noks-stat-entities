import { BaseApi } from "../../api 2/modules/BaseApi";
import { z } from 'zod';
import { SYandexDirectAuth, SYandexDirectSetting } from '../../entities/yandex-direct/scheme';
import {
  YandexDirectAuth,
  YandexDirectSetting,
  putYandexDirectSetting,
  postYandexDirectIntegration,
  putYandexDirectCompaign,
  postYandexDirectAuth
} from '../../entities/yandex-direct/types';


export class ApiYandexDirect extends BaseApi {
  private static instance: ApiYandexDirect;
  private _stat_id: number;
  private _integration_id: number | null;
  private _localBaseUrl: string;

  private constructor(stat_id, integration_id?, data?) {
    super();
    this._stat_id = stat_id;
    this._integration_id = integration_id;
    this._localBaseUrl = `api/stat/${stat_id}/integration`;
  }

  public static getInstance(stat_id: number, integration_id?: number) {
    ApiYandexDirect.instance = new ApiYandexDirect(stat_id, integration_id);
    return ApiYandexDirect.instance;
  }

  public async PUT_SETTING(data: putYandexDirectSetting): Promise<boolean> {
    const result: boolean = await this.put(
      {
        url: `${this._localBaseUrl}/${this._integration_id}/channel/yandex_direct/setting`,
        data: data,
      },
      z.boolean()
    );
    return result;
  }

  public async POST_INTEGRATION(data: postYandexDirectIntegration): Promise<number> {
    const result: number = await this.post(
      {
        url: `${this._localBaseUrl}/channel/yandex_direct`,
        data: data,
      },
      z.number()
    );
    return result;
  }

  public async PUT_CAMPAIGN(data: putYandexDirectCompaign): Promise<boolean> {
    const result: boolean = await this.put(
      {
        url: `${this._localBaseUrl}/${this._integration_id}/channel/yandex_direct/setting`,
        data: data,
      },
      z.boolean()
    );
    return result;
  }

  public async GET_SETTING() {
    const result: YandexDirectSetting = await this.get(
      {
        url: `${this._localBaseUrl}/${this._integration_id}/channel/yandex_direct/setting`,
      },
      SYandexDirectSetting
    );
    return result;
  }

  public async POST_AUTH(data: postYandexDirectAuth): Promise<boolean> {
    const result: boolean = await this.post(
      {
        url: `${this._localBaseUrl}/${this._integration_id}/channel/yandex_direct/auth`,
        data: data,
      },
      z.boolean()
    );
    return result;
  }

  public async GET_EXIST() {
    const result: YandexDirectAuth = await this.get(
      {
        url: `${this._localBaseUrl}/${this._integration_id}/channel/yandex_direct/exist_complex`,
      },
      SYandexDirectAuth
    );
    return result;
  }
}
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
  private localBaseUrl = `api/stat`;
  private constructor() {
    super();
  }

  public static getInstance() {
    ApiYandexDirect.instance = new ApiYandexDirect();
    return ApiYandexDirect.instance;
  }

  public async PUT_SETTING(stat_id: number, integration_id: number, data: putYandexDirectSetting): Promise<boolean> {
    const result: boolean = await this.put(
      {
        url: `${this.localBaseUrl}/${stat_id}/integration/${integration_id}/channel/yandex_direct/setting`,
        data: data,
      },
      z.boolean()
    );
    return result;
  }

  public async POST_INTEGRATION(stat_id: number, data: postYandexDirectIntegration): Promise<number> {
    const result: number = await this.post(
      {
        url: `${this.localBaseUrl}/${stat_id}/integration/channel/yandex_direct`,
        data: data,
      },
      z.number()
    );
    return result;
  }

  public async PUT_CAMPAIGN(stat_id: number, integration_id: number, data: putYandexDirectCompaign): Promise<boolean> {
    const result: boolean = await this.put(
      {
        url: `${this.localBaseUrl}/${stat_id}/integration/${integration_id}/channel/yandex_direct/setting`,
        data: data,
      },
      z.boolean()
    );
    return result;
  }

  public async GET_SETTING(stat_id: number, integration_id: number) {
    const result: YandexDirectSetting = await this.get(
      {
        url: `${this.localBaseUrl}/${stat_id}/integration/${integration_id}/channel/yandex_direct/setting`,
      },
      SYandexDirectSetting
    );
    return result;
  }

  public async POST_AUTH(stat_id: string, integration_id: string, data: postYandexDirectAuth): Promise<boolean> {
    const result: boolean = await this.post(
      {
        url: `${this.localBaseUrl}/${stat_id}/integration/${integration_id}/channel/yandex_direct/auth`,
        data: data,
      },
      z.boolean()
    );
    return result;
  }

  public async GET_EXIST(stat_id: number, integration_id: number) {
    const result: YandexDirectAuth = await this.get(
      {
        url: `${this.localBaseUrl}/${stat_id}/integration/${integration_id}/channel/yandex_direct/exist_complex`,
      },
      SYandexDirectAuth
    );
    return result;
  }
}
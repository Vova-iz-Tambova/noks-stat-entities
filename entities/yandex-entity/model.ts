import { YandexDirectEntity } from './types';
import { ApiYandexEntity } from '../../api/modules/YandexEntity';

export class YandexEntityModel {
  // CAMPAIGN CHANNEL YANDEX DIRECT
  static async getEntity(stat_id: string, integration_id: string): Promise<Array<YandexDirectEntity>> {
    return ApiYandexEntity.getInstance().GET_ENTITY(stat_id, integration_id);
  }
}
import { z } from 'zod';
import { SYandexDirectAuth, SYandexDirectSetting } from './scheme';

export type putYandexDirectSetting = {
  add_new_campaign: number | null,
  import_template_campaign: string | null,
};

export type postYandexDirectIntegration = {
  name: string | null,
};

export type putYandexDirectCompaign = {
  campaigns: [id: number, status: number],
};

export type postYandexDirectAuth = {
  token: string,
};

export type YandexDirectAuth = z.infer<typeof SYandexDirectAuth>;
export type YandexDirectSetting = z.infer<typeof SYandexDirectSetting>;
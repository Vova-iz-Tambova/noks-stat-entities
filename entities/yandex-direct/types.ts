import { z } from 'zod';
import { SYandexDirectAuth, SYandexDirectEntity, SYandexDirectSetting } from './scheme';

export type YandexDirectAuth = z.infer<typeof SYandexDirectAuth>;
export type YandexDirectEntity = z.infer<typeof SYandexDirectEntity>;
export type YandexDirectSetting = z.infer<typeof SYandexDirectSetting>;
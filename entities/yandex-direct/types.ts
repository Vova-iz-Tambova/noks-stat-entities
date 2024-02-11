import { z } from 'zod';
import { SYandexDirectAuth,  SYandexDirectSetting } from './scheme';

export type YandexDirectAuth = z.infer<typeof SYandexDirectAuth>;
export type YandexDirectSetting = z.infer<typeof SYandexDirectSetting>;
import { z } from 'zod';

export const SYandexDirectAuth = z.object({
  auth: z.boolean(),
  ready_to_configure: z.boolean()
});

export const SYandexDirectSetting = z.object({
  integration_id: z.string(),
  add_new_campaign: z.number(), // 0 or 1
  import_template_campaign: z.string().nullable(),
  nds: z.string().nullable(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});
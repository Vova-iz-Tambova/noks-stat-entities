import { z } from 'zod';

export const SReport = z.object({
  report_id: z.number(),
  report_type: z.any().nullable(),
  name: z.string(),
  order_nesting: z.array(z.number()),
  show_columns: z.array(z.string()),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
})
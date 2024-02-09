import { z } from 'zod';

export enum REPORT_TYPE {
  CHANNEL = 1,
  DOMAIN = 2,
  LANDING_PAGE = 3,
  CUSTOM = 10
}

export const SReportInfo = z.object({
  type: z.nativeEnum(REPORT_TYPE),
  name: z.string(),
  show_fields: z.array(z.string()),
  fields: z.array(z.object({
    name: z.string(),
    header: z.string(),
    type_column: z.string()
  })),
  order_nesting: z.array(z.number()),
  nesting: z.array(z.object({
    value: z.number(),
    header: z.string()
  }))
});
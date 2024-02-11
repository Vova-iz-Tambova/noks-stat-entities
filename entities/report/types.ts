import { z } from 'zod';
import { SReport } from './scheme';

export type postReport = {
  name: string | null,
  report_type: number | null,
  order_nesting: number[] | null,
  show_columns: string[] | null,
};

export type putReport = {
  name: string | null,
  order_nesting: number[] | null,
  show_columns: string[] | null,
};

export type Report = z.infer<typeof SReport>;
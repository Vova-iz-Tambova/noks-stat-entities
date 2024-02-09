import { z } from 'zod';
import {SReportInfo} from './scheme';

export type ReportInfo = z.infer<typeof SReportInfo>;
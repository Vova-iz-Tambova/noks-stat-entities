import { z } from 'zod';
import { SReport } from './scheme';

export type Report = z.infer<typeof SReport>;
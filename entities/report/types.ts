import { z } from 'zod';
import { SReport } from './sheme';

export type Report = z.infer<typeof SReport>;
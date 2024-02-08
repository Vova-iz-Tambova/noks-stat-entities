import { z } from 'zod';
import {SInfoReport} from './scheme';

export type InfoReport = z.infer<typeof SInfoReport>;
import z from 'zod';

const SReport = {
    id : z.number(),
    name: z.string(),
}
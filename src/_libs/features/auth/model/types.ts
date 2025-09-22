import { z } from 'zod';
import { loginFormSchema } from './schemas';

export type LoginFormSchema = z.infer<typeof loginFormSchema>;

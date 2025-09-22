import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.email({ error: 'Digite un correo electrónico válido.' }),
  password: z
    .string()
    .min(6, { error: 'La contraseña debe tener al menos 6 caracteres.' }),
});

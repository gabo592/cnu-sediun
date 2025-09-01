import { Env } from '../types/env';

const { NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY } =
  process.env;

export const env: Env = {
  supabase: {
    url: NEXT_PUBLIC_SUPABASE_URL ?? '',
    publishableKey: NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? '',
  },
};

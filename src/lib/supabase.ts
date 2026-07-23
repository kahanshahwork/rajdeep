import { createClient, SupabaseClient } from '@supabase/supabase-js';

// These come from Vite env vars (set in Vercel + local .env).
// They are the PUBLIC anon key + URL — safe to expose in frontend code.
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// The admin password the client uses to log in to the offer portal.
export const ADMIN_PASSWORD = (import.meta.env.VITE_ADMIN_PASSWORD as string) || 'rajdeep2026';

export const isSupabaseConfigured = Boolean(url && anonKey);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(url as string, anonKey as string)
  : null;

// Where the offer image + text live.
export const OFFER_TABLE = 'offers';
export const OFFER_BUCKET = 'offer-images';
// We keep a single current offer in one row with this fixed id.
export const OFFER_ROW_ID = 'current';

export interface Offer {
  id: string;
  image_url: string | null;
  text: string | null;
  active: boolean;
  updated_at?: string;
}

/** Fetch the current offer (or null if none / not configured). */
export async function getCurrentOffer(): Promise<Offer | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from(OFFER_TABLE)
    .select('*')
    .eq('id', OFFER_ROW_ID)
    .maybeSingle();
  if (error) {
    console.warn('getCurrentOffer:', error.message);
    return null;
  }
  return (data as Offer) ?? null;
}

import en from './en.json';
import ne from './ne.json';

export const languages = {
  en: 'English',
  ne: 'नेपाली',
} as const;

export type Locale = keyof typeof languages;

export const defaultLocale: Locale = 'en';

const dictionaries = { en, ne } as const;

export type Dictionary = typeof en;

/** Get the translation dictionary for a locale. */
export function getDict(locale: string): Dictionary {
  return (dictionaries as Record<string, Dictionary>)[locale] ?? en;
}

/**
 * Returns a translator function `t('a.b.c')` that resolves a dotted key
 * against the locale dictionary. Returns the key itself if not found.
 */
export function useTranslations(locale: string) {
  const dict = getDict(locale);
  return function t(key: string): string {
    const value = key.split('.').reduce<unknown>((acc, part) => {
      if (acc && typeof acc === 'object' && part in (acc as Record<string, unknown>)) {
        return (acc as Record<string, unknown>)[part];
      }
      return undefined;
    }, dict);
    return typeof value === 'string' ? value : key;
  };
}

/** Resolve an array value (e.g. objectives list) from the dictionary. */
export function getList(locale: string, key: string): string[] {
  const dict = getDict(locale);
  const value = key.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object' && part in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, dict);
  return Array.isArray(value) ? (value as string[]) : [];
}

/** Determine the locale from an Astro URL pathname. */
export function getLocaleFromUrl(url: URL): Locale {
  const [, seg] = url.pathname.split('/');
  if (seg === 'ne') return 'ne';
  return 'en';
}

/**
 * Build a localised path. Given a locale and a path without locale prefix
 * (e.g. '/who-we-are'), returns '/en/who-we-are'.
 */
export function localizedPath(locale: string, path: string): string {
  const clean = path === '/' ? '' : path.replace(/^\//, '');
  const base = `/${locale}`;
  return clean ? `${base}/${clean}` : `${base}/`;
}

/** Swap the locale prefix on the current pathname to another locale. */
export function switchLocalePath(url: URL, targetLocale: string): string {
  const parts = url.pathname.split('/').filter(Boolean);
  if (parts[0] === 'en' || parts[0] === 'ne') {
    parts[0] = targetLocale;
  } else {
    parts.unshift(targetLocale);
  }
  return '/' + parts.join('/') + (url.pathname.endsWith('/') && parts.length ? '/' : '');
}

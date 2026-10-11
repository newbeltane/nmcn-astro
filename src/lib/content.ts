import { getCollection, getEntry } from 'astro:content';
import type { Locale } from '../i18n/utils';

export const locales: Locale[] = ['en', 'ne'];

/** getStaticPaths helper shared by all localised pages. */
export function localePaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

/** Fetch an editable page entry (falls back to the English version). */
export async function getPage(locale: string, slug: string) {
  const entry =
    (await getEntry('pages', `${locale}/${slug}`)) ?? (await getEntry('pages', `en/${slug}`));
  return entry;
}

/** Published news for a locale, newest first (falls back to English). */
export async function getNews(locale: string) {
  const all = await getCollection('news', ({ data }) => !data.draft);
  let items = all.filter((i) => i.data.locale === locale);
  if (items.length === 0) items = all.filter((i) => i.data.locale === 'en');
  return items.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

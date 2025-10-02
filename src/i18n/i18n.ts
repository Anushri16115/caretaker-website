// Minimal i18n placeholder. Replace with i18next or similar in production.
import en from './en.json';
import mr from './mr.json';
import hi from './hi.json';

export const locales = {
  en,
  mr,
  hi
}

export function t(lang: 'en'|'mr'|'hi', key: string) {
  return (locales as any)[lang][key] ?? key
}

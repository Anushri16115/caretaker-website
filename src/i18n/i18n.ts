// Minimal i18n placeholder. Replace with i18next or similar in production.
export const locales = {
  en: require('./en.json'),
  mr: require('./mr.json'),
  hi: require('./hi.json'),
}

export function t(lang: 'en'|'mr'|'hi', key: string) {
  return (locales as any)[lang][key] ?? key
}

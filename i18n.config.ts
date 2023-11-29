export const i18n = {
  locales: ['en', 'es'],
  defaultLocale: 'en',
}

export type Locale = (typeof i18n)['locales'][number]

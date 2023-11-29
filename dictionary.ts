import 'server-only'
import type { Locale } from './i18n.config'

const dictionaries = {
  en: () => import('./src/locales/en.json').then(module => module.default),
  es: () => import('./src/locales/es.json').then(module => module.default),
}

export const getDictionary = (locale: Locale) => dictionaries[locale]()

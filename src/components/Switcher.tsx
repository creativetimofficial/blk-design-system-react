'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { i18n } from '../../i18n.config'

export default function LocaleSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const labels = {
    en: 'En',
    es: 'Es',
  }

  const currentLocale = pathName?.replace('/', '') || 'en'
  return (
    <div className="language-switch">
      {i18n.locales.map(locale => {
        return (
          <Link
            key={locale}
            href={redirectedPathName(locale)}
            className={currentLocale === locale ? 'lang-active' : ''}
          >
            {labels[locale]}
          </Link>
        )
      })}
    </div>
  )
}

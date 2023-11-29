import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

import { i18n } from '../i18n.config'

const PUBLIC_FILE = /\.(.*)$/

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {}
  // eslint-disable-next-line no-return-assign
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  const { locales } = i18n
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

  const locale = matchLocale(languages, locales, i18n.defaultLocale)
  return locale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (PUBLIC_FILE.test(request.nextUrl.pathname)) {
    // to not break the images and other public files
    return NextResponse.next()
  }

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    if (locale === i18n.defaultLocale) {
      return NextResponse.rewrite(new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url))
    }
    return NextResponse.redirect(new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

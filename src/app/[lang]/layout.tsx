import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { Locale, i18n } from '../../../i18n.config'

import '@/styles/global.scss'

export const metadata: Metadata = { title: 'Hermes Logistic' }
export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

const poppins = Poppins({
  weight: ['400', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const RootLayout = ({ children, params }: { children: ReactNode; params: { lang: Locale } }) => {
  return (
    <html lang={params?.lang ?? 'en'}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#001751" />
        <meta name="msapplication-TileColor" content="#001751" />
        <meta name="theme-color" content="#001751" />
      </head>
      <body className={poppins.className}>
        {children}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.1/js/bootstrap.min.js"
          integrity="sha512-fHY2UiQlipUq0dEabSM4s+phmn+bcxSYzXP4vAXItBvBHU7zAM/mkhCZjtBEIJexhOMzZbgFlPLuErlJF2b+0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          defer
        />
      </body>
    </html>
  )
}

export default RootLayout

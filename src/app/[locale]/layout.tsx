import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import type { ReactNode } from 'react'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { languageTags, locales } from '@/lib/i18n'
import { requireLocale } from '@/lib/routes'
import { siteUrl } from '@/lib/site'
import '../globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })
const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  preload: false,
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = { metadataBase: siteUrl }
export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const locale = requireLocale((await params).locale)

  return (
    <html lang={languageTags[locale]} className={inter.variable + ' ' + jetBrainsMono.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

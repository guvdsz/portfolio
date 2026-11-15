import 'server-only'
import type { Metadata } from 'next'
import { defaultLocale, languageTags, locales, type Locale } from './i18n'
import type { LocalizedPaths } from './routes'
import { author, siteUrl } from './site'

export function languageAlternates(paths: LocalizedPaths): Record<string, string> {
  const languages: Record<string, string> = {}
  if (!siteUrl) return languages

  for (const locale of locales) {
    const path = paths[locale]
    if (path) languages[languageTags[locale]] = new URL(path, siteUrl).href
  }
  return languages
}

interface PageMetadata {
  locale: Locale
  path: string
  translations: LocalizedPaths
  title: string
  description: string
  type?: 'website' | 'article'
  useDefault?: boolean
  publishedTime?: string
}

export function pageMetadata({
  locale, path, translations, title, description, type = 'website', useDefault, publishedTime,
}: PageMetadata): Metadata {
  const languages = languageAlternates(translations)
  const fallback = translations[defaultLocale]
  if (siteUrl && useDefault && fallback) languages['x-default'] = new URL(fallback, siteUrl).href

  return {
    title,
    description,
    alternates: siteUrl ? { canonical: path, languages } : undefined,
    robots: siteUrl ? undefined : { index: false },
    openGraph: {
      type,
      title,
      description,
      url: siteUrl ? path : undefined,
      siteName: author,
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      ...(type === 'article' ? { publishedTime, authors: [author] } : {}),
    },
  }
}

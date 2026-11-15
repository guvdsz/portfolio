import 'server-only'
import { notFound } from 'next/navigation'
import { isLocale, type Locale, type Localized } from './i18n'

export type LocalizedPaths = Partial<Localized<string>>

export const homePaths = { pt: '/pt', en: '/en' } satisfies Localized<string>
export const notesPaths = { pt: '/pt/notes', en: '/en/notes' } satisfies Localized<string>

export function requireLocale(value: string): Locale {
  if (!isLocale(value)) notFound()
  return value
}

export function notePath(locale: Locale, slug: string): string {
  return notesPaths[locale] + '/' + slug
}

export function projectPath(locale: Locale, slug: string): string {
  return homePaths[locale] + '/projects/' + slug
}

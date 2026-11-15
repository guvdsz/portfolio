import 'server-only'
import type { Locale, Localized } from '@/lib/i18n'
import type { Dictionary } from './types'

const dictionaries = {
  pt: () => import('./pt.json').then((module) => module.default),
  en: () => import('./en.json').then((module) => module.default),
} satisfies Localized<() => Promise<Dictionary>>

export function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]()
}

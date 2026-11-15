export const locales = ['pt', 'en'] as const
export type Locale = (typeof locales)[number]
export type Localized<T> = Record<Locale, T>
export const defaultLocale: Locale = 'pt'

export const languageTags = { pt: 'pt-BR', en: 'en' } satisfies Localized<string>
export const languageNames = { pt: 'Português', en: 'English' } satisfies Localized<string>

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value)
}

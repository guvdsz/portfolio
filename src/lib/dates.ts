import 'server-only'
import { languageTags, type Locale } from './i18n'

export function formatDate(locale: Locale, date: string, options: Intl.DateTimeFormatOptions): string {
  const isoDate = date.length === 7 ? date + '-01' : date
  return new Intl.DateTimeFormat(languageTags[locale], { ...options, timeZone: 'UTC' }).format(
    new Date(isoDate + 'T00:00:00Z'),
  )
}

export function formatDateRange(locale: Locale, start: string, end?: string): [string, string?] {
  const month = { month: 'short' } as const
  const monthYear = { month: 'short', year: 'numeric' } as const
  return [
    formatDate(locale, start, start.slice(0, 4) === end?.slice(0, 4) ? month : monthYear),
    end ? formatDate(locale, end, monthYear) : undefined,
  ]
}

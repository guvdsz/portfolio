import Link from 'next/link'
import { languageNames, languageTags, locales, type Locale } from '@/lib/i18n'
import type { LocalizedPaths } from '@/lib/routes'

interface LocaleSwitcherProps {
  locale: Locale
  paths: LocalizedPaths
  label: string
}

export function LocaleSwitcher({ locale, paths, label }: LocaleSwitcherProps) {
  return (
    <nav aria-label={label} className="locale-switcher">
      {locales.map((language, index) => {
        const path = paths[language]
        return (
          <span key={language}>
            {index > 0 && <span className="locale-separator" aria-hidden="true">/</span>}
            {path ? (
              <Link
                href={path}
                hrefLang={languageTags[language]}
                lang={languageTags[language]}
                aria-label={language + ' — ' + languageNames[language]}
                aria-current={locale === language ? 'page' : undefined}
              >
                {language}
              </Link>
            ) : (
              <span aria-label={languageNames[language]} aria-disabled="true">{language}</span>
            )}
          </span>
        )
      })}
    </nav>
  )
}

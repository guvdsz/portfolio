import Link from 'next/link'
import type { Dictionary } from '@/dictionaries/types'
import type { Locale } from '@/lib/i18n'
import { homePaths, notesPaths, type LocalizedPaths } from '@/lib/routes'
import { author } from '@/lib/site'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { LocaleSwitcher } from './LocaleSwitcher'

interface HeaderProps {
  locale: Locale
  paths: LocalizedPaths
  labels: Dictionary['navigation']
  onNotesIndex?: boolean
}

export function Header({ locale, paths, labels, onNotesIndex }: HeaderProps) {
  const home = homePaths[locale]

  return (
    <header className="site-header">
      <Link className="site-name" href={home}>{author}</Link>
      <div className="header-controls">
        <nav className="primary-nav" aria-label={labels.primary}>
          <Link href={notesPaths[locale]} aria-current={onNotesIndex ? 'page' : undefined}>
            {labels.notes}
          </Link>
        </nav>
        <LocaleSwitcher locale={locale} paths={paths} label={labels.language} />
        <ThemeToggle label={labels.theme} darkModeLabel={labels.darkMode} />
      </div>
    </header>
  )
}

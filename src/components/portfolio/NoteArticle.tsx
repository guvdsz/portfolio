import type { ReactNode } from 'react'
import { Prose } from '@/components/ui/Prose'
import type { NoteSummary } from '@/data/notes'
import { formatDate } from '@/lib/dates'
import type { Locale } from '@/lib/i18n'

interface NoteArticleProps {
  note: NoteSummary
  locale: Locale
  children: ReactNode
}

export function NoteArticle({ note, locale, children }: NoteArticleProps) {
  return (
    <article>
      <header className="article-header">
        <h1>{note.title}</h1>
        <time className="meta" dateTime={note.publishedAt}>
          {formatDate(locale, note.publishedAt, { dateStyle: 'long' })}
        </time>
      </header>
      <Prose>{children}</Prose>
    </article>
  )
}

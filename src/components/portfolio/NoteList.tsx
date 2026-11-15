import Link from 'next/link'
import type { NoteSummary } from '@/data/notes'
import { formatDate } from '@/lib/dates'
import type { Locale } from '@/lib/i18n'
import { notePath } from '@/lib/routes'

interface NoteListProps {
  notes: readonly NoteSummary[]
  locale: Locale
  includeYear?: boolean
}

export function NoteList({ notes, locale, includeYear = false }: NoteListProps) {
  return (
    <ul className="note-list">
      {notes.map((note) => (
        <li key={note.slug}>
          <Link href={notePath(locale, note.slug)}>{note.title}</Link>
          <time className="meta" dateTime={note.publishedAt}>
            {formatDate(locale, note.publishedAt, {
              day: 'numeric',
              month: 'short',
              year: includeYear ? 'numeric' : undefined,
            })}
          </time>
        </li>
      ))}
    </ul>
  )
}

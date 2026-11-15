import { SiteFrame } from '@/components/layout/SiteFrame'
import { NoteList } from '@/components/portfolio/NoteList'
import { listNotes } from '@/data/notes'
import { getDictionary } from '@/dictionaries'
import { pageMetadata } from '@/lib/metadata'
import { notesPaths, requireLocale } from '@/lib/routes'
import { author } from '@/lib/site'

type NotesProps = PageProps<'/[locale]/notes'>

export async function generateMetadata({ params }: NotesProps) {
  const locale = requireLocale((await params).locale)
  const { notes } = await getDictionary(locale)
  return pageMetadata({
    locale,
    path: notesPaths[locale],
    translations: notesPaths,
    title: notes.title + ' | ' + author,
    description: notes.description,
  })
}

export default async function NotesPage({ params }: NotesProps) {
  const locale = requireLocale((await params).locale)
  const { navigation, notes } = await getDictionary(locale)
  const byYear = Map.groupBy(listNotes(locale), (note) => note.publishedAt.slice(0, 4))

  return (
    <SiteFrame locale={locale} paths={notesPaths} labels={navigation} onNotesIndex>
      <div className="intro">
        <h1>{notes.title}</h1>
        <p>{notes.description}</p>
      </div>
      {[...byYear].map(([year, entries]) => (
        <section className="home-section" key={year} aria-labelledby={'year-' + year}>
          <h2 id={'year-' + year} className="year-heading">{year}</h2>
          <NoteList notes={entries} locale={locale} />
        </section>
      ))}
    </SiteFrame>
  )
}

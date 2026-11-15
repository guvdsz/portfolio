import Link from 'next/link'
import { SiteFrame } from '@/components/layout/SiteFrame'
import { Experience } from '@/components/portfolio/Experience'
import { Intro } from '@/components/portfolio/Intro'
import { NoteList } from '@/components/portfolio/NoteList'
import { ProjectSection } from '@/components/portfolio/ProjectSection'
import { experience } from '@/data/experience'
import { listNotes } from '@/data/notes'
import { getDictionary } from '@/dictionaries'
import { pageMetadata } from '@/lib/metadata'
import { homePaths, notesPaths, requireLocale } from '@/lib/routes'
import { author } from '@/lib/site'

type HomeProps = PageProps<'/[locale]'>

export async function generateMetadata({ params }: HomeProps) {
  const locale = requireLocale((await params).locale)
  const { home } = await getDictionary(locale)
  return pageMetadata({
    locale,
    path: homePaths[locale],
    translations: homePaths,
    title: author,
    description: home.description,
    useDefault: true,
  })
}

export default async function HomePage({ params }: HomeProps) {
  const locale = requireLocale((await params).locale)
  const { home, navigation, notes, projects } = await getDictionary(locale)
  const recentNotes = listNotes(locale).slice(0, 3)

  return (
    <SiteFrame locale={locale} paths={homePaths} labels={navigation}>
      <Intro title={home.title} paragraphs={home.paragraphs} />
      <ProjectSection locale={locale} title={projects.title} emptyMessage={projects.empty} />
      <Experience employers={experience} locale={locale} heading={navigation.experience} />
      {recentNotes.length > 0 && (
        <section className="home-section" aria-labelledby="notes-heading">
          <h2 id="notes-heading">{notes.title}</h2>
          <NoteList notes={recentNotes} locale={locale} includeYear />
          <p className="all-notes"><Link href={notesPaths[locale]}>{notes.all}</Link></p>
        </section>
      )}
    </SiteFrame>
  )
}

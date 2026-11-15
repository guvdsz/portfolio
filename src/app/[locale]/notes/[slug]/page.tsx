import { notFound } from 'next/navigation'
import { SiteFrame } from '@/components/layout/SiteFrame'
import { NoteArticle } from '@/components/portfolio/NoteArticle'
import { getNote, listNotes } from '@/data/notes'
import { getDictionary } from '@/dictionaries'
import { pageMetadata } from '@/lib/metadata'
import { notePath, requireLocale } from '@/lib/routes'
import { author } from '@/lib/site'

type NoteProps = PageProps<'/[locale]/notes/[slug]'>

export const dynamicParams = false

export function generateStaticParams({ params }: { params: { locale: string } }) {
  return listNotes(requireLocale(params.locale)).map(({ slug }) => ({ slug }))
}

async function resolveNote(params: NoteProps['params']) {
  const { locale: segment, slug } = await params
  const locale = requireLocale(segment)
  const entry = getNote(locale, slug)
  if (!entry) notFound()
  return { locale, ...entry }
}

export async function generateMetadata({ params }: NoteProps) {
  const { locale, note, paths } = await resolveNote(params)
  return pageMetadata({
    locale,
    path: notePath(locale, note.slug),
    translations: paths,
    title: note.title + ' | ' + author,
    description: note.description,
    type: 'article',
    publishedTime: note.publishedAt,
  })
}

export default async function NotePage({ params }: NoteProps) {
  const { locale, note, paths } = await resolveNote(params)
  const [{ navigation }, { default: Content }] = await Promise.all([
    getDictionary(locale),
    note.load(),
  ])

  return (
    <SiteFrame locale={locale} paths={paths} labels={navigation}>
      <NoteArticle note={note} locale={locale}><Content /></NoteArticle>
    </SiteFrame>
  )
}

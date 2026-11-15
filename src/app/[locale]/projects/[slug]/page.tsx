import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteFrame } from '@/components/layout/SiteFrame'
import { Prose } from '@/components/ui/Prose'
import { getProject, projects } from '@/data/projects'
import { getDictionary } from '@/dictionaries'
import { pageMetadata } from '@/lib/metadata'
import { homePaths, requireLocale } from '@/lib/routes'
import { author } from '@/lib/site'

type ProjectPageProps = PageProps<'/[locale]/projects/[slug]'>

export const dynamicParams = false

export function generateStaticParams({ params }: { params: { locale: string } }) {
  const locale = requireLocale(params.locale)
  return projects.map(({ versions }) => ({ slug: versions[locale].slug }))
}

async function resolveProject(params: ProjectPageProps['params']) {
  const { locale: segment, slug } = await params
  const locale = requireLocale(segment)
  const project = getProject(locale, slug)
  if (!project) notFound()
  return { locale, ...project }
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { locale, version, paths } = await resolveProject(params)
  return pageMetadata({
    locale,
    path: paths[locale],
    translations: paths,
    title: version.title + ' | ' + author,
    description: version.description,
  })
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, version, paths } = await resolveProject(params)
  const { navigation, projects: labels } = await getDictionary(locale)

  return (
    <SiteFrame locale={locale} paths={paths} labels={navigation}>
      <Link className="project-back" href={homePaths[locale] + '#projects'}>
        <span aria-hidden="true">← </span>{labels.back}
      </Link>
      <article>
        <header className="project-header">
          <h1>{version.title}</h1>
          <p>{version.description}</p>
        </header>
        <Prose>
          {version.sections.map(({ title, text }) => (
            <section key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </section>
          ))}
        </Prose>
      </article>
    </SiteFrame>
  )
}

import 'server-only'
import type { Locale, Localized } from '@/lib/i18n'
import { projectPath } from '@/lib/routes'

export interface ProjectVersion {
  slug: string
  title: string
  description: string
  sections: readonly {
    title: string
    text: string
  }[]
}

interface Project {
  id: string
  icon?: `/${string}`
  versions: Localized<ProjectVersion>
}

export const projects: readonly Project[] = []

export function projectPaths({ versions }: Project): Localized<string> {
  return {
    pt: projectPath('pt', versions.pt.slug),
    en: projectPath('en', versions.en.slug),
  }
}

export function getProject(locale: Locale, slug: string) {
  const project = projects.find(({ versions }) => versions[locale].slug === slug)
  return project && { version: project.versions[locale], paths: projectPaths(project) }
}

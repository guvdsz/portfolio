import { projects } from '@/data/projects'
import type { Locale } from '@/lib/i18n'
import { projectPath } from '@/lib/routes'
import { ProjectCard } from './ProjectCard'

interface ProjectSectionProps {
  locale: Locale
  title: string
  emptyMessage: string
}

export function ProjectSection({ locale, title, emptyMessage }: ProjectSectionProps) {
  return (
    <section className="home-section" id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading">{title}</h2>
      {projects.length === 0 ? (
        <p className="text-muted">{emptyMessage}</p>
      ) : (
        <ul className="project-grid">
          {projects.map(({ id, icon, versions }) => {
            const project = versions[locale]

            return (
              <li key={id}>
                <ProjectCard
                  href={projectPath(locale, project.slug)}
                  title={project.title}
                  description={project.description}
                  icon={icon}
                />
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}

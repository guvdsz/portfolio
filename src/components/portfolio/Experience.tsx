import type { Employer } from '@/data/experience'
import { formatDateRange } from '@/lib/dates'
import type { Locale } from '@/lib/i18n'

interface ExperienceProps {
  employers: readonly Employer[]
  locale: Locale
  heading: string
}

export function Experience({ employers, locale, heading }: ExperienceProps) {
  return (
    <section id="experience" className="home-section" aria-labelledby="experience-heading">
      <h2 id="experience-heading">{heading}</h2>
      {employers.map(({ name, roles }) => (
        <div className="employer" key={name}>
          <h3>{name}</h3>
          <ul className="role-list">
            {roles.map(({ copy, start, end }) => {
              const [startLabel, endLabel] = formatDateRange(locale, start, end)
              return (
                <li key={start}>
                  <div className="role-heading">
                    <h4>{copy[locale].title}</h4>
                    <span className="meta role-date">
                      <time dateTime={start}>{startLabel}</time>
                      {' – '}
                      <time dateTime={end}>{endLabel}</time>
                    </span>
                  </div>
                  <p>{copy[locale].description}</p>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </section>
  )
}

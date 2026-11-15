import { ExternalLink } from '@/components/ui/ExternalLink'
import type { ParagraphPart } from '@/dictionaries/types'

interface IntroProps {
  title: string
  paragraphs: readonly (readonly ParagraphPart[])[]
}

export function Intro({ title, paragraphs }: IntroProps) {
  return (
    <div className="intro">
      <h1>{title}</h1>
      {paragraphs.map(([lead, ...rest]) => (
        <p key={typeof lead === 'string' ? lead : lead.text}>
          {typeof lead === 'string' ? lead : <ExternalLink href={lead.href}>{lead.text}</ExternalLink>}
          {rest.map((part) => (
            typeof part === 'string' ? part : (
              <ExternalLink key={part.href} href={part.href}>{part.text}</ExternalLink>
            )
          ))}
        </p>
      ))}
    </div>
  )
}

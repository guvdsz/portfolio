import { ExternalLink } from '@/components/ui/ExternalLink'
import type { ParagraphPart } from '@/dictionaries/types'
import { author } from '@/lib/site'

interface IntroProps {
  paragraphs: readonly (readonly ParagraphPart[])[]
}

export function Intro({ paragraphs }: IntroProps) {
  return (
    <div className="intro">
      <h1>{author}</h1>
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

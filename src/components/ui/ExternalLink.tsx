import type { ComponentPropsWithoutRef } from 'react'

type ExternalLinkProps = ComponentPropsWithoutRef<'a'> & {
  href: string
}

export function ExternalLink({ rel, ...props }: ExternalLinkProps) {
  return <a {...props} target="_blank" rel={rel ? 'noopener ' + rel : 'noopener'} />
}

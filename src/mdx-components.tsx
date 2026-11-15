import type { MDXComponents } from 'mdx/types'
import { ExternalLink } from '@/components/ui/ExternalLink'

const components: MDXComponents = {
  a: ({ href, ...props }) => (
    href && /^(https?:)?\/\//i.test(href)
      ? <ExternalLink {...props} href={href} />
      : <a {...props} href={href} />
  ),
}

export function useMDXComponents(): MDXComponents {
  return components
}

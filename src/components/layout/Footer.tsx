import { ExternalLink } from '@/components/ui/ExternalLink'
import { socialLinks } from '@/lib/site'

interface FooterProps {
  links: typeof socialLinks
}

export function Footer({ links }: FooterProps) {
  return (
    <footer className="site-footer">
      <ul>
        {links.map(({ label, href }) => (
          <li key={href}><ExternalLink href={href}>{label}</ExternalLink></li>
        ))}
      </ul>
    </footer>
  )
}

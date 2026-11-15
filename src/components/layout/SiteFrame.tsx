import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
import { socialLinks } from '@/lib/site'
import { Header } from './Header'
import { Footer } from './Footer'

type SiteFrameProps = Parameters<typeof Header>[0] & { children: ReactNode }

export function SiteFrame({ children, ...header }: SiteFrameProps) {
  return (
    <Container>
      <a className="skip-link" href="#content">{header.labels.skip}</a>
      <Header {...header} />
      <main className="site-main" id="content" tabIndex={-1}>
        {children}
      </main>
      <Footer links={socialLinks} />
    </Container>
  )
}

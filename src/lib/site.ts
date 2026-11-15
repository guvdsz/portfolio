import 'server-only'

export const author = 'Gustavo Viana'
export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/guvdsz' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/guvdsz/' },
] as const

const deploymentDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL
const origin = process.env.SITE_URL || (deploymentDomain && 'https://' + deploymentDomain)
export const siteUrl = origin ? new URL(origin) : undefined

import createMDX from '@next/mdx'
import type { NextConfig } from 'next'
import { defaultLocale } from './src/lib/i18n'

const config: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [{ source: '/', destination: '/' + defaultLocale, permanent: true }]
  },
}

export default createMDX({})(config)

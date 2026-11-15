'use client'

import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import { useLayoutEffect, type ReactNode } from 'react'
import { useIsHydrated } from '@/lib/use-is-hydrated'

function ApplyThemeBeforePaint() {
  const { resolvedTheme } = useTheme()

  useLayoutEffect(() => {
    // A new locale remounts the document layout and clears the theme attribute.
    if (resolvedTheme) document.documentElement.dataset.theme = resolvedTheme
  }, [resolvedTheme])

  return null
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const hydrated = useIsHydrated()

  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      enableColorScheme={false}
      // The bootstrap runs on document load. Client navigation applies the theme in the layout effect.
      scriptProps={hydrated ? { type: 'text/plain' } : undefined}
    >
      <ApplyThemeBeforePaint />
      {children}
    </NextThemesProvider>
  )
}

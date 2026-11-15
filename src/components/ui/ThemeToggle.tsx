'use client'

import { useTheme } from 'next-themes'
import { flushSync } from 'react-dom'
import { useIsHydrated } from '@/lib/use-is-hydrated'

export interface ThemeToggleProps {
  label: string
  darkModeLabel: string
}

export function ThemeToggle({ label, darkModeLabel }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme()
  const hydrated = useIsHydrated()
  const isDark = resolvedTheme === 'dark'

  function toggleTheme() {
    const nextTheme = isDark ? 'light' : 'dark'

    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTheme(nextTheme)
      return
    }

    document.startViewTransition(() => {
      flushSync(() => setTheme(nextTheme))
    })
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={darkModeLabel}
      aria-pressed={hydrated ? isDark : undefined}
      disabled={!hydrated}
      onClick={toggleTheme}
    >
      {label}
    </button>
  )
}

import 'server-only'
import type { MDXProps } from 'mdx/types'
import type { ComponentType } from 'react'
import { locales, type Locale, type Localized } from '@/lib/i18n'
import { notePath, type LocalizedPaths } from '@/lib/routes'

export interface NoteSummary {
  slug: string
  title: string
  description: string
  publishedAt: string
}

interface NoteVersion extends NoteSummary {
  load: () => Promise<{ default: ComponentType<MDXProps> }>
}

interface Note {
  id: string
  versions: Partial<Localized<NoteVersion>>
}

export const notes: readonly Note[] = [
  {
    id: 'file-buffers',
    versions: {
      pt: {
        slug: 'readfile-sem-codificacao',
        title: 'O que fs.readFile() devolve quando eu omito a codificação?',
        description: 'Do Buffer ao descritor de arquivo no Node.js.',
        publishedAt: '2026-11-15',
        load: () => import('../../content/notes/pt/readfile-sem-codificacao.mdx'),
      },
      en: {
        slug: 'readfile-without-encoding',
        title: 'What does fs.readFile() return if I omit the encoding?',
        description: 'From Buffer to file descriptors in Node.js.',
        publishedAt: '2026-11-15',
        load: () => import('../../content/notes/en/readfile-without-encoding.mdx'),
      },
    },
  },
  {
    id: 'tcp-backpressure',
    versions: {
      pt: {
        slug: 'backpressure-em-uploads-tcp',
        title: 'Quando a rede entrega dados mais rápido do que o disco consegue gravar',
        description: 'Como pause(), resume() e drain se encaixam em um upload por TCP.',
        publishedAt: '2026-11-15',
        load: () => import('../../content/notes/pt/backpressure-em-uploads-tcp.mdx'),
      },
      en: {
        slug: 'backpressure-in-tcp-uploads',
        title: 'When the network sends data faster than the disk can write',
        description: 'Where pause(), resume(), and drain fit in a TCP upload.',
        publishedAt: '2026-11-15',
        load: () => import('../../content/notes/en/backpressure-in-tcp-uploads.mdx'),
      },
    },
  },
]

export function listNotes(locale: Locale): NoteVersion[] {
  return notes.flatMap(({ versions }) => versions[locale] ?? [])
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export function getNote(locale: Locale, slug: string) {
  const entry = notes.find(({ versions }) => versions[locale]?.slug === slug)
  const note = entry?.versions[locale]
  return entry && note ? { note, paths: notePaths(entry) } : undefined
}

export function notePaths({ versions }: Note): LocalizedPaths {
  const paths: LocalizedPaths = {}
  for (const locale of locales) {
    const version = versions[locale]
    if (version) paths[locale] = notePath(locale, version.slug)
  }
  return paths
}

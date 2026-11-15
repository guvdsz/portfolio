import type { MetadataRoute } from 'next'
import { notes, notePaths } from '@/data/notes'
import { languageAlternates } from '@/lib/metadata'
import { homePaths, notesPaths, type LocalizedPaths } from '@/lib/routes'
import { siteUrl } from '@/lib/site'

function addVersions(paths: LocalizedPaths): MetadataRoute.Sitemap {
  const alternates = { languages: languageAlternates(paths) }
  return Object.values(alternates.languages).map((url) => ({ url, alternates }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl || siteUrl.hostname === 'localhost' || siteUrl.hostname.endsWith('.tmp.now')) return []

  return [
    ...addVersions(homePaths),
    ...addVersions(notesPaths),
    ...notes.flatMap((note) => addVersions(notePaths(note))),
  ]
}

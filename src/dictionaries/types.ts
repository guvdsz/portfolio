export type ParagraphPart = string | { text: string; href: string }

export interface Dictionary {
  navigation: {
    experience: string
    notes: string
    primary: string
    language: string
    theme: string
    darkMode: string
    skip: string
  }
  home: {
    title: string
    paragraphs: ParagraphPart[][]
    description: string
  }
  notes: {
    title: string
    description: string
    all: string
  }
  projects: {
    title: string
    empty: string
    back: string
  }
}

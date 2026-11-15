export type ParagraphPart = string | { text: string; href: string }

export interface Dictionary {
  navigation: {
    notes: string
    primary: string
    language: string
    darkMode: string
    skip: string
  }
  experience: {
    title: string
    current: string
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

import 'server-only'
import type { Localized } from '@/lib/i18n'

interface Role {
  start: string
  end?: string
  copy: Localized<{ title: string; description: string }>
}

export interface Employer {
  name: string
  roles: readonly Role[]
}

export const experience: readonly Employer[] = [
  {
    name: 'EloGroup',
    roles: [
      {
        start: '2026-10',
        copy: {
          pt: {
            title: 'Forward Deployed Engineer',
            description: 'Fiz a especificação técnica, desenvolvi funcionalidades e migrei dados na modernização do sistema de plano de saúde de uma instituição pública. Traduzi regras de um sistema com mais de uma década de operação em formulários, automações e integrações na plataforma SYDLE ONE.',
          },
          en: {
            title: 'Forward Deployed Engineer',
            description: 'I wrote technical specifications, implemented features, and migrated data to modernize a public institution’s health plan system. I translated rules from a system that had been in use for more than a decade into forms, automations, and integrations on SYDLE ONE.',
          },
        },
      },
      {
        start: '2026-05',
        end: '2026-10',
        copy: {
          pt: {
            title: 'Software Engineer I',
            description: 'Desenvolvi regras de negócio e integrações com serviços governamentais. Contribuí para a arquitetura e a implementação de uma plataforma interfederativa de atendimento digital ao contribuinte e conformidade fiscal no contexto da Reforma Tributária.',
          },
          en: {
            title: 'Software Engineer I',
            description: 'I implemented business rules and integrated government services. I contributed to the architecture and implementation of a platform serving taxpayers across levels of government and supporting compliance under Brazil’s consumption tax reform.',
          },
        },
      },
      {
        start: '2025-05',
        end: '2026-05',
        copy: {
          pt: {
            title: 'Estagiário em Engenharia de Software',
            description: 'Ajudei a especificar e desenvolver uma plataforma de planejamento estratégico para um órgão estatal, com métricas, objetivos, tarefas e acompanhamento de metas entre setores. Trabalhei com consultas em Elasticsearch e recebi dois reconhecimentos formais pelo desempenho nesse trabalho.',
          },
          en: {
            title: 'Software Engineering Intern',
            description: 'I helped specify and build a strategic planning platform for a government agency, with metrics, objectives, tasks, and progress tracking across departments. I worked with Elasticsearch queries and received two formal commendations for my work on the platform.',
          },
        },
      },
    ],
  },
  {
    name: 'PUC Minas',
    roles: [
      {
        start: '2024-10',
        end: '2025-11',
        copy: {
          pt: {
            title: 'Líder de semestre',
            description: 'Representei a turma junto aos professores e ajudei colegas com projetos e na adaptação ao curso.',
          },
          en: {
            title: 'Student Representative',
            description: 'I represented my cohort in discussions with instructors and helped classmates with projects and getting settled into the program.',
          },
        },
      },
      {
        start: '2025-03',
        end: '2025-05',
        copy: {
          pt: {
            title: 'Monitor de Desenvolvimento Front-End e Algoritmos',
            description: 'Orientei alunos em exercícios de HTML, CSS, JavaScript e lógica de programação.',
          },
          en: {
            title: 'Teaching Assistant, Front-End Development and Algorithms',
            description: 'I helped students work through exercises in HTML, CSS, JavaScript, and programming fundamentals.',
          },
        },
      },
    ],
  },
  {
    name: 'DYSCLOSE',
    roles: [
      {
        start: '2025-01',
        end: '2025-03',
        copy: {
          pt: {
            title: 'Desenvolvedor front-end freelancer, web e mobile',
            description: 'Trabalhei no desenvolvimento de um aplicativo web e mobile para uma startup canadense, usando React Native e Expo. Implementei autenticação, navegação e formulários e integrei o app à API do backend. Colaborei remotamente com uma equipe internacional e alinhei as demandas em inglês com o Product Owner.',
          },
          en: {
            title: 'Freelance Front-End Developer, Web and Mobile',
            description: 'I worked on a web and mobile app for a Canadian startup using React Native and Expo. I implemented authentication, navigation, and forms and integrated the app with its backend API. I collaborated remotely with an international team and discussed requirements with the Product Owner in English.',
          },
        },
      },
    ],
  },
]

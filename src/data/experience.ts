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
            description: 'Desenvolvo soluções em JavaScript na plataforma SYDLE ONE e levanto e refino requisitos diretamente com clientes. Implemento regras de negócio, formulários dinâmicos, automações BPM e integrações com APIs e serviços externos. Na modernização do sistema de plano de saúde de uma instituição pública, trabalho na especificação técnica, no desenvolvimento e na migração de dados de um legado com mais de dez anos de operação.',
          },
          en: {
            title: 'Forward Deployed Engineer',
            description: 'I build JavaScript solutions on SYDLE ONE and gather and refine requirements directly with clients. I implement business rules, dynamic forms, BPM automations, and integrations with external APIs and services. I work on technical specifications, development, and data migration to modernize a public institution’s health plan system, replacing a legacy system with over ten years of operation.',
          },
        },
      },
      {
        start: '2026-05',
        end: '2026-10',
        copy: {
          pt: {
            title: 'Software Engineer I',
            description: 'Desenvolvi back-end e regras de negócio em JavaScript na SYDLE ONE para sistemas do setor público nas áreas financeira, de saúde e de atendimento. Implementei validações, comportamentos orientados a eventos, scripts de automação e integrações com APIs governamentais. Atuei em uma plataforma interfederativa nacional de atendimento digital ao contribuinte e conformidade fiscal para os novos impostos sobre consumo da Reforma Tributária.',
          },
          en: {
            title: 'Software Engineer I',
            description: 'I developed back-end logic and business rules in JavaScript on SYDLE ONE for public-sector systems in finance, healthcare, and citizen services. I built validations, event-driven behaviors, automation scripts, and government API integrations. I worked on a nationwide intergovernmental platform for digital taxpayer services and compliance with Brazil’s new consumption taxes under the Tax Reform.',
          },
        },
      },
      {
        start: '2025-05',
        end: '2026-05',
        copy: {
          pt: {
            title: 'Estagiário em Engenharia de Software',
            description: 'Trabalhei com JavaScript, consultas avançadas e manipulação de dados em Elasticsearch, integrações de Web Services e scripts de automação. Participei do desenvolvimento de um sistema de planejamento estratégico para um órgão estatal, com métricas, objetivos, tarefas e metas, do levantamento de requisitos à homologação e ao treinamento de usuários. Recebi reconhecimentos formais de performance por conduta excepcional e amplitude de atuação.',
          },
          en: {
            title: 'Software Engineering Intern',
            description: 'I worked with JavaScript, advanced Elasticsearch queries and data manipulation, Web Service integrations, and automation scripts. I helped develop a strategic planning system for a state agency, covering metrics, objectives, tasks, and goals, from requirements gathering to user acceptance testing and end-user training. I received formal performance recognitions for exceptional conduct and breadth of contribution.',
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
            description: 'Atuei como ponte entre alunos e professores e ofereci apoio técnico e acadêmico aos colegas.',
          },
          en: {
            title: 'Student Representative',
            description: 'I served as a liaison between students and faculty and provided technical and academic support to classmates.',
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
            description: 'Desenvolvi um aplicativo mobile com suporte à web para uma startup canadense, usando TypeScript, React Native e Expo. Implementei autenticação, navegação, gerenciamento de estado e integração com a API backend. Criei formulários com React Hook Form e Yup e estilizei componentes com Tamagui e Styled Components. Colaborei com uma equipe internacional em reuniões diárias e de alinhamento em inglês com o Product Owner e outros stakeholders.',
          },
          en: {
            title: 'Freelance Front-End Developer, Web and Mobile',
            description: 'I built a mobile app with web support for a Canadian startup using TypeScript, React Native, and Expo. I implemented authentication, navigation, state management, and backend API integration. I built forms with React Hook Form and Yup and styled components with Tamagui and Styled Components. I collaborated with an international team in daily stand-ups and alignment meetings in English with the Product Owner and other stakeholders.',
          },
        },
      },
    ],
  },
]

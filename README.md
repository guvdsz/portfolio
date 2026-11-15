# Gustavo Viana

Portfólio em português e inglês com Next.js App Router, páginas estáticas e notas em MDX.

## Desenvolvimento

Use Node.js 24.

```sh
npm ci
npm run dev
```

Abra [localhost:3000](http://localhost:3000). A raiz redireciona para `/pt`.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Conteúdo

- `src/dictionaries` contém a apresentação e os rótulos de interface.
- `src/data/experience.ts` contém os cargos, as datas e os textos bilíngues.
- `content/notes/{pt,en}` contém as notas. Registre cada versão em `src/data/notes.ts` com um slug e uma data no formato `YYYY-MM-DD`. Traduções compartilham o mesmo registro, o que permite alternar entre os idiomas dentro de cada nota.

## Vercel

Importe o repositório com o preset Next.js e Node.js 24. Defina `SITE_URL` como a origem de produção, por exemplo `https://portfolio.example.com`. Sem essa variável, o build na Vercel usa o domínio de produção fornecido pela plataforma. A URL é usada nas canonicals, no `hreflang` e no sitemap.

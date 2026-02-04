
# Integrantes do Grupo 
| RM     | NOME                               | 
| ------------- | -------------------         | 
| RM362208      | Adriano Rabello             | 
| RM365052      | Francielli Manchini Tateo   | 
| RM364993      | Fábio Ivo Silva             | 
| RM365124      | Renato Magri Trevine        | 
| RM362550      | Rafael Gava Yokoyama        | 

	

	

# Website para Estudo de Vocabulário
 
Projeto front-end educacional para estudo e expansão de vocabulário em inglês. Consome uma API REST para exibir palavras, definições e exemplos de uso, com interface moderna, busca em tempo real e fallback para dados locais quando o serviço está indisponível. O foco está em boas práticas de arquitetura, organização de código, UX e preparação para deploy.
 
---
 
## 1. Visão Geral do Projeto
 
### Propósito
 
O projeto é uma **aplicação web de estudo de vocabulário** que permite ao usuário visualizar uma lista de palavras em inglês com definição e exemplo de uso, filtrar por termo de busca e atualizar os dados via botão de refresh. Foi pensado para quem está aprendendo ou revisando vocabulário e precisa de uma interface clara e responsiva.
 
### Público-alvo
 
- Estudantes de inglês que desejam ampliar o vocabulário
- Desenvolvedores que queiram referência de consumo de API no front-end com React + Vite
- Projetos educacionais que precisem de um exemplo de SPA com tratamento de loading, erro e fallback
 
### Problemas que resolve
 
- **Centralizar vocabulário**: exibir palavras, significados e exemplos em um único lugar
- **Busca rápida**: filtrar a lista por palavra ou descrição sem recarregar a página
- **Resiliência**: uso de dados de demonstração quando a API está fora do ar, mantendo a aplicação utilizável
- **Experiência consistente**: estados de loading, erro e lista vazia tratados de forma explícita na UI
 
---
 
## 2. Stack Utilizada
 
| Categoria     | Tecnologia          | Papel no projeto                                         |
| ------------- | ------------------- | -------------------------------------------------------- |
| **Front-end** | React 18            | Biblioteca UI e gerenciamento de estado                  |
| **Front-end** | TypeScript          | Tipagem estática (arquivos `.ts`/`.tsx`)                 |
| **Front-end** | Vite 6              | Build tool, dev server e bundling                        |
| **Front-end** | Tailwind CSS 4      | Estilização utilitária e tema                            |
| **Front-end** | Radix UI            | Componentes acessíveis (accordion, dialog, select, etc.) |
| **Front-end** | shadcn/ui (estilo)  | Componentes base (Button, Card, Input, etc.)             |
| **Front-end** | MUI (Material UI) 7 | Ícones e componentes complementares                      |
| **Front-end** | Emotion             | CSS-in-JS (com MUI)                                      |
| **Front-end** | Lucide React        | Ícones                                                   |
| **Front-end** | Sonner              | Notificações toast                                       |
| **Front-end** | React Hook Form     | Formulários (SearchBar e futuros forms)                  |
| **Infra**     | —                   | Apenas front-end; API externa (ex.: adrianorabello.com)  |
| **Testes**    | —                   | Não aplicável no estado atual do repositório             |
| **Outros**    | pnpm                | Gerenciador de pacotes (com overrides no `package.json`) |
 
---
 
## 3. Estrutura de Pastas
 
```
app-front-end-software-engineer/
├── guidelines/           # Diretrizes e regras para o projeto (design system, etc.)
│   └── Guidelines.md
├── src/
│   ├── app/
│   │   ├── App.tsx                 # Componente raiz: layout, estado global, fetch e filtro
│   │   └── components/
│   │       ├── figma/              # Componentes ligados ao design do Figma
│   │       │   └── ImageWithFallback.tsx
│   │       ├── ui/                 # Componentes de interface reutilizáveis (Header, SearchBar, Estados, shadcn)
│   │       │   ├── Header.tsx
│   │       │   ├── SearchBar.tsx
│   │       │   ├── States.tsx      # Loading, Error, Empty
│   │       │   └── ...             # accordion, button, card, dialog, etc.
│   │       └── vocabulary/         # Componentes do domínio “vocabulário”
│   │           ├── VocabularyCard.tsx
│   │           └── VocabularyList.tsx
│   ├── main.tsx                    # Entry point React (render do App)
│   ├── styles/                     # CSS global, tema e Tailwind
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   ├── theme.css
│   │   └── fonts.css
│   └── types.ts                    # Tipos globais (ex.: VocabularyItem)
├── index.html                      # HTML raiz e script do Vite
├── vite.config.ts                  # Configuração Vite, alias @, plugins (React, Tailwind)
├── postcss.config.mjs
├── package.json
├── .tool-versions                  # Versão do Node (ex.: 20.11.1)
├── .gitignore
└── README.md
```
 
### Responsabilidade das pastas
 
- **`src/app`**: lógica da aplicação e componentes da tela principal.
- **`src/app/components/ui`**: componentes genéricos de UI (header, barra de busca, estados, biblioteca de componentes).
- **`src/app/components/vocabulary`**: componentes específicos do domínio de vocabulário (card e lista).
- **`src/app/components/figma`**: componentes derivados do design no Figma.
- **`src/styles`**: estilos globais, variáveis de tema e configuração do Tailwind.
- **`guidelines`**: documentação de diretrizes e design system para o projeto.
 
---
 
## 4. Pré-requisitos
 
- **Node.js**: versão **20.x** (recomendado 20.11.1, conforme `.tool-versions`)
- **Gerenciador de pacotes**: **npm**, **yarn** ou **pnpm** (o projeto usa `pnpm` com overrides no `package.json`)
- **Git**: para clonar o repositório
 
Não é necessário banco de dados nem backend local; a aplicação consome uma API externa.
 
---
 
## 5. Como Rodar o Projeto Localmente
 
### Passo a passo
 
1. **Clonar o repositório**
 
   ```bash
   git clone <url-do-repositorio>
   cd app-front-end-software-engineer
   ```
 
2. **Instalar dependências**
 
   ```bash
   npm install
   # ou: yarn install | pnpm install
   ```
 
3. **Variáveis de ambiente (opcional)**
 
   Não é obrigatório para rodar. Se quiser apontar para outra API, crie um arquivo `.env` na raiz (veja seção 6).
 
4. **Iniciar o servidor de desenvolvimento**
 
   ```bash
   npm run dev
   # ou: yarn dev | pnpm dev
   ```
 
5. **Acessar no navegador**
 
   - URL local: **http://localhost:5173** (porta padrão do Vite; confirme no terminal caso seja diferente)

6. Endereço de ambiente de PRD

| AMBIENTE | URL|
| -------------- | ----------- |
| PRD BFF|`https://adrianorabello.com/ask`| 
| PRD APP|`https://app-front-end-software-engineer.onrender.com`| 


 
### Build para produção
 
```bash
npm run build
# ou: yarn build | pnpm build
```
 
A saída fica em `dist/`. Para pré-visualizar o build localmente:
 
```bash
npx vite preview
```
 
---
 
## 6. Variáveis de Ambiente
 
O projeto funciona **sem variáveis de ambiente**: a URL da API está definida no código. Para deixar configurável (por exemplo em deploy), você pode usar:
 
| Variável       | Obrigatória | Descrição                                                                                                       |
| -------------- | ----------- | --------------------------------------------------------------------------------------------------------------- |
| `VITE_API_URL` | Não         | URL base da API de vocabulário. Se não definida, usa o endpoint padrão (ex.: `https://adrianorabello.com/ask`). |

 
**Exemplo de `.env.example`** (opcional):
 
```env
# URL da API de vocabulário (opcional; há valor padrão no código)
VITE_API_URL=https://adrianorabello.com/ask
```
 
**Exemplo de `.env` local** (opcional):
 
```env
VITE_API_URL=https://sua-api.com/ask
```
 
No Vite, apenas variáveis com prefixo `VITE_` são expostas ao cliente. O código precisaria ser ajustado para ler `import.meta.env.VITE_API_URL` e usar como base da requisição.
 
---
 
## 7. Deploy / Hospedagem
 
### Como realizar o deploy
 
O projeto é uma **SPA estática** (HTML + JS + CSS gerados por `vite build`). Basta fazer o build e publicar a pasta `dist/` em qualquer serviço de hospedagem de arquivos estáticos.
 
### Plataformas recomendadas
 
- **Vercel**: integração nativa com Vite/React; deploy via Git ou CLI.
- **Netlify**: deploy por arrastar a pasta `dist/` ou conectando o repositório (build: `npm run build`, publish: `dist`).
- **Render** (Static Site): conectar o repo, comando de build `npm run build`, diretório público `dist`.
- **GitHub Pages**: usar `vite.config.ts` com `base: '/nome-do-repo/'` e publicar o conteúdo de `dist/`.
- **AWS (S3 + CloudFront)** ou **Cloudflare Pages**: upload de `dist/` ou pipeline CI/CD que rode `npm run build` e publique a saída.
 
### Passo a passo resumido (ex.: Vercel)
 
1. Conectar o repositório à Vercel.
2. Definir **Build Command**: `npm run build` (ou `pnpm run build`).
3. Definir **Output Directory**: `dist`.
4. (Opcional) Configurar variáveis de ambiente (ex.: `VITE_API_URL`) no painel.
5. Fazer deploy. A URL do projeto hospedado será exibida no painel (ex.: `https://seu-projeto.vercel.app`).
 
**URL do projeto hospedado**: não aplicável neste repositório; preencher quando houver um ambiente publicado.
 
---
 
## 8. Métricas e Boas Práticas
 
- **Performance**
 
  - Uso de Vite para build e HMR rápidos.
  - Filtro da lista feito no cliente com `useMemo` para evitar recálculos desnecessários.
  - Boa prática: lazy loading de rotas ou listas muito grandes quando o projeto crescer.
 
- **SEO**
 
  - SPA: conteúdo renderizado no cliente; para SEO avançado, considerar SSR (ex.: migrar para Next.js) ou pré-renderização.
  - Título e meta em `index.html` ajudam na identificação da página.
 
- **Acessibilidade (a11y)**
 
  - Uso de componentes Radix UI, que trazem suporte a teclado e ARIA.
  - Manter contraste, foco visível e labels em formulários (ex.: SearchBar).
 
- **Código**
 
  - TypeScript para tipagem e menos erros em tempo de desenvolvimento.
  - Componentes por domínio (`vocabulary`) e UI genérica (`ui`).
  - Estados de loading, erro e lista vazia tratados de forma explícita.
 
- **Observabilidade / monitoramento**
  - Não aplicável no estado atual; possível evolução: analytics, Sentry ou logs de erro em produção.
 
---
 
## 9. Possíveis Melhorias Futuras
 
- **Features**
 
  - Favoritar palavras e persistir em `localStorage` ou backend.
  - Modo escuro (já existe suporte a temas com `next-themes` no stack).
  - Filtros por nível (A1–C2) ou tags.
  - Áudio (pronúncia) por palavra.
  - PWA para uso offline com cache da API.
 
- **Refatorações**
 
  - Extrair a lógica de fetch para um hook `useVocabulary` ou camada de serviço.
  - Configurar `VITE_API_URL` e usar `import.meta.env` para a URL da API.
  - Adicionar testes (React Testing Library, Vitest) para componentes e fluxos principais.
 
- **Técnicas**
  - Migrar para Next.js se precisar de SSR/SSG para SEO.
  - Implementar cache (ex.: React Query/SWR) para a API de vocabulário.
  - Adicionar CI (lint, type-check, build) e preview de deploy em PRs.
 
---
 
## 10. Licença
 
Este projeto é de **cunho educacional**. O design original está disponível no Figma: [Website para estudo de vocabulário](https://www.figma.com/design/mEoqNLk6ok9IrxPzxOfsd7/Website-para-estudo-de-vocabul%C3%A1rio). Consulte `ATTRIBUTIONS.md` para créditos e licenças de recursos utilizados. Não há licença aberta formal; use como referência de estudo.

## 11. Métricas 

## 📄 Relatório em PDF

O relatório completo do trabalho, contendo a análise da aplicação, métricas de performance (Lighthouse) e informações de entrega, pode ser acedido no link abaixo:

🔗 [Relatório Final – Front-end Engineering (PDF)](metricas-lighthouse.pdf)


<img src=metricas/print-01.png>
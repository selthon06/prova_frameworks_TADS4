# RELATÓRIO DE TRANSPARÊNCIA E AUDITORIA DE IA GENERATIVA

## Identificação

- **Identificação da Questão:** Questão Prática Nº: 3
- **Estudante:** Selthon Leal
- **R.A.:** 046787
- **Ferramentas de IA Utilizadas:**
  - [ ] ChatGPT (usado apenas na etapa de preparação, para gerar o prompt principal a partir das imagens)
  - [ ] GitHub Copilot
  - [x] Claude
  - [x] Gemini (somente para transcrever a foto do enunciado em texto)
  - [ ] Outra: ____
- **Versão / Modelo Específico:** Claude: versão informada pelo estudante: 5.11492.5 Desktop; modelo identificado pela própria IA nesta conversa: Claude Sonnet 5.5 | Gemini: versão web, sem versão específica informada.

---

## Enunciado original

> Questão Prática 3: Dashboard Analítico Assíncrono com Streaming e React Suspense
> Localização do Arquivo: app/dashboard/page.js (com loading.js em app/dashboard/loading.js).
> Conceitos Avaliados: Server-side Data Fetching, renderização progressiva por Streaming, limites de React Suspense e componentes esqueleto (skeletons).
> Enunciado: Contexto e Requisitos de Implementação:
> Construa a página de Dashboard Analítico Acadêmico que consome e agrega dados de fontes com tempos de resposta substancialmente heterogêneos:
> 1. Arquitetura de Busca no Servidor: A página principal deve ser um Server Component assíncrono que renderiza dois cartões analíticos independentes: o Bloco A (Métricas Rápidas: alunos ativos, turmas, aprovação geral) com resolução simulada rápida de 500ms; e o Bloco B (Relatório Histórico de Evasão), simulando uma consulta demorada com atraso intencional de 3 segundos via Promise.
> 2. Streaming e Suspense Boundary: O Bloco A deve aparecer de forma instantânea para o usuário. O Bloco B deve ser isolado em um elemento <Suspense fallback={<SkeletonEvasao/>}>, permitindo que a interface seja visualizada em partes à medida que os dados são processados e transmitidos via streaming.
> 3. Transição Imediata com loading.js: Criar o arquivo loading.js para fornecer feedback de transição imediata no momento em que a rota /dashboard é requisitada.
> 4. Exigência de Documentação de IA: Apresentar no relatório de IA os prompts enviados para gerar a simulação assíncrona e detalhar como confirmou visualmente no navegador que a página não bloqueou a exibição do Bloco A durante a espera do Bloco B.
> Transcrito por Gemini — Foto enviada por Selthon


---

## 1. HISTÓRICO COMPLETO DE PROMPTS ENVIADOS À IA

**Prompt 0 (Gemini):** [PREENCHER — colar literalmente o prompt enviado ao Gemini com a foto das questões, pedindo a transcrição em texto]

**Prompt 1 (Claude):** prompt principal com as diretrizes do professor — transcrito literalmente em `PROMPT-INICIAL-E-TESTE-DO-MODELO.md` (raiz do projeto), seção 3.

**Prompt 2 (Claude):** mensagem ditada com as questões, o trecho de código do estudante e o pedido de documentação separada por questão (literal abaixo).

````text
[Anexo: documento de texto com as 5 questões práticas, transcrito pelo Gemini a partir da foto enviada por Selthon — reproduzido na seção "Enunciado original"]

import { useState } from 'react'; const cursos = [ { id: '1', titulo: 'Sistemas Web', carga: '80h', ementa: 'Desenvolvimento de aplicacoes web modernas.', requisitos: ['Algoritmos', 'HTML e CSS'] }, { id: '2', titulo: 'Banco de Dados', carga: '80h', ementa: 'Modelagem relacional e consultas SQL.', requisitos: ['Logica de Programacao'] }, { id: '3', titulo: 'Engenaria de Software', carga: '60h', ementa: 'Processos de desenvolvimento e requisitos.', requisitos: ['Algoritmos'] } ]; export default function CatalogoCursos({ params }) { const [aberto, setAberto] = useState(true); // Tentando pegar o curso pelo id const cursoAtual = cursos.find((c) => c.id == params.id);

Consegui fazer um pouco até aqui. Provavelmente tem algumas coisas erradas. Eu consegui fazer até assim alguns parâmetros assim que eu tô estudando na aula do Thiago. Foi bem difícil. Só esse tanto de códigozinho aqui foi uma luta para conseguir fazer. E acho que pelas questões, 2 dias não seria o suficiente para fazer à mão, entendeu? Eu ainda tive que usar um pouco, meio que ver um pouco do código do Thiago para conseguir fazer pelo menos esses códigos de ementa à mão. E o resto vai ser tudo com IA. Então, Claude, pode fazer cada um separado, igual tá pedindo cada questão. Como você pode ver, faça de forma separada. Eu vou mandar meu nome para você colocar. E o meu RA para você já adicionar. E cada um você coloca o que foi usado na IA, o que você usou, né? Como se pede lá no formulário lá do que o professor mandou. E coloque também esse texto aqui, se necessário, quando necessário, né, para as questões. No caso, a documentação de cada questão. Pode fazer a documentação separada de cada uma. Questão 1, aí a documentação da questão 1, questão 2, documentação da questão 2. Tudo certinho.

```markdown
- **Estudante:** Selthon Leal
- **R.A.:** 046787
```
````

*Prompt de refinamento/correção desta questão: ver seção 3.1.*

---

## Arquivos criados
`app/dashboard/page.js`, `app/dashboard/loading.js`, `app/dashboard/dados.js`, `app/dashboard/BlocoEvasao.js`, `app/dashboard/SkeletonEvasao.js`

## Requisitos identificados
1. Server Component assíncrono com Bloco A (500 ms) e Bloco B (3 s, via Promise).
2. Bloco B dentro de `<Suspense fallback={<SkeletonEvasao/>}>`.
3. `loading.js` na rota `/dashboard`.
4. Documentação de IA (simulação assíncrona e confirmação visual de que o Bloco A não foi bloqueado).

## 2. MAPEAMENTO DE AUTORIA NO CÓDIGO-FONTE

| Arquivo | Linhas | Autoria |
|---|---|---|
| `app/dashboard/page.js` | 1–31 | IA integral |
| `app/dashboard/loading.js` | 1–3 | IA integral |
| `app/dashboard/dados.js` | 1–18 | IA integral |
| `app/dashboard/BlocoEvasao.js` | 1–15 | IA integral |
| `app/dashboard/SkeletonEvasao.js` | 1–11 | IA integral |

- **Blocos gerados por IA e modificados pelo aluno:** nenhum registrado até agora.
- **Descrição das alterações manuais:** nenhuma registrada até agora.
- **Blocos de autoria 100% exclusiva do estudante:** nenhum nesta questão.

**Decisões da IA que o estudante deve conhecer:** `export const dynamic = "force-dynamic"` em `page.js` (para o streaming ser visível também em produção, `next build` + `next start`); os números do dashboard (420 alunos, 18 turmas, 87%) e os valores de evasão são **dados fictícios** para simulação; a página aguarda o Bloco A (500 ms) antes de renderizar e o `loading.js` cobre esse intervalo.

## 3. AUDITORIA E JUSTIFICATIVA TÉCNICA DO ESTUDANTE

A IA cometeu erros de compilação ou sugeriu APIs legadas (ex.: Pages Router em vez de App Router)?

- [x] Sim
- [ ] Não

Em caso afirmativo, qual foi o erro e como você o solucionou?

---
Sim. Ao abrir `/dashboard`, o Next retornou erro 500: `Route segment config "dynamic" is not compatible with nextConfig.cacheComponents` (`app/dashboard/page.js`, linha 7, `export const dynamic = "force-dynamic"`). Causa: *Cache Components* ligado por padrão. Solução: `cacheComponents: false` em `next.config.mjs` e reinício do servidor (seção 3.1). Não houve uso de API legada.

Como você validou que a solução gerada atende com rigor técnico aos requisitos do enunciado?

---
Testes executados no navegador:
- [x] Ao abrir `/dashboard` aparece "Carregando dashboard..." (`loading.js`) por cerca de 0,5 s. **Esperado:** feedback imediato. **Resultado:** conforme o esperado.
- [x] Em seguida aparece o Bloco A (alunos ativos 420, turmas 18, aprovação geral 87%) enquanto o Bloco B mostra o esqueleto cinza (`SkeletonEvasao`). **Esperado:** Bloco A visível sem esperar o B. **Resultado:** conforme o esperado.
- [x] Após cerca de 3 s o esqueleto é substituído pelo relatório de evasão, sem recarregar a página (streaming com `Suspense`). **Resultado:** conforme o esperado. Evidência: `GET /dashboard 200 in 3.5s` no log e print da tela final com os dois blocos.

Confirmação visual: o Bloco A foi exibido antes do término da espera de 3 s do Bloco B, portanto o Bloco B não bloqueou a exibição do A.

## 3.1 Erro registrado durante a execução

Ao abrir `/dashboard`, o terminal e o navegador mostraram erro 500 (`GET /dashboard 500`), apontando `app/dashboard/page.js` linha 7 (`export const dynamic = "force-dynamic";`):

```
Error: Route segment config "dynamic" is not compatible with `nextConfig.cacheComponents`. Please remove it.
```
Esse erro de compilação também derrubou outras rotas durante a sessão (`/ouvidoria` e `/portal` retornaram 500).

**Prompt de correção (literal; o log completo do terminal foi anexado à mensagem):**

> Tá, estaria agora dentro. Você poderia me falar se está dentro do que o professor pediu, ou está errado, falta mais alguma coisa para ficar certa? Porque aí você já pega, se você vai fazendo alguma coisa, você já atualiza e manda novamente e refaz novamente a documentação, falando o que que foi arrumado, qual erro deu, tudo certinho.

**Causa raiz (comum às questões 1, 3, 4 e 5):** o servidor foi iniciado com `Cache Components enabled` (visto no log). Com essa opção ligada, o Next 16 passa a exigir `<Suspense>` ao redor de dados de requisição e rejeita configurações de segmento como `dynamic`.

**Correção:** desligar o Cache Components em `next.config.mjs` (`cacheComponents: false`). Nenhuma linha do código das questões foi alterada.

**Verificação da correção:** Após reiniciar `npm run dev`, a linha `Cache Components enabled` deixou de aparecer e as rotas passaram a responder 200 (ver testes da seção 3).


---

## Ambiente de execução (reprodutibilidade)

- Projeto criado com: `npx create-next-app@latest meu-projeto --js --app --no-tailwind --no-src-dir --no-react-compiler --use-npm` (Next.js 16.4.6, App Router, JavaScript).
- Dependência adicional: `npm install server-only`.
- **Configuração necessária:** em `next.config.mjs`, `cacheComponents: false` (o create-next-app 16.4.6 liga o *Cache Components* por padrão quando a flag não é informada, e essa opção é incompatível com o código desta questão; ver seção 3.1).
- Código copiado de `projeto/app/` para `meu-projeto/app/`.

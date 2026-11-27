# RELATÓRIO DE TRANSPARÊNCIA E AUDITORIA DE IA GENERATIVA

## Identificação

- **Identificação da Questão:** Questão Prática Nº: 1
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

> Questão Prática 1: Catálogo Acadêmico com Layouts Aninhados e Prefetching
> Localização dos Arquivos: app/cursos/[id]/page.js (com layout aninhado em app/cursos/layout.js).
> Conceitos Avaliados: Segmentos dinâmicos de rotas ([id]), persistência de estado em layouts aninhados, Server Components e componente Link de navegação rápida.
> Enunciado: Contexto e Requisitos de Implementação:
> O estudante deve implementar a rota de Detalhes de Cursos do catálogo institucional do TADS, atendendo integralmente às seguintes especificações:
> 1. Layout Aninhado Compartilhado: O layout de /cursos deve conter uma barra lateral com links para três cursos pré-cadastrados (ID 1: Sistemas Web, ID 2: Banco de Dados, ID 3: Engenharia de Software) e um botão de alternância visual (modo expandido/recolhido) controlado por estado local (Client Component), demonstrando que o layout mantém seu estado ativo durante a transição entre cursos.
> 2. Página Dinâmica de Conteúdo: A página app/cursos/[id]/page.js deve ser um Server Component assíncrono. Ela deve aguardar e capturar a propriedade assíncrona params. Caso o ID informado na URL não exista no catálogo interno, a aplicação deve disparar obrigatoriamente a função notFound() do pacote next/navigation. Havendo o registro, deve renderizar título, carga horária, ementa descritiva e lista de pré-requisitos.
> 3. Navegação Otimizada: A transição entre cursos deve ser implementada com o componente <Link> utilizando prefetching ativo para navegação sem recarga de tela.
> 4. Exigência de Documentação de IA: Anexar o relatório informando os prompts fornecidos para gerar a captura de parâmetros assíncronos e como foi verificado o correto funcionamento do disparo da função notFound().
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

### Trecho original escrito pelo estudante (antes de qualquer alteração da IA)

```js
import { useState } from 'react'; const cursos = [ { id: '1', titulo: 'Sistemas Web', carga: '80h', ementa: 'Desenvolvimento de aplicacoes web modernas.', requisitos: ['Algoritmos', 'HTML e CSS'] }, { id: '2', titulo: 'Banco de Dados', carga: '80h', ementa: 'Modelagem relacional e consultas SQL.', requisitos: ['Logica de Programacao'] }, { id: '3', titulo: 'Engenaria de Software', carga: '60h', ementa: 'Processos de desenvolvimento e requisitos.', requisitos: ['Algoritmos'] } ]; export default function CatalogoCursos({ params }) { const [aberto, setAberto] = useState(true); // Tentando pegar o curso pelo id const cursoAtual = cursos.find((c) => c.id == params.id);
```

---

## Arquivos criados
`app/cursos/dados.js`, `app/cursos/Sidebar.js`, `app/cursos/layout.js`, `app/cursos/[id]/page.js`

## Requisitos identificados
1. Layout aninhado em `app/cursos/layout.js` com barra lateral (3 cursos) e botão expandir/recolher com estado local (Client Component).
2. `app/cursos/[id]/page.js` como Server Component assíncrono, com `await params`, `notFound()` para ID inexistente, e renderização de título, carga horária, ementa e pré-requisitos.
3. Links com `<Link>` e prefetching ativo.
4. Documentação de IA (prompts de `params` assíncrono e verificação do `notFound()`).

## 2. MAPEAMENTO DE AUTORIA NO CÓDIGO-FONTE

| Arquivo | Linhas | Autoria |
|---|---|---|
| `app/cursos/dados.js` | 1–27 | IA, a partir do array `cursos` escrito pelo estudante (modificado — ver abaixo) |
| `app/cursos/Sidebar.js` | 1–28 | IA integral |
| `app/cursos/layout.js` | 1–10 | IA integral |
| `app/cursos/[id]/page.js` | 1–28 | IA, a partir da ideia do estudante de usar `cursos.find` com o id da URL (modificado — ver abaixo) |

**Blocos de autoria do estudante que serviram de base:** o array `cursos` (ids, títulos, cargas horárias, ementas e pré-requisitos) e a busca `cursos.find((c) => c.id == params.id)`, ambos no trecho original acima.

**Descrição das alterações feitas pela IA sobre o trecho do estudante:**
- O array foi movido para `app/cursos/dados.js`, formatado em várias linhas e exportado; o título "Engenaria de Software" foi corrigido para "Engenharia de Software" (conforme o enunciado).
- A busca foi movida para a função `buscarCurso`, com comparação estrita (`===` em vez de `==`).
- No trecho original, `useState` estava importado em um componente de página (Server Component) sem `"use client"`; o estado do botão foi movido para `Sidebar.js` (Client Component).
- `params` passou a ser aguardado com `await params`, pois no App Router atual ele é assíncrono; a página foi marcada como `async`.
- O trecho original estava incompleto (sem `return`, sem `notFound()`, sem layout, sem `Link`); essas partes foram escritas pela IA.

**Blocos de autoria 100% exclusiva do estudante (sem modificação):** nenhum no código final; o trecho original foi reescrito/reorganizado pela IA, e só a base do conteúdo veio do estudante. [Se você alterar algum arquivo manualmente depois, registre aqui arquivo e linhas.]

**Observação de transparência (informada pelo estudante no Prompt 2):** o trecho original foi escrito com consulta ao código visto em aula.

## 3. AUDITORIA E JUSTIFICATIVA TÉCNICA DO ESTUDANTE

A IA cometeu erros de compilação ou sugeriu APIs legadas (ex.: Pages Router em vez de App Router)?

- [x] Sim
- [ ] Não

Em caso afirmativo, qual foi o erro e como você o solucionou?

---
Sim. Ao abrir `/cursos/1`, o Next 16.4.6 exibiu o erro `Route "/cursos/[id]": Next.js encountered runtime data during prerendering` apontando a linha `const { id } = await params;`. A causa foi o *Cache Components* ligado por padrão no `create-next-app`. Solução: `cacheComponents: false` em `next.config.mjs` e reinício do servidor (detalhes na seção 3.1). Não houve uso de API legada (Pages Router).

**Erros do trecho original do estudante identificados na revisão da IA:** falta de `"use client"` com `useState`, `params` usado de forma síncrona, trecho incompleto e erro de digitação "Engenaria".

Como você validou que a solução gerada atende com rigor técnico aos requisitos do enunciado?

---
Testes executados no navegador (`npm run dev`, `http://localhost:3000`):
- [x] `/cursos/1`, `/cursos/2` e `/cursos/3` exibem título, carga horária, ementa e pré-requisitos de cada curso. **Esperado:** dados de cada curso. **Resultado:** conforme o esperado. Evidência no log: `GET /cursos/1 200`, `GET /cursos/2 200`, `GET /cursos/3 200`.
- [x] `/cursos/99` mostra a página 404 (`notFound()` disparado). **Esperado:** 404. **Resultado:** conforme o esperado. Evidência no log: `GET /cursos/99 404`.
- [x] Ao recolher a barra lateral e clicar em outro curso, a barra continua recolhida (estado mantido pelo layout). **Esperado:** barra recolhida. **Resultado:** conforme o esperado.
- [x] Na aba Network, a navegação entre cursos não recarrega o documento HTML inteiro (`Link` com prefetching). **Esperado:** sem recarga completa. **Resultado:** conforme o esperado.

**Prompts de `params` assíncrono:** a captura de `params` com `await` foi gerada a partir do Prompt 2 acima; nenhum prompt específico adicional foi enviado.

## 3.1 Erro registrado durante a execução

Ao abrir `/cursos/1`, o terminal mostrou, para `app/cursos/[id]/page.js` (linha 5, `const { id } = await params;`):

```
Error: Route "/cursos/[id]": Next.js encountered runtime data during prerendering.
`cookies()`, `headers()`, `params`, or `searchParams` accessed outside of `<Suspense>` prevents the route from being prerendered...
```

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

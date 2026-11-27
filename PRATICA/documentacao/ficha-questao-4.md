# RELATÓRIO DE TRANSPARÊNCIA E AUDITORIA DE IA GENERATIVA

## Identificação

- **Identificação da Questão:** Questão Prática Nº: 4
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

> Questão Prática 4: Mural de Ouvidoria com Server Actions e Revalidação de Cache
> Localização do Arquivo: app/ouvidoria/page.js (com Server Action declarada no escopo do servidor).
> Conceitos Avaliados: Server Functions/Actions ("use server"), processamento de FormData, revalidação com revalidatePath e feedback de envio assíncrono.
> Enunciado: Contexto e Requisitos de Implementação:
> Desenvolva a página de Ouvidoria Acadêmica que recebe manifestações dos estudantes e atualiza o mural público em uma única rodada de rede:
> 1. Processamento Seguro com Server Action: Programar uma função assíncrona marcada com a diretiva "use server". A ação deve receber o FormData enviado pelo formulário, capturar os campos Nome, Tipo de Manifestação (Elogio, Sugestão, Reclamação) e Mensagem. Realizar validação no servidor: rejeitar mensagens com menos de 10 caracteres retornando um objeto estruturado de erro.
> 2. Revalidação Imediata do Cache: Sendo os dados válidos, a Server Action deve persistir a manifestação em um repositório simulado em memória e disparar imediatamente a função revalidatePath('/ouvidoria'), garantindo a atualização instantânea do mural.
> 3. Feedback de Processamento: O formulário deve fornecer feedback de carregamento no botão de submissão (desabilitando o botão e alterando o texto para 'Registrando manifestação...') enquanto a promessa estiver pendente.
> 4. Exigência de Documentação de IA: Registrar na ficha os prompts utilizados para conceber a Server Action e descrever a estratégia adotada para evitar o recarregamento clássico da página HTML durante o envio.
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
`app/ouvidoria/page.js`, `app/ouvidoria/actions.js`, `app/ouvidoria/FormOuvidoria.js`, `app/ouvidoria/repositorio.js`

## Requisitos identificados
1. Server Action (`"use server"`) que recebe `FormData` (Nome, Tipo, Mensagem) e rejeita mensagem com menos de 10 caracteres retornando objeto de erro.
2. Persistência em repositório simulado em memória e `revalidatePath('/ouvidoria')`.
3. Botão desabilitado com o texto "Registrando manifestação..." enquanto a promessa está pendente.
4. Documentação de IA (concepção da Server Action e estratégia contra recarregamento clássico).

## 2. MAPEAMENTO DE AUTORIA NO CÓDIGO-FONTE

| Arquivo | Linhas | Autoria |
|---|---|---|
| `app/ouvidoria/page.js` | 1–29 | IA integral |
| `app/ouvidoria/actions.js` | 1–32 | IA integral |
| `app/ouvidoria/FormOuvidoria.js` | 1–64 | IA integral |
| `app/ouvidoria/repositorio.js` | 1–10 | IA integral |

- **Blocos gerados por IA e modificados pelo aluno:** nenhum registrado até agora.
- **Descrição das alterações manuais:** nenhuma registrada até agora.
- **Blocos de autoria 100% exclusiva do estudante:** nenhum nesta questão.

**Decisões da IA que o estudante deve conhecer:** a Server Action está em arquivo próprio (`actions.js`, com `"use server"` no topo); o formulário é um Client Component pequeno (`FormOuvidoria.js`) porque usa `useActionState` e `useFormStatus` (React 19 / Next 15+); a ação tem uma pausa artificial de 1 s (`setTimeout`) **apenas para ser possível ver** o texto "Registrando manifestação..."; o repositório em memória zera quando o servidor reinicia; se a validação falhar, os valores digitados voltam ao formulário.

**Estratégia contra o recarregamento clássico:** o formulário usa `action={formAction}` (Server Action via `useActionState`) em vez de `action="/url"` com POST tradicional; o React envia a requisição por fetch e atualiza apenas a parte da tela que mudou (o mural, via `revalidatePath`), sem recarregar o documento HTML.

## 3. AUDITORIA E JUSTIFICATIVA TÉCNICA DO ESTUDANTE

A IA cometeu erros de compilação ou sugeriu APIs legadas (ex.: Pages Router em vez de App Router)?

- [ ] Sim
- [x] Não

Em caso afirmativo, qual foi o erro e como você o solucionou?

---
Não houve erro de compilação nem uso de API legada nesta questão. Houve um erro 500 na rota (`GET /ouvidoria 500`) durante a sessão em que o `cacheComponents` estava ligado, causado pelo erro de compilação de `app/dashboard/page.js` (seção 3.1); a rota não tinha erro próprio.

Como você validou que a solução gerada atende com rigor técnico aos requisitos do enunciado?

---
Testes executados no navegador:
- [x] Mensagem com menos de 10 caracteres: a Server Action devolve o erro e nada entra no mural. **Esperado:** `{"erro":"A mensagem deve ter no mínimo 10 caracteres.", ...}`. **Resultado:** conforme o esperado. Evidência no log: `POST /ouvidoria 200` com `registrarManifestacao({"erro":"A mensagem deve ter no mínimo 10 caracteres.",...})`.
- [x] Mensagem válida: durante cerca de 1 s o botão fica desabilitado com "Registrando manifestação..." e depois a manifestação aparece no mural. **Esperado:** mural atualizado via `revalidatePath('/ouvidoria')`. **Resultado:** conforme o esperado. Evidência: `POST /ouvidoria 200 in 1.0s` (`"sucesso":true`) e print do mural com a manifestação registrada.
- [x] Durante o envio não há navegação de página inteira (Network). **Resultado:** conforme o esperado.

**Estratégia contra o recarregamento clássico:** o formulário usa `action={formAction}` com `useActionState` (Server Action), em vez de um POST tradicional de formulário HTML.

## 3.1 Erro registrado durante a execução

Ao abrir `/ouvidoria`, o terminal mostrou `GET /ouvidoria 500`. O log da mesma sessão aponta o erro de compilação de `app/dashboard/page.js` (`dynamic` incompatível com `cacheComponents`). Após a correção, a rota passou a funcionar normalmente.

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

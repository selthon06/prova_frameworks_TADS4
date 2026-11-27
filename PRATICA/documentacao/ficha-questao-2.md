# RELATÓRIO DE TRANSPARÊNCIA E AUDITORIA DE IA GENERATIVA

## Identificação

- **Identificação da Questão:** Questão Prática Nº: 2
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

> Questão Prática 2: Painel Interativo de Gestão de Projetos
> Localização do Arquivo: app/projetos/page.js.
> Conceitos Avaliados: Client Components ("use client"), reatividade com useState, sincronização com useEffect, otimização com useMemo e acessibilidade WAI-ARIA WCAG.
> Enunciado: Contexto e Requisitos de Implementação:
> Desenvolva um painel completo para monitoramento e cadastro dos Projetos Integradores do curso de ADS, executado inteiramente no navegador:
> 1. Formulário Controlado com Validação Acessível: Construir um formulário controlado via useState com campos: Nome do Projeto (mínimo 5 caracteres), Área Temática (Select: Frontend, Backend, Mobile, DevOps) e Prazo de Conclusão. Em tempo real, se o nome possuir menos de 5 caracteres, a interface deve exibir borda de alerta, aplicar aria-invalid="true" e vincular o texto de erro descritivo através de aria-describedby.
> 2. Filtragem Reativa Otimizada: A página deve exibir uma lista de projetos cadastrados com filtros por texto de busca e por Área Temática. A computação da filtragem deve ser obrigatoriamente envolvida no hook useMemo para evitar re-execuções pesadas durante digitações no formulário.
> 3. Persistência de Dados: Utilizar o hook useEffect para carregar e salvar os projetos no localStorage do navegador, garantindo a permanência dos dados após recargas manuais de página.
> 4. Exigência de Documentação de IA: O estudante deve documentar os prompts usados para estruturar as validações de acessibilidade e explicar como depurou a dependência correta do array do useMemo.
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

*Nenhum prompt adicional de refinamento foi enviado para esta questão.*

---

## Arquivos criados
`app/projetos/page.js`

## Requisitos identificados
1. Formulário controlado (useState): Nome (mín. 5), Área (select) e Prazo; erro em tempo real com borda de alerta, `aria-invalid="true"` e `aria-describedby`.
2. Lista com filtros por texto e por área, com a filtragem dentro de `useMemo`.
3. Persistência em `localStorage` com `useEffect` (carregar e salvar).
4. Documentação de IA (validações de acessibilidade e dependências do `useMemo`).

## 2. MAPEAMENTO DE AUTORIA NO CÓDIGO-FONTE

| Arquivo | Linhas | Autoria |
|---|---|---|
| `app/projetos/page.js` | 1–156 | IA integral |

- **Blocos gerados por IA e modificados pelo aluno:** nenhum registrado até agora.
- **Descrição das alterações manuais:** nenhuma registrada até agora.
- **Blocos de autoria 100% exclusiva do estudante:** nenhum nesta questão (todo o código foi gerado pela IA). [Se você alterar algo, registrar arquivo e linhas.]

**Decisões da IA que o estudante deve conhecer:** o campo Prazo é `required`/obrigatório para habilitar o botão (decisão da IA, não está explícito no enunciado); a mensagem de erro só aparece depois que o usuário começa a digitar o nome; `useEffect` de gravação só roda após o carregamento inicial (flag `carregado`) para não sobrescrever os dados salvos com uma lista vazia.

## 3. AUDITORIA E JUSTIFICATIVA TÉCNICA DO ESTUDANTE

A IA cometeu erros de compilação ou sugeriu APIs legadas (ex.: Pages Router em vez de App Router)?

- [ ] Sim
- [x] Não

Em caso afirmativo, qual foi o erro e como você o solucionou?

---
Não houve erro de compilação nem uso de API legada nesta questão. (Na mesma sessão em que o `cacheComponents` estava ligado, a rota `/projetos` respondeu normalmente: `GET /projetos 200`.)

Como você validou que a solução gerada atende com rigor técnico aos requisitos do enunciado?

---
Testes executados no navegador:
- [x] Nome com 1 a 4 caracteres: borda vermelha e mensagem de erro; botão desabilitado. **Esperado:** alerta visual. **Resultado:** conforme o esperado.
- [x] DevTools > Elements no campo nome: `aria-invalid="true"` e `aria-describedby="erro-nome"` presentes quando o nome é inválido. **Resultado:** conforme o esperado.
- [x] Cadastro de projetos (nome com 5+ caracteres, área e prazo): o projeto aparece na lista. **Resultado:** conforme o esperado.
- [x] Busca por texto e filtro por área filtram a lista. **Resultado:** conforme o esperado.
- [x] Persistência: após F5, os projetos continuam (Application > Local Storage, chave `projetos-integradores`). **Resultado:** conforme o esperado.

**Dependências do `useMemo`:** a filtragem está dentro de `useMemo` com o array `[projetos, busca, filtroArea]`, isto é, todos os valores lidos dentro da função (lista, texto de busca e filtro de área). Digitar no formulário (`nome`, `area`, `prazo`) não altera essas dependências, então a filtragem não é recalculada a cada tecla. [PREENCHER somente se você fez o teste de remover `filtroArea` do array e observou que a lista deixava de atualizar ao trocar a área; caso contrário, apague esta linha.]


---

## Ambiente de execução (reprodutibilidade)

- Projeto criado com: `npx create-next-app@latest meu-projeto --js --app --no-tailwind --no-src-dir --no-react-compiler --use-npm` (Next.js 16.4.6, App Router, JavaScript).
- Dependência adicional: `npm install server-only`.
- **Configuração necessária:** em `next.config.mjs`, `cacheComponents: false` (o create-next-app 16.4.6 liga o *Cache Components* por padrão quando a flag não é informada, e essa opção é incompatível com o código desta questão; ver seção 3.1).
- Código copiado de `projeto/app/` para `meu-projeto/app/`.

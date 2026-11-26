# Prompt inicial enviado à IA e teste do modelo de documentação

**Estudante:** Selthon Leal | **R.A.:** 046787

## 1. Objetivo deste documento
Registrar o prompt que o estudante enviou à IA (Claude) para que ela conhecesse todas as diretrizes do professor, e testar se a IA preenche corretamente o modelo **"Relatório de Transparência e Auditoria de IA Generativa"** exigido.

## 2. Como o prompt foi obtido
O estudante fotografou as 3 imagens com as instruções do professor e enviou ao **ChatGPT**, pedindo que ele organizasse tudo em um prompt para ser enviado ao **Claude**. O resultado (abaixo) foi enviado ao Claude como arquivo de texto.

## 3. Prompt enviado (literal)

````text
PROMPT PRINCIPAL — AVALIAÇÃO TEÓRICO-PRÁTICA DE FRAMEWORKS FRONT-END (IFMS)

Você será meu assistente de desenvolvimento durante a avaliação da unidade curricular Frameworks Front-End, do curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas do Instituto Federal de Mato Grosso do Sul (IFMS), Campus Três Lagoas.

Sua função será me auxiliar na resolução das questões teóricas e práticas, utilizando Next.js, respeitando rigorosamente todas as instruções do professor descritas abaixo.

1. INSTRUÇÕES GERAIS E PROTOCOLO DE AVALIAÇÃO

1.1. Estrutura da avaliação

A prova é composta por duas seções complementares:

- Parte I: possui 5 questões objetivas de múltipla escolha (alternativas A, B, C, D), com resposta única.
- Parte II: é composta por 5 questões práticas de desenvolvimento de páginas completas utilizando o framework Next.js.

1.2. Entrega do ambiente prático

Cada questão prática deve ser desenvolvida como uma rota funcional e completa dentro da arquitetura do App Router (pasta "app/").

O projeto deve ser entregue estruturado em repositório Git ou arquivo compactado, conforme orientações do docente.

1.3. Diretriz obrigatória sobre o uso de IA generativa

O uso de assistentes de Inteligência Artificial (ex.: ChatGPT, GitHub Copilot, Gemini, Claude) é expressamente permitido, porém submetido ao regime de transparência total e reprodutibilidade técnica.

Para cada uma das 5 questões práticas, o estudante deve anexar obrigatoriamente a Ficha de Documentação de Uso de IA preenchida com:

- A transcrição literal dos prompts.
- A indicação precisa das linhas de código geradas pela IA versus implementadas manualmente.

1.4. Critério de validação

Resoluções práticas que não apresentarem a documentação de IA correspondente ou cujas soluções não puderem ser reproduzidas pelo docente a partir dos prompts fornecidos terão a pontuação da respectiva questão zerada.

2. REQUISITOS TÉCNICOS DA QUESTÃO PRÁTICA APRESENTADA

A questão apresenta os seguintes quatro requisitos obrigatórios:

2.1. Contexto Global de Acessibilidade

Criar o arquivo "app/providers.js" marcado com ""use client"" contendo um "AcessibilidadeContext".

O contexto deve armazenar o estado de:

- Alto Contraste (ativo/inativo).
- Tamanho da Fonte (Normal/Ampliada).

Deve oferecer botões de alternância.

O provider deve encapsular a aplicação através da propriedade "children", para não transformar os componentes filhos em Client Components.

2.2. Proteção Estrita contra Vazamento (server-only)

A página "app/portal/page.js" deve ser um Server Component que consulta dados confidenciais de comunicados internos.

A função de leitura de dados deve residir em um módulo de serviço protegido obrigatoriamente por "import 'server-only';", assegurando que o código nunca seja empacotado para o cliente.

2.3. Composição de Interface

A tela deve renderizar:

- No topo, a barra de ferramentas de acessibilidade consumindo o contexto.
- Abaixo, o mural de avisos gerado diretamente no servidor.

2.4. Exigência de Documentação de IA

Documentar os prompts aplicados para resolver o aninhamento de Server Components dentro de Providers e demonstrar como foi comprovada a barreira de segurança imposta pelo pacote "server-only".

3. REGRAS OBRIGATÓRIAS DE DESENVOLVIMENTO

Ao desenvolver a questão, respeite os seguintes critérios:

1. Utilize Next.js com a arquitetura App Router ("app/").
2. Crie todas as rotas e arquivos necessários para o funcionamento da solução.
3. Mantenha a separação correta entre Server Components e Client Components.
4. Não transforme desnecessariamente componentes do servidor em componentes do cliente.
5. Utilize "import 'server-only';" no módulo que consulta os dados confidenciais.
6. Preserve a segurança dos dados internos, sem expor informações confidenciais ao navegador.
7. Utilize Context API para controlar as configurações globais de acessibilidade.
8. Utilize a propriedade "children" no Provider para encapsular a aplicação.
9. A interface deve apresentar a barra de acessibilidade na parte superior e o mural de avisos abaixo.
10. A solução deve ser funcional, organizada e reproduzível pelo professor.

4. MODELO OBRIGATÓRIO: FICHA DE DOCUMENTAÇÃO DE USO DE IA

Uma via deste relatório deve ser preenchida e entregue para cada uma das 5 questões práticas desenvolvidas pelo estudante.

O documento exigido pelo professor possui a seguinte estrutura:

RELATÓRIO DE TRANSPARÊNCIA E AUDITORIA DE IA GENERATIVA

Identificação

- Identificação da Questão: Questão Prática Nº: [ ]

- Estudante: [Nome do estudante]

- R.A.: [Registro Acadêmico]

- Ferramentas de IA Utilizadas:
  
  - [ ] ChatGPT
  - [ ] GitHub Copilot
  - [ ] Claude
  - [ ] Gemini
  - [ ] Outra: ____

- Versão / Modelo Específico: __________

1. HISTÓRICO COMPLETO DE PROMPTS ENVIADOS À IA

Transcrever de forma literal e cronológica todos os comandos executados.

Prompt 1:

[Registrar o primeiro prompt exatamente como foi enviado.]

Prompt 2:

[Registrar o segundo prompt exatamente como foi enviado.]

Prompt 3 (refinamento/correção):

[Registrar o prompt utilizado para corrigir, refinar ou ajustar a solução.]

Caso sejam utilizados mais prompts, registrar todos na ordem em que foram enviados. Não inventar prompts que não foram utilizados.

2. MAPEAMENTO DE AUTORIA NO CÓDIGO-FONTE

Blocos gerados integralmente pela IA:

Linhas __ a __ do arquivo __________.

Blocos gerados por IA e modificados pelo aluno:

Linhas __ a __ do arquivo __________.

Descrição das alterações manuais:

---

Blocos de autoria 100% exclusiva do estudante:

Linhas __ a __ do arquivo __________.

Se não houver código escrito integralmente pelo estudante, registrar isso com transparência.

3. AUDITORIA E JUSTIFICATIVA TÉCNICA DO ESTUDANTE

A IA cometeu erros de compilação ou sugeriu APIs legadas (ex.: Pages Router em vez de App Router)?

- [ ] Sim
- [ ] Não

Em caso afirmativo, qual foi o erro e como você o solucionou?

---

Como você validou que a solução gerada atende com rigor técnico aos requisitos do enunciado?

---

5. COMO VOCÊ DEVE TRABALHAR COMIGO

Siga estas orientações durante toda a avaliação:

1. Leia atentamente cada questão antes de começar a desenvolver.
2. Identifique todos os requisitos obrigatórios do enunciado.
3. Desenvolva a solução utilizando os recursos corretos do Next.js.
4. Prefira códigos simples, objetivos e organizados, sem complexidade desnecessária.
5. Apresente os nomes e caminhos de todos os arquivos que precisam ser criados.
6. Forneça os códigos completos, prontos para copiar e colar.
7. Explique brevemente a finalidade de cada arquivo e componente.
8. Informe como executar e testar a solução.
9. Verifique se a implementação atende a todos os requisitos antes de considerá-la concluída.
10. Registre os prompts utilizados durante o desenvolvimento para preencher a ficha obrigatória.
11. Identifique as linhas de código geradas pela IA e as alterações realmente realizadas manualmente.
12. Nunca invente linhas de código, prompts, testes ou alterações manuais.
13. Se houver algum erro, registre o problema, a correção e o prompt utilizado.
14. Não considere uma questão concluída enquanto houver requisitos obrigatórios sem verificação.

6. ORGANIZAÇÃO DA DOCUMENTAÇÃO

Para cada questão prática, mantenha um registro individual contendo:

- Número da questão.
- Enunciado original.
- Requisitos identificados.
- Prompts utilizados em ordem cronológica.
- Arquivos criados.
- Código gerado pela IA.
- Alterações realizadas manualmente.
- Testes executados.
- Erros encontrados e respectivas correções.
- Ficha de auditoria de IA preenchida.

Cada uma das cinco questões práticas deverá ter sua própria ficha de documentação.

7. ORIENTAÇÃO FINAL

O professor permite expressamente o uso de Inteligência Artificial, mas exige transparência total e possibilidade de reprodução técnica.

Portanto, não existe necessidade de ocultar o uso da IA ou inventar participação manual.

Meu objetivo é entregar soluções funcionais, tecnicamente corretas, organizadas e acompanhadas de documentação fiel ao processo de desenvolvimento.

IMPORTANTE: Sempre priorize os requisitos específicos de cada enunciado. Não invente funcionalidades que não foram solicitadas. Se alguma informação estiver faltando, pergunte antes de assumir. Mantenha a documentação atualizada durante todo o desenvolvimento.

Aguarde o envio da primeira questão para começarmos.
````

## 4. Teste: a IA preenche o modelo do professor corretamente?

Este teste cobre apenas a **fase de preparação** (envio das diretrizes e criação dos documentos), antes de qualquer questão prática. O modelo abaixo foi preenchido com os fatos desta etapa.

---

### RELATÓRIO DE TRANSPARÊNCIA E AUDITORIA DE IA GENERATIVA

**Identificação**

- **Identificação da Questão:** Questão Prática Nº: — (fase de preparação; nenhuma questão prática resolvida ainda)
- **Estudante:** Celton [SOBRENOME]
- **R.A.:** [RA]
- **Ferramentas de IA Utilizadas:**
  - [x] ChatGPT (somente para transformar as 3 imagens do enunciado em um prompt)
  - [ ] GitHub Copilot
  - [x] Claude
  - [ ] Gemini
  - [ ] Outra: ____
- **Versão / Modelo Específico:** ChatGPT: GPT-6 | Claude: 5.11492.5 Desktop

**1. HISTÓRICO COMPLETO DE PROMPTS ENVIADOS À IA**

**Prompt 1:** o prompt principal da seção 3 deste documento (texto literal acima), enviado ao Claude como arquivo.

**Prompt 2** (mensagem ditada, enviada junto com o Prompt 1):

> Vou te mandar as instruções a seguir. Já comece já com essas instruções, montando, né, o que o professor pede. O primeiro terminal será esse. Eu vou te enviar, então, vou mandar que eu mandei todas essas diretrizes para você, né? Já fazer já um modelo resumo de todas essas diretrizes que eu mandei para você. Vou te colocar aqui também meu RA, né, para você, tudo certinho, o que se pede. E é isso. A nota teórica e a nota prática e a nota final não precisa colocar, o professor coloca isso, tá bom?
>
> E outra coisa, seguindo essas prompt advice, eu pensei em fazer o seguinte: colocar um ponto .md, e nesse ponto .md eu vou colocar a foto. Não, eu vou colocar todos os 5 códigos, os 6, né, no caso, que vai ser esse, né, que é o primeiro da direita, esse que eu vou mandar para você. Aí eu vou colocar os outros 5, que são de código, apenas código, e no ponto .md, explicar tudo certinho. Cada um com suas diretrizes, né.
>
> A imagem aqui, que eu usei para, como é que fala? Para digitalizar as diretrizes, né, que o professor pediu, e o que o professor manda, eu usei o GPT, eu enviei as 3 imagens para ele e pedi para ele fazer o prompt e mandar para o Claude. Pode ir anotando aí. Esse é o primeiro, né? Seria a primeira. Os outros 5 serão só de exercícios, para mim já colocar na ponta MD. Aí separa tudo certinho. Se tiver algum jeito de separar esses coisas em um ponto MD como se fosse prompts, seria muito bom. Aí eu vou criar um arquivo, ou você mesmo pode abrir o VS Code, criar um arquivo e já ir fazendo os .md, certo? Você tem qualquer permissão necessária para fazer isso. Você tem todas as permissões necessárias, né? Se não tiver, só me mandar que eu clico aqui para permitir, certo? Não precisa enviar nada para o GitHub agora. Pode achar que eu envio certinho. Vamos só fazer os exercícios. Você vai apenas me auxiliar nos exercícios. Os que eu não souber fazer, vou passar para você. Você faz toda a documentação certinho. As questões de Mark X eu vou fazer. Não preciso de IA, porque tá bem fácil.

**Prompt 3 (refinamento/correção):**

> Uma pergunta: por que você criou esses outros arquivos? Pra mim, eu tinha olhado pra você que precisava só da documentação, né? Eu acho. Esse barra ponto acessibilidade o professor que pediu, comunicados, global, CSS, layout, page e providers. O professor acho que não pediu isso, pediu? Eu queria só que, tipo assim, eu vou te mandar os exercícios. Esse é o que o professor pede na prova dele, né? É o que o professor vai pedir na prova dele, você só... Eu vou te mandando os exercícios e você vai... Depois que fizer os exercícios, né? Depois que... Como o que eu fizer manual e você fizer com IA, você vai colocar o que eu fiz manual, o que você fez com IA e vai fazer a documentação com o modelo que o professor pede, né? O modelo lá que eu te mandei, eu acho que o modelo é o último. Eu te mandei no prompt. O modelo que o professor pede é o último.

**Prompt 4:**

> Tá, eu abri o VS Code. Se você quiser criar um ponto .md com a documentação, tipo assim, o que eu mandei para IA sobre documentação. Aí você vai, no caso, o prompt que eu te mandei, você vai pegar e vai falar, ó, o Celton, né, no caso eu mandei esse prompt para IA, para ela pegar e já ter as diretrizes que o professor pediu. E também um teste para ver se ela vai fazer certinho o modelo que o professor pediu lá. O modelo lá que ele tinha pedido de prompt 1 e 2, né? Relatório de transparência e auditoria da IA generativa. No caso, relatório de transparência e auditoria de IA generativa, que eu mandei para você.

**2. MAPEAMENTO DE AUTORIA NO CÓDIGO-FONTE**

- **Blocos gerados integralmente pela IA:** nenhum código válido nesta fase. Em resposta ao Prompt 2 a IA gerou, sem ter sido pedido, os arquivos da pasta `questao-1/` (ver seção 3). **Esses arquivos não fazem parte da entrega**, a menos que o estudante decida usá-los e registre isso.
- **Blocos gerados por IA e modificados pelo aluno:** nenhum.
- **Descrição das alterações manuais:** nenhuma.
- **Blocos de autoria 100% exclusiva do estudante:** nenhum código nesta fase.

**3. AUDITORIA E JUSTIFICATIVA TÉCNICA DO ESTUDANTE**

A IA cometeu erros de compilação ou sugeriu APIs legadas?

- [ ] Sim
- [x] Não — não houve erro de compilação nem API legada. Houve, porém, um **erro de escopo**, descrito abaixo.

**Erro encontrado e correção:** em resposta ao Prompt 2, a IA interpretou o requisito 2 do prompt como a primeira questão e gerou código não solicitado (`app/providers.js`, `app/layout.js`, `app/globals.css`, `app/components/BarraAcessibilidade.js`, `app/services/comunicados.js`, `app/portal/page.js`), além de arquivos de documentação. O estudante questionou isso no Prompt 3. A IA reconheceu o erro e passou a trabalhar apenas sob demanda. Esse código não foi executado nem testado.

**Como o estudante validou que o modelo foi preenchido com rigor?** Conferindo, item a item, a estrutura acima contra o modelo da seção 4 do prompt (Identificação, Prompts, Autoria, Auditoria) e se os prompts 2 a 4 foram transcritos literalmente. Preenchimento pendente do estudante: R.A., sobrenome e versões dos modelos.

---

## 5. Resultado do teste
| Item do modelo do professor | Presente? |
|---|---|
| Identificação (questão, estudante, R.A., ferramentas, versão) | Sim (R.A., sobrenome e versões a preencher) |
| 1. Histórico de prompts literal e cronológico | Sim |
| 2. Mapeamento de autoria (IA / IA + aluno / aluno) | Sim |
| 3. Auditoria (erros da IA, validação) | Sim |
| Sem inventar prompts, testes ou alterações manuais | Sim — nada marcado como testado ou alterado manualmente |

# Projeto Valorant Informations

> Link do site: https://guilhermefranciscopereira.github.io/Valorant-Informations/

## Prints das telas da aba de agentes no fim deste readMe!

> Commit do dia: 30/07/2024 - 18:02

## Alterações deste commit: 
- Criação das pastas: (contexts / hooks / services).
Contexts: criei para termos os dados que desejamos podendo serem compartilhados com qualquer parte do código. Neste commit para o nome do agente. (para compartilhar o agente tanto quanto clica na foto quanto quando digitar)
Hooks: pasta para trabalharmos com os hooks da nossa aplicação, nele criei a pasta agents e fiz por lá todo o código necessário deste commit.
Services: somente para criarmos o query client que é necessário no provider do nosso react-query.

- Dependencias instaladas: react-query, axios, react-hook-form, zod e hookform/resolvers 
React-query e axios para realizar a chamada GET da nossa api de agentes, o react-hook-form para trabalhar com o nosso form, o zod para validação/transformação. (Mas nesse caso usei ele pouco) e o hookform resolvers para fazer a integração do hook form com o zod.

- Alterações na pasta pages > Agents, criei o nosso module.css e adicionei a estrutura da aba Agentes do site. 

- adicionei o provider tanto do react-query quanto do context dentro do App.tsx

- Pequenas mudanças no globalStyles, apenas adicionei uma alteração no scroolbar do site

## Prints das telas da aba de agentes (pc / mobile):

### Tela de início da seção de agentes
![Foto da seção de Agentes - Primeira versão (PC - Home Page)](./src/assets/agentPage%20-firstVersion%20-%20(pc%20-%20homePage).png)
### Cards para clicar e saber mais sobre o agente
![Foto da seção de Agentes - Primeira versão (PC - All agents cards)](./src/assets/agentPage%20-firstVersion%20-%20(pc%20-%20all%20agents).png)
### Após clicar ou digitar o nome do agente irá aparecer essa tela para informar sobre o agente
![Foto da seção de Agentes - Primeira versão (PC - Agent choosed)](./src/assets/agentPage%20-firstVersion%20-%20(pc%20-%20agent%20choosed).png)
### Tela de habilidades do agente escolhido
![Foto da seção de Agentes - Primeira versão (PC  -Agent choosed abilities)](./src/assets/agentPage%20-firstVersion%20-%20(pc%20-%20agent%20choosed%20abilities).png)
### Tela de início da seção de agentes ( celular )
![Foto da seção de Agentes - Primeira versão (Mobile - Home Page)](./src/assets/agentPage%20-firstVersion%20-%20(mobile%20-%20homePage).png)
### Após clicar ou digitar o nome do agente irá aparecer essa tela para informar sobre o agente ( celular )
![Foto da seção de Agentes - Primeira versão (Mobile - Agent Choosed)](./src/assets/agentPage%20-firstVersion%20-%20(mobile%20-%20agent%20choosed).png)
### Tela de habilidades do agente escolhido ( celular )
![Foto da seção de Agentes - Primeira versão (Mobile - Agent Choosed abilities)](./src/assets/agentPage%20-firstVersion%20-%20(mobile%20-%20agent%20choosed%20abilities).png)
# Banco Web Tests - Cypress

Este repositório contém testes automatizados para a aplicação de internet banking usando Cypress e JavaScript. O objetivo do projeto é validar o fluxo de login e transferência de valores com uma automação confiável, organizada e reutilizável.

## Visão Geral

- Automação de interface web com Cypress.
- Estrutura de testes organizada em `cypress/e2e/`.
- Comandos customizados centralizados em `cypress/support/commands/`.
- Relatórios gerados com `cypress-mochawesome-reporter`.
- Testes desenvolvidos para a aplicação web e API do projeto Banco.

## Componentes do Projeto

- `package.json`: dependências e scripts do projeto.
- `cypress/e2e/login.cy.js`: testes de login válidos e inválidos.
- `cypress/e2e/transferencia.cy.js`: testes de transferência de valores.
- `cypress/support/commands.js`: importa comandos customizados.
- `cypress/support/commands/common.js`: comandos reutilizáveis, como seleção de opção em combobox e verificação de toast.
- `cypress/support/commands/login.js`: comandos de login com diferentes cenários de credenciais.
- `cypress/support/commands/transferencia.js`: comando de transferência de valores.
- `cypress/fixtures/credenciais.json`: dados de login usados nos testes.

## Pré-requisitos

Para executar os testes, é necessário ter em funcionamento:

1. A API do banco: https://github.com/juliodelimas/banco-api
2. A aplicação web do banco: https://github.com/juliodelimas/banco-web

Além disso, é preciso ter instalado:

- Node.js
- npm

## Instalação

No diretório do projeto, execute:

```bash
npm install
```

Isso instalará o Cypress e o `cypress-mochawesome-reporter` listados em `package.json`.

## Como Executar

### Abrir o Cypress em modo interativo

```bash
npm run cy:open
```

### Executar testes no modo headless com URL local

```bash
npm test
```

### Executar contra ambiente de QA

```bash
npm run test-qa
```

### Executar contra ambiente de produção

```bash
npm run test-prod
```

### Executar em modo headed

```bash
npm run cy:headed
```

## Estrutura dos Testes

### Testes de Login

Os testes no arquivo `cypress/e2e/login.cy.js` cobrem:

- Login com credenciais inválidas e verificação de mensagem de erro.
- Login com username inválido e verificação de mensagem de erro.
- Login com senha inválida e verificação de mensagem de erro.
- Login com credenciais válidas e verificação de acesso à tela de transferência.

### Testes de Transferência

Os testes no arquivo `cypress/e2e/transferencia.cy.js` cobrem:

- Transferência bem-sucedida com valores válidos.
- Falha de transferência ao tentar enviar mais de R$ 5.000,00 sem token.

## Comandos Customizados

Este projeto utiliza comandos customizados para simplificar a lógica de teste e melhorar a manutenção.

### `loginWithValidCredentials()`

- Realiza login com credenciais válidas do arquivo `cypress/fixtures/credenciais.json`.

### `loginWithInvalidPassword()`

- Tenta login com usuário válido e senha inválida.

### `loginWithInvalidUsername()`

- Tenta login com username inválido.

### `loginWithInvalidCredentials()`

- Tenta login com usuário e senha inválidos.

### `realizarTransferencia(contaOrigem, contaDestino, valor)`

- Realiza a transferência entre contas informadas.
- Usa o comando auxiliar `selecionarOpcaoNaComboBox` para escolher as opções de conta.

### `verificarMensagemNoToast(mensagem)`

- Verifica se a mensagem exibida no componente `.toast` corresponde ao texto esperado.

### `selecionarOpcaoNaComboBox(labelDoCampo, opcao)`

- Seleciona uma opção em um campo do tipo combobox baseado no `label` do campo.

## Observações

- Garanta que a API e a aplicação web estejam em execução antes de iniciar os testes.
- A URL padrão usada no script `npm test` é `http://localhost:4000/`.
- Caso queira usar outra URL local, ajuste a configuração do `baseUrl` no comando ou no `cypress.config.js`.

## Referências

- Cypress: https://www.cypress.io/
- cypress-mochawesome-reporter: https://github.com/adamgruber/cypress-mochawesome-reporter
- Mentoria Júlio de Lima
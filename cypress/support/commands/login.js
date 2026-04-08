Cypress.Commands.add('loginWithValidCredentials', () => {
  cy.fixture('credenciais').then((c) => {
    cy.get('#username').type(c.valida.usuario);
    cy.get('#senha').type(c.valida.senha);
    cy.contains('button', 'Entrar').click();
  });
});

Cypress.Commands.add('loginWithInvalidPassword', () => {
  cy.fixture('credenciais').then((cred) => {
    cy.get('#username').type(cred.invalidaSenha.usuario);
    cy.get('#senha').type(cred.invalidaSenha.senha);
    cy.contains('button', 'Entrar').click();
  });
});

Cypress.Commands.add('loginWithInvalidUsername', () => {
  cy.fixture('credenciais').then((credenciais) => {
    cy.get('#username').type(credenciais.invalidaUsuario.usuario);
    cy.get('#senha').type(credenciais.invalidaUsuario.senha);
    cy.contains('button', 'Entrar').click();
  });
});

Cypress.Commands.add('loginWithInvalidCredentials', () => {
  cy.fixture('credenciais').then((fixCred) => {
    cy.get('#username').type(fixCred.invalidaUsuarioSenha.usuario);
    cy.get('#senha').type(fixCred.invalidaUsuarioSenha.senha);
    cy.contains('button', 'Entrar').click();
  });
});
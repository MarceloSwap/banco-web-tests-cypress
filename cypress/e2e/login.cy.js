describe('Login', () => {
  beforeEach(() => {
    // Arrange
    cy.visit('http://localhost:4000');

  });

  it('Login com dados inválidos devem apresentar mensagem de erro', () => {
    // Act
    cy.get('#username').click().type('marcelo.nietzsche');
    cy.get('#senha').click().type('x1x2x3X4@'); // semha inválida
    cy.contains('button', 'Entrar').click();

    // Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  });

  it('Login com username inválido deve apresentar mensagem de erro', () => {

    // Act
    cy.get('#username').click().type('marcelo.nietzsche');
    cy.get('#senha').click().type('123456'); // semha inválida
    cy.contains('button', 'Entrar').click();
    // Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  });

  it('Login com senha inválida deve apresentar mensagem de erro', () => {

    // Act
    cy.get('#username').click().type('marcelo.ferreira');
    cy.get('#senha').click().type('654123'); // semha inválida
    cy.contains('button', 'Entrar').click();

    // Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  });

  it('Login com dados válidos devem permitir entrada do sistema', () => {
    cy.screenshot('apos-visitar-pagina');
    cy.get('#username').click().type('marcelo.ferreira');
    cy.get('#senha').click().type('123456');
    cy.screenshot('apos-preencher-dados-validos');
    cy.contains('button', 'Entrar').click();
    cy.screenshot('apos-clicar-botao-entrar');
    cy.contains('h4', 'Realizar Transferência').should('be.visible');
  });

})
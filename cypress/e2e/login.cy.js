
describe('Login', () => {
  beforeEach(() => {
    // Arrange
    cy.visit('/')
  });

  it('Login com dados inválidos devem apresentar mensagem de erro', () => {
    // Act
    // Login com commands login com username e senha inválido
    cy.loginWithInvalidCredentials();

    // Assert
    //cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.');

  });

  it('Login com username inválido deve apresentar mensagem de erro', () => {
    // Act
    cy.loginWithInvalidUsername();
    // Assert
    //cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.');

  });

  it('Login com senha inválida deve apresentar mensagem de erro', () => {
    // Act
    cy.loginWithInvalidPassword();

    // Assert
    //cy.get('.toast').should('have.text', '')
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.');

  });

  it('Login com dados válidos devem permitir entrada do sistema', () => {
    // Act
    cy.loginWithValidCredentials();

    // Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible');
  
  });
})
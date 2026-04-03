describe('Login', () => {
  beforeEach(() => {
    // Arrange
    cy.visit('http://localhost:4000');

  });

  it('Login com dados inválidos devem apresentar mensagem de erro', () => {
    // Act
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.invalidaUsuarioSenha.usuario);
      cy.get('#senha').click().type(credenciais.invalidaUsuarioSenha.senha); // semha inválida
    });
    cy.contains('button', 'Entrar').click();

    // Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  });

  it('Login com username inválido deve apresentar mensagem de erro', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.invalidaUsuario.usuario);
      cy.get('#senha').click().type(credenciais.invalidaUsuario.senha); // semha inválida
    });
    cy.contains('button', 'Entrar').click();
    // Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  });

  it('Login com senha inválida deve apresentar mensagem de erro', () => {

    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.invalidaSenha.usuario);
      cy.get('#senha').click().type(credenciais.invalidaSenha.senha); // semha inválida
    })

    cy.contains('button', 'Entrar').click();

    // Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  });

  it('Login com dados válidos devem permitir entrada do sistema', () => {
    cy.fixture('credenciais').then(c => {
      cy.get('#username').click().type(c.valida.usuario);
      cy.get('#senha').click().type(c.valida.senha);
    });
    cy.contains('button', 'Entrar').click();
    cy.screenshot('apos-clicar-botao-entrar');
    cy.contains('h4', 'Realizar Transferência').should('be.visible');
  });

})
describe('Login', () => {
  it('Login com dados válidos devem permitir entrada do sistema', () => {
    cy.visit('http://localhost:4000');
    cy.get('#username').click().type('marcelo.ferreira');
    cy.get('#senha').click().type('123456');
    cy.get('#login-section > .btn').click();
    cy.contains('h4', 'Realizar Transferência').should('be.visible');
  })
})
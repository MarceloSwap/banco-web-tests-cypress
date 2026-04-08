describe('Transferencias', () => {
    beforeEach(() => {
        cy.visit('/');

        // login com commands login
        cy.loginWithValidCredentials();

        cy.contains('h4', 'Realizar Transferência').should('be.visible');
    });

    it('Deve transferir quando informo dados e valor válidos', () => {
        // Act
        cy.realizarTransferencia('M Ferreira com saldo de', 'Test QA com saldo de', '11.00');
        
        // Assert
        cy.verificarMensagemNoToast('Transferência realizada!');

    });

    it('Deve apresentar erro quando tentar transferir mais de 5 mil sem o token', () => {
        // Act
        cy.realizarTransferencia('M Ferreira com saldo de', 'Test QA com saldo de', '5000.01');

        // Assert
        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.');

    });
})
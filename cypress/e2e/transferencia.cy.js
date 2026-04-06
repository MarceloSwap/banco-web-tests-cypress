describe('Transferencias', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.fixture('credenciais').then(cred => {
            cy.get('#username').click().type(cred.valida.usuario);
            cy.get('#senha').click().type(cred.valida.senha);
        });
        cy.contains('button', 'Entrar').click();
        cy.contains('h4', 'Realizar Transferência').should('be.visible');
    });

    it('Deve transferir quando informo dados e valor válidos', () => {
        cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem');
        cy.get('@campo-conta-origem').click();
        cy.get('@campo-conta-origem').contains('M Ferreira com saldo de').click();

        cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino');
        cy.get('@campo-conta-destino').click();
        cy.get('@campo-conta-destino').contains('Test QA com saldo de').click();

        cy.get('#valor').click().type('12.00'); //clicla e escreve no campo valor que tem id

        cy.contains('button', 'Transferir').click();

        cy.get('.toast').should('have.text','Transferência realizada!');
        
    });
})
describe('Pages - Authentication', () => {
    it('should login', () => {
        cy.visit('/auth/login');
        cy.get('[data-cy=emailInput]').type('test@test.test');
        cy.get('[data-cy=passwordInput]').type('testpassword');
        cy.get('[data-cy=loginButton]').click();
        cy.get('ngb-modal-window').should('be.visible');
    });
    it('should register', () => {
        cy.visit('/auth/register');
        cy.get('[data-cy=firstNameInput]').type('Testy');
        cy.get('[data-cy=lastNameInput]').type('McTestFace');
        cy.get('[data-cy=emailInput]').type('test@test.test');
        cy.get('[data-cy=passwordInput]').type('test1212');
        cy.get('[data-cy=confirmPasswordInput]').type('test1212');
        cy.get('[data-cy=registerButton]').click();
        cy.get('ngb-modal-window').should('be.visible');
    });
});

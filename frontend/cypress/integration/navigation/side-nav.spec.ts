describe('Navigation - SideNav', () => {
    it('should toggle the sidenav', () => {
        cy.visit('/dashboard');
        cy.get('[data-cy=sideNav]').should('be.visible');
        cy.get('[data-cy=topNavToggleSideNav]').click();
        cy.get('[data-cy=sideNav]').should('not.be.visible');
        cy.get('[data-cy=topNavToggleSideNav]').click();
        cy.get('[data-cy=sideNav]').should('be.visible');
    });
});

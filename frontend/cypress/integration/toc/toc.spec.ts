describe('Table of Contents', () => {
    it('should make top heading active on load', () => {
        cy.visit('/dashboard/components/alerts');
        cy.get('sbpro-toc-nav')
            .contains('Default')
            .should('have.class', 'active');
    });
    it('should deep link', () => {
        cy.visit('/dashboard/components/alerts#solid');
        cy.get('sbpro-toc-nav')
            .contains('Solid')
            .should('have.class', 'active');
    });
    it('should scroll to clicked heading in TOC', () => {
        cy.get('sbpro-toc-nav')
            .contains('Extended')
            .click({ force: true });
        cy.location('pathname').should('eq', '/dashboard/components/alerts');
        cy.location('hash').should('eq', '#extended');
        cy.get('sbpro-toc-nav')
            .contains('Extended')
            .should('have.class', 'active');
    });
});

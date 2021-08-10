describe('Navigation - Redirects', () => {
    it('should redirect to /dashboard when navigating to /', () => {
        cy.visit('/');
        cy.location('pathname').should('eq', '/dashboard');
    });

    it('should redirect to /dashboard/components/alerts when navigating to /dashboard/components', () => {
        cy.visit('/dashboard/components');
        cy.location('pathname').should('eq', '/dashboard/components/alerts');
    });
});

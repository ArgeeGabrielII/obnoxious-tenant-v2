describe('Navigation - SideNav - Components', () => {
    it('should have a link for each item in Components in the SideNav', () => {
        cy.visit('/dashboard');
        cy.get('sbpro-side-nav-item')
            .contains(/^\s*Components.*$/)
            .scrollIntoView()
            .click();
        cy.get('sbpro-side-nav-item')
            .contains(/^\s*Alerts.*$/)
            .scrollIntoView()
            .click();
        cy.location('pathname').should('eq', '/dashboard/components/alerts');
        cy.get('sbpro-side-nav-item')
            .contains(/^\s*Buttons.*$/)
            .scrollIntoView()
            .click();
        cy.location('pathname').should('eq', '/dashboard/components/buttons');
        cy.get('sbpro-side-nav-item')
            .contains(/^\s*Cards.*$/)
            .scrollIntoView()
            .click();
        cy.location('pathname').should('eq', '/dashboard/components/cards');
        cy.get('sbpro-side-nav-item')
            .contains(/^\s*Dropdowns.*$/)
            .scrollIntoView()
            .click();
        cy.location('pathname').should('eq', '/dashboard/components/dropdowns');
        cy.get('sbpro-side-nav-item')
            .contains(/^\s*Forms.*$/)
            .scrollIntoView()
            .click();
        cy.location('pathname').should('eq', '/dashboard/components/forms');
        cy.get('sbpro-side-nav-item')
            .contains(/^\s*Modal.*$/)
            .scrollIntoView()
            .click();
        cy.location('pathname').should('eq', '/dashboard/components/modal');
        cy.get('sbpro-side-nav-item')
            .contains(/^\s*Progress.*$/)
            .scrollIntoView()
            .click();
        cy.location('pathname').should('eq', '/dashboard/components/progress');
        cy.get('sbpro-side-nav-item')
            .contains(/^\s*Toasts.*$/)
            .scrollIntoView()
            .click();
        cy.location('pathname').should('eq', '/dashboard/components/toasts');
        cy.get('sbpro-side-nav-item')
            .contains(/^\s*Tooltips.*$/)
            .scrollIntoView()
            .click();
        cy.location('pathname').should('eq', '/dashboard/components/tooltips');
    });
});

describe('Flows - Multi-Tenant', () => {
    it('should create an organization', () => {
        cy.visit('/auth/multi-tenant-select');
        cy.get('[data-cy=createNewOrganization]').click();
        cy.location('pathname').should('eq', '/auth/org-create');
        cy.get('[data-cy=nameInput]').type('Test Org');
        cy.get('[data-cy=organizationNewButton]').click();
        cy.location('pathname').should('eq', '/auth/multi-tenant-add-users');
        cy.get('[data-cy=emailInput_0]').type('asd@asd.asd');
        cy.get('[data-cy=addAnotherButton]').click();
        cy.get('[data-cy=emailInput_1]').type('qwe@qwe.qwe');
        cy.get('[data-cy=addMembersButton]').click();
        cy.get('ngb-modal-window').should('be.visible');
    });
    it('should join an organization', () => {
        cy.visit('/auth/multi-tenant-select');
        cy.get('[data-cy=joinOrganization]').click();
        cy.location('pathname').should('eq', '/auth/org-join');
        cy.get('[data-cy=codeInput]').type('123');
        cy.get('[data-cy=accessCodeButton]').click();
        cy.get('ngb-modal-window').should('be.visible');

        cy.get('ngb-modal-window button')
            .contains('Close')
            .click();

        cy.get('[data-cy=joinNameInput]').type('Test Org');
        cy.get('[data-cy=joinOrgNamedButton]').click();
        cy.get('ngb-modal-window').should('be.visible');
    });
});

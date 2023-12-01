context('Wikipedia Test', () => {
    // Load test data from a fixture file
    beforeEach(() => {
        cy.fixture('wikipedia').as('wiki');
    });

    it('Test 01 - BDD extracitions', function() {
       cy.visit(this.wiki.baseUrl);
       cy.get('#www-wikipedia-org')
    });
});
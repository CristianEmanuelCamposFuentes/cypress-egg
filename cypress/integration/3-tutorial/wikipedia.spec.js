context('Wikipedia Test', () => {
    // Load test data from a fixture file
    beforeEach(() => {
        cy.fixture('wikipedia').as('wiki');
    });

    it('Test 01 - BDD expectations', function() {
       cy.visit(this.wiki.baseUrl);
       cy.get('#www-wikipedia-org #searchInput').type("Globant {enter}");

       cy.get('.infobox img').eq(0).should('be.visible');

       cy.get('.mediawiki  #firstHeading').should('be.visible');

        cy.get('.mediawiki  #firstHeading').should('contain', "Globant");

    });

    it('Test 02 - Implicit Wait', function() {
        cy.visit(this.wiki.baseUrl);
        cy.get('#www-wikipedia-org #searchInput').type("Globant {enter}");

        cy.wait(6000);

        cy.get('.infobox img').eq(0).should('be.visible');

        cy.get('.mediawiki  #firstHeading').should('be.visible');

        cy.get('.mediawiki  #firstHeading').should('contain', "Globant");

    });
});
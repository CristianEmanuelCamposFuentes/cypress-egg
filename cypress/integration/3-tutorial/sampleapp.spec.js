// spec.js

context('Login Functionality', () => {
    // Load test data from a fixture file
    beforeEach(() => {
        cy.fixture('credentials').as('dataAlias');
    });

    // Test valid login
    it.only('should log in with valid credentials', function () {
        const { validUsername, validPassword } = this.dataAlias.data;

        cy.visit(this.dataAlias.baseUrl);
        cy.get('input[name=\'UserName\']').type(validUsername);
        cy.get('input[name=\'Password\']').type(validPassword);
        cy.get('#login').click();
        // cy.url().should('include', '/profile');
        // cy.contains('Welcome').should('be.visible');
    });

    // Test invalid login with incorrect password
    it('should show error message for invalid password', function () {
        const { validUsername, invalidPassword } = this.dataAlias.data;
        cy.visit(this.dataAlias.baseUrl);
        cy.get('input[name=\'UserName\']').type(validUsername);
        cy.get('input[name=\'Password\']').type(invalidPassword);
        cy.get('#login').click();
        cy.contains('Invalid username or password').should('be.visible');
    });

    // Test invalid login with incorrect username
    it('should show error message for invalid username', function () {
        const { invalidUsername, validPassword } = this.dataAlias.data;
        cy.visit(this.dataAlias.baseUrl);
        cy.get('input[name=\'UserName\']').type(invalidUsername);
        cy.get('input[name=\'Password\']').type(validPassword);
        cy.get('#login').click();
        cy.contains('Invalid username or password').should('be.visible');
    });

    // Test invalid login with empty fields
    it('should show error message for empty username and password', function () {
        cy.visit(this.dataAlias.baseUrl);
        cy.get('#login').click();
        cy.contains('Please enter both username and password').should('be.visible');
    });
});


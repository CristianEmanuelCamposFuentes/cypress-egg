// spec.js

context('Login Functionality', () => {
    // Load test data from a fixture file
    beforeEach(() => {
        cy.fixture('credentials.json').as('credentials');
    });

    // Test valid login
    it('should log in with valid credentials', function () {
        const { validUsername, validPassword } = this.credentials.data;
        cy.visit('http://uitestingplayground.com/sampleapp');
        cy.get('[data-test=username]').type(validUsername);
        cy.get('[data-test=password]').type(validPassword);
        cy.get('[data-test=login-button]').click();
        cy.url().should('include', '/profile');
        cy.contains('Welcome').should('be.visible');
    });

    // Test invalid login with incorrect password
    it('should show error message for invalid password', function () {
        const { validUsername, invalidPassword } = this.credentials.data;
        cy.visit('http://uitestingplayground.com/sampleapp');
        cy.get('[data-test=username]').type(validUsername);
        cy.get('[data-test=password]').type(invalidPassword);
        cy.get('[data-test=login-button]').click();
        cy.contains('Invalid username or password').should('be.visible');
    });

    // Test invalid login with incorrect username
    it('should show error message for invalid username', function () {
        const { invalidUsername, validPassword } = this.credentials.data;
        cy.visit('http://uitestingplayground.com/sampleapp');
        cy.get('[data-test=username]').type(invalidUsername);
        cy.get('[data-test=password]').type(validPassword);
        cy.get('[data-test=login-button]').click();
        cy.contains('Invalid username or password').should('be.visible');
    });

    // Test invalid login with empty fields
    it('should show error message for empty username and password', function () {
        cy.visit('http://uitestingplayground.com/sampleapp');
        cy.get('[data-test=login-button]').click();
        cy.contains('Please enter both username and password').should('be.visible');
    });
});

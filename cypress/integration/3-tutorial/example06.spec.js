import LoginPage from "../../support/pages/LoginPage";

context('Example 06', () => {
    beforeEach( () => {
        cy.visit('https://example.cypress.io/todo#/');
    });
    it('Test #1', () => {
        cy.AddTodo('My task #1');
        cy.AddTodo('My task #2');
        cy.GetTodoCount().should('eq', 4);

        cy.ToggleTask(2);
        cy.GetTodoCount().should('eq',3);

        cy.SelectCompleted()
    });

    it.only('Logs the user in and validates the successful login', () =>{
        // Inputs an old email and its respective password and clicks in Sign In button
        loginPageObject.writeInputUser('cypressDemo');
        loginPageObject.writePasswordInputUser('test');
        loginPageObject.clickSignInButton();

        // Validates the correct login of the account
        privateHomePageObject.isLoginSuccessful();
    });
})
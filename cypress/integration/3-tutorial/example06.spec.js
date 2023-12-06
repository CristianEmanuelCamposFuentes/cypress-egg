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
})
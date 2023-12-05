import TodosPage from "../../support/pages/TodosPage.js";
const todosPage = new TodosPage();

const task1 = 'Present POM';
const task2 = 'Teach Cypress';

context('Example 01', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo#/');
    });

    it('Test #1', () => {
        // Create a couple of tasks
        todosPage.addTodo(task1);
        todosPage.addTodo(task2);

        //Validate there exist a total of 4 tasks
        todosPage.todoCount().should('eq',4);

        // Toggle the third task
        todosPage.clickTodoToggle(2);

        // Validate there exist a total of 2 tasks
        todosPage.todoCount().should('eq',3);

        // Open completed tasks tab
        todosPage.clickCompletedLink();

    })

})
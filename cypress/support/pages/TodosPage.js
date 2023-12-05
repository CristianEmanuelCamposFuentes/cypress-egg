// This object stores the locators for various elements on the page.
var pageLocators = {
    newTodoInput: '.new-todo',
    allLink: 'a:contains("All")',
    activeLink: 'a:contains("Active")',
    completedLink: 'a:contains("Completed")',
    todoCount: '.todo-count > strong',
}

// This class defines methods related to interacting with elements on the Todos page.
class TodosPage {
    // These methods return Cypress commands to interact with specific elements on the page.
    newTodoInput() { return cy.get(pageLocators.newTodoInput); }
    allLink() { return cy.get(pageLocators.allLink); }
    activeLink() { return cy.get(pageLocators.activeLink); }
    completedLink() { return cy.get(pageLocators.completedLink); }
    todoToggle(id) { return cy.get(':nth-child(' + id + ') > .view > .toggle'); }
    todoCount() { return cy.get(pageLocators.todoCount).invoke('text').then(parseInt); }

    // This method adds a new todo item to the page by typing the todo and pressing 'Enter'.
    addTodo(todo) { return this.newTodoInput().type(todo + '{enter}'); }

    // This method clicks the toggle button of a todo item with a specific ID.
    clickTodoToggle(id) { return this.todoToggle(id).click(); }

    // This method clicks the "Completed" link to filter completed todo items.
    clickCompletedLink() { return this.completedLink().click(); }
}

// This exports the TodosPage class so that it can be used in other files.
export default TodosPage;

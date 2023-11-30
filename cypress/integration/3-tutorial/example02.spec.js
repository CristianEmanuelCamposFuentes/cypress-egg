context('Variables', () => {
    beforeEach(() => {
        // Setear para cada uno de los tests
        cy.visit('/');
        cy.fixture('todos').as('tag');
    });

    it('Test 01', () => {
        cy.get('.new-todo').type("Something... {enter}");
        cy.get('.todo-list li').as('items')

        cy.get('@items').should('have.length', 3);
        cy.get('.todo-list li').should('have.length', 3);
    })

    it('Test 02', () => {
        // cy.fixture('todos').then(todos => {})
        cy.get('@tag').then( todos => {
            todos.todos.forEach( todo => {
                cy.get('.new-todo').type(todo + "{enter}");
            })
        })
    })
});
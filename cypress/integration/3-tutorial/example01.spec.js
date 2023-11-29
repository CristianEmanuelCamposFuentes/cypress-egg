context('Example 01', () => {
    // En cada prueba va a visitar esa pagina
    beforeEach(() =>{
        cy.visit('/')
    })

    it('Test #1', () => {
        // Obtener el elemento para poder trabajarlo
        cy.get('.new-todo').type("My long task #1{enter}");
        cy.get('.new-todo').type("My long task #2{enter}");
        cy.contains('Completed').click();
        cy.contains('Active').click();
    })

    it('Test #2: Select using CSS selectors', () => {
        // Obtener el elemento para poder trabajarlo
        cy.get('.new-todo').type("My long task #1{enter}");
        cy.get('.new-todo').type("My long task #2{enter}");
        cy.get(':nth-child(2) > .view > .toggle').click();
        cy.contains('Completed').click();
    })

    it('Test #3: Select using Text Content', () => {
        // Obtener el elemento para poder trabajarlo
        cy.get('.new-todo').type("My long task #1{enter}");
        cy.get('.new-todo').type("My long task #2{enter}");
        cy.get('label:contains("My long task #1")')
            .parent().find('.toggle')
            .click();
        cy.contains('Completed').click();
    })

    it('Test #4: Assertions', () => {
        // Obtener el elemento para poder trabajarlo
        cy.get('.todo-list li').should('have.length', 2);
        cy.get('.new-todo').type("My long task #1{enter}");
        cy.get('.todo-list li').should('have.length', 3);

        cy.get('label:contains("My long task #1")')
            .parent().find('.toggle').click();
        cy.get('label:contains("My long task #1")')
            .parent().parent().should('have.class', 'completed');

        cy.get('label:contains("Walk the dog")')
            .parent().parent()
            .should('have.not.class', 'completed');
    })

    it('Test #5: Reversing the Default Assertion', () => {
        // Obtener el elemento para poder trabajarlo
        cy.get('button.close').should('not.exist');
        // cy.get('button.close');

    })

})
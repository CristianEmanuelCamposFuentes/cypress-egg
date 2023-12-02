describe('Página de Product Store', () => {
    beforeEach(() => {
        cy.visit('https://demoblaze.com/');
    });

    it('La página se carga correctamente', () => {
        cy.title().should('eq', 'STORE'); // Verificar que el título es correcto
        cy.get('.navbar-brand').should('contain.text', 'PRODUCT STORE'); // Verificar que el nombre de la tienda está presente
        cy.get('.carousel').should('exist'); // Verificar que el carrusel está presente
        // Agrega más verificaciones según sea necesario
    });
});




describe('Navegación en la Página', () => {
    beforeEach(() => {
        cy.visit('https://demoblaze.com/');
    });

    it('Navegación a la sección de Contacto', () => {
        cy.get('.navbar-nav').contains('Contact').click(); // Hacer clic en el enlace de contacto
        cy.url().should('include', 'contact.html'); // Verificar que la URL ha cambiado a la sección de contacto
    });

    it('Navegación a la sección "About us"', () => {
        cy.get('.navbar-nav').contains('About us').click(); // Hacer clic en el enlace de "About us"
        cy.url().should('include', 'videoModal'); // Verificar que la URL ha cambiado a la sección de "About us"
    });

});

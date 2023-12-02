// <reference types= 'cypresss' />

// Root-level hook
// Se ejecuta antes de todas las pruebas
before(() => {
   cy.log('Root Before');
   // Puedes agregar aquí la configuración global, como la navegación a la página principal, iniciar sesión, etc.
});

beforeEach(() => {
   // Root-level hook
   // Se ejecuta antes de cada prueba
   cy.log('Root Before Each');
   // Puedes agregar aquí la configuración que debe realizarse antes de cada prueba individual
});

context('Hooks', () => {
   before(() => {
      // Bloque-level hook
      // Se ejecuta una vez antes de todas las pruebas en el bloque
      cy.log('Before: runs once before all tests in the block');
      // Puedes agregar aquí la configuración específica del bloque de pruebas
   });

   beforeEach(() => {
      // Bloque-level hook
      // Se ejecuta antes de cada prueba en el bloque
      cy.log('Before Each: runs once before each test in the block');
      // Puedes agregar aquí la configuración específica del bloque antes de cada prueba
   });

   it('Title 01', () => {
      // Puedes escribir la lógica de tu primera prueba aquí
   });

   it('Title 02', () => {
      // Puedes escribir la lógica de tu segunda prueba aquí
   });

   afterEach(() => {
      // Bloque-level hook
      // Se ejecuta después de cada prueba en el bloque
      cy.log('After each: runs after each test in the block');
      // Puedes agregar aquí la limpieza específica del bloque después de cada prueba
   });

   after(() => {
      // Bloque-level hook
      // Se ejecuta una vez después de todas las pruebas en el bloque
      cy.log('After: runs once after all tests in the block');
      // Puedes agregar aquí la limpieza específica del bloque después de todas las pruebas
   });
});

afterEach(() => {
   // Root-level hook
   // Se ejecuta después de cada prueba
   cy.log('Root After Each');
   // Puedes agregar aquí la limpieza global después de cada prueba
});

after(() => {
   // Root-level hook
   // Se ejecuta una vez después de todas las pruebas
   cy.log('Root After');
   // Puedes agregar aquí la limpieza global después de todas las pruebas
});

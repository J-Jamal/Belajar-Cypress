// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login', () => {
    cy.visit('https://demo.snipeitapp.com/login');
    cy.get("#username").click;
    cy.get("#username").type("admin");
    cy.get("#password").click;
    cy.get("#password").type("password");
    // cy.get(".form-control > input").not("[disabled]").check();
    cy.get(".form-control > input")
      .not("[disabled]")
      .uncheck()
      .should("not.be.checked");
    cy.get(".btn").click();
  });
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
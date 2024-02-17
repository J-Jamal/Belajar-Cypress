import login from "../../support/commands";

describe("Login", () => {
  beforeEach(() => {
    cy.login();
    cy.clearAllSessionStorage;
  });

  it("Verifikasi tidak dapat untuk masuk dengan password yang salah", () => {
    cy.visit("https://demo.snipeitapp.com");
     /* ==== Generated with Cypress Studio ==== */
     cy.get('.nav > :nth-child(1) > a > .fas').click();
     cy.get('.nav > :nth-child(2) > a > .far').click();
     cy.get('.nav > :nth-child(3) > a').click();
     cy.get('.nav > :nth-child(4) > a > .fas').click();
     cy.get('.nav > :nth-child(5) > a').click();
     /* ==== End Cypress Studio ==== */
  });
});

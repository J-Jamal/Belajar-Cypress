import login from "../../support/commands";

describe("Login", () => {
  beforeEach(() => {
    cy.login();
    cy.clearAllSessionStorage;
  });

  it("Verifikasi tidak dapat untuk masuk dengan password yang salah", () => {
    cy.visit("https://demo.snipeitapp.com");

  })

  /* ==== Test Created with Cypress Studio ==== */
  it('test_icon', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(7) > .dropdown-toggle').click();
    cy.get('.open > .dropdown-menu > :nth-child(1) > a').click();
    cy.get(':nth-child(7) > .dropdown-toggle').click();
    cy.get('.open > .dropdown-menu > :nth-child(2) > a').click();
    cy.get(':nth-child(7) > .dropdown-toggle').click();
    cy.get('.open > .dropdown-menu > :nth-child(3) > a').click();
    cy.get(':nth-child(7) > .dropdown-toggle').click();
    cy.get('.open > .dropdown-menu > :nth-child(4) > a').click();
    cy.get(':nth-child(7) > .dropdown-toggle').click();
    cy.get('.open > .dropdown-menu > :nth-child(5) > a').click();
    cy.get(':nth-child(7) > .dropdown-toggle').click();
    cy.get('.open > .dropdown-menu > :nth-child(6) > a').click();
    /* ==== End Cypress Studio ==== */
  });
})
import login from "../../support/commands"

describe("Login", () => {
  beforeEach(() => {
    cy.login();
    cy.clearAllSessionStorage;
  });
  /* ==== Test Created with Cypress Studio ==== */
  it("Verifikasi tidak dapat untuk masuk dengan password yang salah", () => {
    cy.visit("https://demo.snipeitapp.com");
    cy.get('.sidebar-toggle').click();
    cy.get('.sidebar-menu > .active > a').click();
    cy.get(':nth-child(2) > [href="#"] > span').click();
    cy.get('.menu-open > .treeview-menu > :nth-child(1) > a').click();
    cy.get('.active > [href="#"]').click();
    cy.get('.sidebar-menu > :nth-child(3) > a > span').click();
    cy.get('.sidebar-menu > :nth-child(4) > a > span').click();
    cy.get('.sidebar-menu > :nth-child(5) > a > span').click();
    cy.get(':nth-child(6) > a > span').click();
    cy.get('.sidebar-menu > :nth-child(8) > a > span').click();
    cy.get('.sidebar-menu > :nth-child(9) > a').click();
    cy.get('.sidebar-menu > :nth-child(9) > a').click();
    cy.get('#settings').click();
    cy.get('.menu-open > .treeview-menu > :nth-child(1) > a').click();
    cy.get(':nth-child(11) > .dropdown-toggle').click();
    cy.get('.menu-open > .treeview-menu > :nth-child(1) > a').click();
    cy.get(':nth-child(12) > a > span').click();
    cy.get('.main-header').click();
    cy.get('.firstnav > a > span').click();
    cy.get('.sidebar-toggle').click();
    /* ==== End Cypress Studio ==== */
  });
});

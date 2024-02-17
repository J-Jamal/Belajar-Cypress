describe("Login", () => {
  beforeEach(() => {
    cy.clearAllSessionStorage;
  });
  it("Verifikasi search dengan data yang salah", () => {
    cy.visit("https://demo.snipeitapp.com/login");
    cy.get(".container > .row").click();
    cy.get("#username").click();
    cy.get("#username").type("admin");
    cy.get("#password").click();
    cy.get("#password").type("password");
    cy.get(".form-control:nth-child(1)").click();
    cy.get(".form-control > input").click();
    cy.get(".btn").click();
    cy.url().should("contains", "https://demo.snipeitapp.com/");
    cy.get(".alert > strong").should(
      "be.visible",
      "You have successfully logged in."
    );
    cy.get("#tagSearch").click();
    cy.get("#tagSearch").type("guci");
    cy.get(".col-xs-1 > .btn").click();
    cy.url().should("contains", "https://demo.snipeitapp.com/hardware");
    cy.get(".alert > strong").should("be.visible", "Asset does not exist.");
  });
  it("Verifikasi dengan data yang benar", () => {
    cy.visit("https://demo.snipeitapp.com/login");
    cy.get(".container > .row").click();
    cy.get("#username").click();
    cy.get("#username").type("admin");
    cy.get("#password").click();
    cy.get("#password").type("password");
    cy.get(".form-control:nth-child(1)").click();
    cy.get(".form-control > input").click();
    cy.get(".btn").click();
    cy.url().should("contains", "https://demo.snipeitapp.com/");
    cy.get(".alert > strong").should(
      "be.visible",
      "You have successfully logged in."
    );
    cy.visit("https://demo.snipeitapp.com/");
    cy.get("#tagSearch").click();
    cy.get("#tagSearch").type("1134699385");
    cy.get(".col-xs-1 > .btn").click();
    cy.url().should("contains", "https://demo.snipeitapp.com/hardware/523");
  });
});

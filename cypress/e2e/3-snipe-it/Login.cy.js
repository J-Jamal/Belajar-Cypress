describe("Login", () => {
  beforeEach(() => {
    cy.clearAllSessionStorage;
  });
  it("Verifikasi dapat masuk dengan username dan password yg benar dan yang sudah terdaftar", () => {
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
  });
  it("Verifikasi tidak dapat untuk masuk dengan username yang salah", () => {
    cy.visit("https://demo.snipeitapp.com/login");
    cy.get("#username").click();
    cy.get("#username").type("user");
    cy.get("#password").click();
    cy.get("#password").click();
    cy.get("#password").type("password");
    cy.get(".btn").click();
    cy.get(".alert > strong").should(
      "be.visible",
      "The username or password is incorrect."
    );
  });
  it("Verifikasi tidak dapat untuk masuk dengan password yang salah", () => {
    cy.visit("https://demo.snipeitapp.com/login");
    cy.get("#username").click();
    cy.get("#username").type("admin");
    cy.get("#password").click();
    cy.get("#password").type("Password");
    cy.get(".btn").click();
    cy.get(".alert > strong").should(
      "be.visible",
      "The username or password is incorrect."
    );
  });
  it("Verifikasi tidak dapat untuk masuk dengan akun yang tidak terdaftar", () => {
    cy.visit("https://demo.snipeitapp.com/login");
    cy.get("#username").click();
    cy.get("#username").type("test");
    cy.get("#password").click();
    cy.get("#password").type("test");
    cy.get(".btn").click();
    cy.get(".alert > strong").should(
      "be.visible",
      "The username or password is incorrect."
    );
  });
  it("Verifikasi tidak dapat dengan checklist Remember Me", () => {
    cy.visit("https://demo.snipeitapp.com/login");
    cy.get(".container > .row").click();
    cy.get("#username").click();
    cy.get("#username").type("admin");
    cy.get("#password").click();
    cy.get("#password").type("password");
    cy.get('[type="checkbox"]').check();
    cy.get(".btn").click();
    cy.url().should("contains", "https://demo.snipeitapp.com/");
    cy.get(".alert > strong").should(
      "be.visible",
      "You have successfully logged in."
    );
  });
  it("Verifikasi dapat masuk dengan unchecklist Remember Me", () => {
    cy.visit("https://demo.snipeitapp.com/login");
    cy.get(".container > .row").click();
    cy.get("#username").click();
    cy.get("#username").type("admin");
    cy.get("#password").click();
    cy.get("#password").type("password");
    cy.get('[type="checkbox"]').uncheck();
    cy.get(".btn").click();
    cy.url().should("contains", "https://demo.snipeitapp.com/");
    cy.get(".alert > strong").should(
      "be.visible",
      "You have successfully logged in."
    );
  });
});

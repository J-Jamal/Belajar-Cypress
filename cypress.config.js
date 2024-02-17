const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporter: 'reporters/custom.js',
  pageLoadTimeout: 60000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here   
      config.specPattern = [
        // 'cypress/e2e/3-snipe-it/Click_Page.cy.js', 
        // 'cypress/e2e/3-snipe-it/Up_Icon.cy.js',
        'cypress/e2e/3-snipe-it/Create_User.cy.js',
      ]
      return config
    },
    viewportHeight: 768,
    viewportWidth: 1500,
    experimentalStudio: true,
  }
});
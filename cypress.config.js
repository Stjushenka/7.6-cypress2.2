const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "tduomb",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://petstore.swagger.io'
  },
});

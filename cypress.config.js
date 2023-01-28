const { defineConfig } = require("cypress");
const { lighthouse,prepareAudit } = require('@cypress-audit/lighthouse')
module.exports = defineConfig ({
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOption) => {
        prepareAudit(launchOption);
      });
      on("task", {
        lighthouse: lighthouse(),
      });
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});

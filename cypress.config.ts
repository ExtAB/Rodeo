import { defineConfig } from "cypress";
import * as dotenv from "dotenv";

dotenv.config({ path: "./.env"});


export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
    
    },
  },
  watchForFileChanges: false,
  env: {
    baseURL: process.env.BASE_URL,
    inventory:  process.env.BASE_URL + "inventory.html",
    cart:  process.env.BASE_URL + "cart.html"
  },
  retries: {
    runMode: 2,
    openMode: 0
  }
});

/// <reference types="cypress" />
import { LoginPage } from '../e2e/POM/LoginPage'

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      login(username: string, password: string): void;
    }
  }
}

Cypress.Commands.add('login', (username: string, password: string) => {
  const loginPage = new LoginPage();
  cy.document().then(doc => {

    cy.visit(Cypress.env('baseURL'));   
    loginPage.typeUsername(username);
    loginPage.typePassword(password);
    loginPage.clickLoginButton();
  })
});

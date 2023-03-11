export class LoginPage {
  private readonly usernameField = '[name="user-name"]';
  private readonly passwordField = '[name="password"]';
  private readonly loginButton = '[name="login-button"]';
  private readonly errorMessage = 'h3[data-test="error"]';

  visit(url: string) {
    cy.visit(url, { timeout: 30000 });
  }

  typeUsername(username: string) {
    cy.get(this.usernameField).type(username);
  }

  typePassword(password: string) {
    cy.get(this.passwordField).type(password);
  }

  clickLoginButton() {
    cy.get(this.loginButton).click();
  }

  isErrorMessageVisible() {
    cy.get(this.errorMessage).should('be.visible');
  }
}

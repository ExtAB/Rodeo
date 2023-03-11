export class CheckoutPage {
  firstNameField = () => cy.get('#first-name');
  lastNameField = () => cy.get('#last-name');
  zipCodeField = () => cy.get('#postal-code');
  continueButton = () => cy.get('[value="Continue"]');
  finishButton = () => cy.get('[name="finish"]');
  cancelButton = () => cy.get('[data-test="cancel"]');
  itemTotal = () => cy.get('.summary_subtotal_label');
  errorMessage = () => cy.get('.error-message-container');
  checkoutHeader = () => cy.get('.complete-header');
  checkoutText = () => cy.get('.complete-text');

  fillOutInformation(firstName: string, lastName: string, zipCode: string) {
    this.firstNameField().type(firstName);
    this.lastNameField().type(lastName);
    this.zipCodeField().type(zipCode);
  }

  clearOutName() {
    this.firstNameField().clear();
  }

  continueCheckout() {
    this.continueButton().click();
  }

  finishCheckout() {
    this.finishButton().click();
  }

  cancelCheckout() {
    this.cancelButton().click();
  }

  checkForErrorMessage(errorMessage: string) {
    this.errorMessage().should('contain.text', errorMessage);
  }

  checkoutHeaderMessage(headerMessage: string) { 
    this.checkoutHeader().should('have.text', headerMessage)
  }

  checkoutTextMessage(textMessage: string) { 
    this.checkoutText().should('contain.text', textMessage)
  }
}


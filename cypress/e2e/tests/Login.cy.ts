import { LoginPage } from '../POM/LoginPage';
import { ProductsPage } from '../POM/ProductsPage';
import { userNames, PASSWORD } from '../../fixtures/constants';

const loginPage = new LoginPage();
const productPage = new ProductsPage();

describe('Login and logout with different usernames', () => {

  userNames.forEach(user => {
    it('should try to log in with username: ' + user, () => {

      cy.login(user, PASSWORD);
      cy.url().should('include', '/inventory.html');
      //logout
      productPage.logout();
    });
  })

  it('should fail to log in with invalid credentials', () => {

    cy.login('invalid_user', 'invalid_password');
    loginPage.isErrorMessageVisible();
  });
});




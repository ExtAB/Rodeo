import { ProductsPage } from '../POM/ProductsPage';
import "cypress-localstorage-commands";
import { userNames, PASSWORD } from '../../fixtures/constants'

describe('Product', () => {
  const productsPage = new ProductsPage();

  before(() => {
    cy.login(userNames[0], PASSWORD)
  });

  it('should add product to cart from the homepage', () => {

    // SORT
    productsPage.selectSortOption('Name (Z to A)');

    //ADD
    cy.url().should('include', '/inventory.html');
    productsPage.clickAddToCartButton(0);
    productsPage.clickCartIcon();

    cy.url().should('include', '/cart.html');
    cy.get('.cart_item').should('have.length', 1);
    //DELETE
    productsPage.clickCartIcon();
    productsPage.clickRemoveButton();

    cy.get('.cart_item').should('not.exist');

  });
})
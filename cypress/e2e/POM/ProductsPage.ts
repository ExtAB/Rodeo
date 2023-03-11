export class ProductsPage {
  private readonly addToCartButton = '.btn_primary.btn_inventory';
  private readonly cartIcon = '.shopping_cart_link';

  visit() {
    cy.visit(Cypress.env('baseURL') + 'cart.html');
  }

  clickAddToCartButton(index: number) {
    cy.get(this.addToCartButton).eq(index).click();
  }

  clickCartIcon() {
    cy.get(this.cartIcon).click();
  }

  clickRemoveButton() {
    cy.get('.cart_item').first().find('.cart_button').click();
  }

  selectSortOption(option: string) {
  
    cy.get('.product_sort_container').select(option);
    cy.get('.inventory_item_name').then((items) => {
      const sortedItems = [...items].sort((a, b) =>
        a.textContent.localeCompare(b.textContent)
      );

      cy.wrap(sortedItems).should((newItems) => {
        expect(items.length).to.equal(newItems.length);
        for (let i = 0; i < sortedItems.length; i++) {
          expect(sortedItems[i].textContent.trim()).to.equal(newItems[i].textContent.trim());
        }
      });
    });
  }

  logout() {
    cy.get('.bm-burger-button').click();
    cy.contains('Logout').click();
  }
}

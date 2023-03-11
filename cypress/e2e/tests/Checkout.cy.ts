import { ProductsPage } from '../POM/ProductsPage';
import { ShoppingCartPage } from '../POM/ShopingCartPage';
import { CheckoutPage } from '../POM/CheckoutPage';
import { userNames, PASSWORD } from '../../fixtures/constants'

describe('Checkout', () => {
    let productsPage: ProductsPage;
    let shoppingCartPage: ShoppingCartPage;
    let checkoutPage: CheckoutPage;
    // after((
    // ) => {
    //     cy.clearLocalStorage();
    //     cy.clearCookies();
    // })
    beforeEach(() => {
        productsPage = new ProductsPage();
        shoppingCartPage = new ShoppingCartPage();
        checkoutPage = new CheckoutPage();

        cy.login(userNames[0], PASSWORD)
        productsPage.clickAddToCartButton(0);
        productsPage.clickCartIcon();

        shoppingCartPage.checkout();
    });

    it('should complete the checkout process with valid user information', () => {
        checkoutPage.fillOutInformation('John', 'Doe', '12345');
        checkoutPage.continueButton().click();

        checkoutPage.itemTotal().then(($el) => {

            checkoutPage.finishCheckout();

            cy.url().should('include', '/checkout-complete.html');
            checkoutPage.checkoutHeaderMessage('Thank you for your order!');
            checkoutPage.checkoutTextMessage(`Your order has been dispatched, and will arrive just as fast as the pony can get there!`);

        });
    });

    it('should display an error message when missing first name', () => {
        checkoutPage.fillOutInformation('Joe', 'Doe', '12345');
        checkoutPage.clearOutName();
        checkoutPage.continueCheckout();
        checkoutPage.checkForErrorMessage('First Name is required');
    });
});

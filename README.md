<h1 align="center">Rodeo Assignment</h1>

## 🚀 Installation
First we need to install cypress:

```shell
npm install cypress
```

Open cypress, writting in terminal:

```shell
npx cypress run
```

## 🔥 Executing the tests
To execute the entire set of tests write on the command promp

```shell
npm test
```
to execute one specific test run

```shell
npm start dir/$spec.ts
```

The test results will be recorded in the `e2e/video` and `e2e/screenshots` directory.

## 📁 File structure

Rodeo Assignment
```
cypress/
├─ e2e/
│  ├─ POM/
│  │  ├─ CheckoutPage.ts
│  │  ├─ LoginPage.ts
│  │  ├─ ProductsPage.ts
│  │  ├─ ShopingCartPage.ts
│  ├─ tests/
│  │  ├─ Checkout.cy.ts
│  │  ├─ Login.cy.ts
│  │  ├─ Product.cy.ts
├─ fixtures/
│  ├─ constants.js
├─ plugin/
│  ├─ index.js
├─ support/
│  ├─ e2e.js
│  ├─ commands.js
.env
.gitignore
.cypress.config.ts
package-lock.json
package.json
tsconfig.json
```

## 🚚 Deliverability within 8 hour timeframe

<h3>Completed</h3>

1.Attempt to login with wrong credentials, empty fields

2. Login with all user privileges, authentication successfully:
    - standard_user
    - locked_out_user
    - problem_user
    - performance_glitch_user    
3. User type [**Standard user]**  adds 1 random product to the product card from homepage and 2nd product from the details page, then navigate to the product card and successfully checkout by filling the form with correct data/format. Logs out successfully
    - List of assertions, item has to be in the basket Title, description, price.
    - Checkout form cannot be empty, validate the checkout form
    - Validate total price, move to finish and validate message
    - Logout successfully

<h3>Unfinished</h3>

1. Verify login page with empty password or username field
2. User fills product basket, then logs out. After re-logging in the basket is full
3. Attempt to checkout from the product basket with empty products
4. Attempt to validate the checkout form with wrong data && with empty products
5. User type [**Standard user]**  removes 1 product from his product basket successfully and logs out
7. User type [**Standard user]** verifies sorting of item list by asc,desc, order && price low high

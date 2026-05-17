import { cartLocators, productsLocators } from '../locators/locators'

class CartPage {

  viewCart() {
    cy.contains(productsLocators.viewCart).click()
  }

  openCart() {
    cy.get(cartLocators.cartIcon).first().click()
  }

  proceedToCheckout() {
    cy.get(cartLocators.checkoutBtn).click()
  }

  goToRegisterLogin() {
    cy.contains('a', 'Register / Login').click()
  }
}

export default new CartPage()
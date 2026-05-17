import { productsLocators } from '../locators/locators'

class ProductsPage {

  visit() {
    cy.visit('https://automationexercise.com/products')
  }

  verifyPage() {
    cy.contains('All Products').should('be.visible')
  }

  addProduct(productName) {
    cy.get(productsLocators.productCard)
      .contains(productName)
      .parents(productsLocators.productCard)
      .trigger('mouseover')
      .contains(productsLocators.addToCart)
      .click()
  }

  closeModal() {
    cy.get(productsLocators.modalClose).click()
  }
}

export default new ProductsPage()
import { paymentLocators } from '../locators/locators'

class PaymentPage {

  fillCard(data) {
    cy.get(paymentLocators.nameOnCard).type(data.name)
    cy.get(paymentLocators.cardNumber).type(data.number)
    cy.get(paymentLocators.cvc).type(data.cvc)
    cy.get(paymentLocators.expiryMonth).type(data.month)
    cy.get(paymentLocators.expiryYear).type(data.year)
  }

  submit() {
    cy.get(paymentLocators.submit).click()
  }

  verifyOrder() {
    cy.contains('Order Placed!').should('be.visible')
  }
}

export default new PaymentPage()
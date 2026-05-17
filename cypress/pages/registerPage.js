import { authLocators } from '../locators/locators'

class AuthPage {

  openSignup(name, email) {
    cy.get(authLocators.signupName).type(name)
    cy.get(authLocators.signupEmail).type(email)
    cy.get(authLocators.signupButton).click()
  }

  fillForm(data) {

    cy.get(authLocators.gender).check()
    cy.get(authLocators.days).select(data.day)
    cy.get(authLocators.months).select(data.month)
    cy.get(authLocators.years).select(data.year)

    cy.get(authLocators.firstName).type(data.firstName)
    cy.get(authLocators.lastName).type(data.lastName)
    cy.get(authLocators.password).type(data.password)

    cy.get(authLocators.address1).type(data.address)
    cy.get(authLocators.country).select(data.country)
    cy.get(authLocators.state).type(data.state)
    cy.get(authLocators.city).type(data.city)
    cy.get(authLocators.zipcode).type(data.zipcode)
    cy.get(authLocators.mobile).type(data.mobile)
  }

  createAccount() {
    cy.get(authLocators.createAccountBtn).click()
  }

  continue() {
    cy.get(authLocators.continueBtn).click()
  }
}

export default new AuthPage()
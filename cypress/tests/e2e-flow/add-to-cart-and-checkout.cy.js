import ProductsPage from '../../pages/productPage'
import CartPage from '../../pages/cartPage'
import AuthPage from '../../pages/registerPage'
import cartPage from '../../pages/cartPage'
import { productsLocators } from '../../locators/locators'
import PaymentPage from '../../pages/paymentPage'

describe('AutomationExercise Flow Refactor', () => {

  it('complete purchase flow', () => {

    ProductsPage.visit()
    ProductsPage.verifyPage()

    ProductsPage.addProduct('Sleeveless Dress')
    ProductsPage.closeModal()
    ProductsPage.addProduct('Stylish Dress')

    CartPage.viewCart()
    CartPage.proceedToCheckout()
    CartPage.goToRegisterLogin()

    const email = `user${Date.now()}@mail.com`

    AuthPage.openSignup('QA User', email)

    AuthPage.fillForm({
      day: '18',
      month: 'March',
      year: '1996',
      firstName: 'QA',
      lastName: 'User',
      password: 'Test1234',
      address: 'Calle Falsa 123',
      country: 'United States',
      state: 'California',
      city: 'Los Angeles',
      zipcode: '90001',
      mobile: '1234567890'
    })

    AuthPage.createAccount()
    AuthPage.continue()
    CartPage.openCart()
    CartPage.proceedToCheckout()
        CartPage.proceedToCheckout()


    // ---------------- PAYMENT ----------------
    PaymentPage.fillCard({
      name: 'QA User',
      number: '4111111111111111',
      cvc: '123',
      month: '12',
      year: '2040'
    })

    PaymentPage.submit()
    PaymentPage.verifyOrder()
  })

})
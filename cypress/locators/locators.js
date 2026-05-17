// ================= PRODUCTS =================
export const productsLocators = {
  productCard: '.product-image-wrapper',
  addToCart: 'Add to cart',
  viewCart: 'View Cart',
  modalClose: '.btn-success.close-modal.btn-block'
}

// ================= CART =================
export const cartLocators = {
  checkoutBtn: '.btn.btn-default.check_out',
  cartIcon: '.fa-shopping-cart',
  registerLoginLink: 'a[href="/login"], a:contains("Register / Login")'
}

// ================= AUTH =================
export const authLocators = {
  signupName: '[data-qa="signup-name"]',
  signupEmail: '[data-qa="signup-email"]',
  signupButton: '[data-qa="signup-button"]',

  gender: '#id_gender2',
  days: '#days',
  months: '#months',
  years: '#years',

  firstName: '[data-qa="first_name"]',
  lastName: '[data-qa="last_name"]',
  password: '[data-qa="password"]',

  address1: '#address1',
  country: '#country',
  state: '#state',
  city: '#city',
  zipcode: '#zipcode',
  mobile: '#mobile_number',

  createAccountBtn: '[data-qa="create-account"]',
  continueBtn: '[data-qa="continue-button"]'

  
}
export const paymentLocators = {
  nameOnCard: '[data-qa="name-on-card"]',
  cardNumber: '.form-control.card-number',
  cvc: '.form-control.card-cvc',
  expiryMonth: '.form-control.card-expiry-month',
  expiryYear: '.form-control.card-expiry-year',
  submit: '#submit'
}
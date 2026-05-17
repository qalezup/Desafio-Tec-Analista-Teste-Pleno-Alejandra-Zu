
import { randomQaleName, randomLastName, buildFullName, buildEmail } from './utils'

Cypress.randomQaleName = randomQaleName
Cypress.randomLastName = randomLastName
Cypress.buildFullName = buildFullName
Cypress.buildEmail = buildEmail

Cypress.Commands.add('getProductsList', () => {
  return cy.request({
    method: 'GET',
    url: 'https://automationexercise.com/api/productsList'
  }).then((response) => {
    const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
    return {
      status: response.status,
      body
    }
  })
})

Cypress.Commands.add('createAccount', (payload) => {
  return cy.request({
    method: 'POST',
    url: 'https://automationexercise.com/api/createAccount',
    body: payload
    
  }).then((response) => {
    const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
    return {
      status: response.status,
      body
    }
  })
})
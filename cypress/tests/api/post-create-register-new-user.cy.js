describe('api/Create Account New User', () => {
  beforeEach(() => {
    cy.fixture('create-account.json').then((payload) => {
      const firstName = payload.firstname
      const lastName = Cypress.randomLastName(6)
      const fullName = Cypress.buildFullName(firstName, lastName)

      const cloned = Object.assign({}, payload, {
        lastname: lastName,
        name: fullName
      })

      const uniqueEmail = Cypress.buildEmail(firstName, lastName)

      cy.wrap(cloned).as('payload')
      cy.wrap(uniqueEmail).as('uniqueEmail')
    })
  })

  it('Should return status code 201', () => {
    cy.get('@payload').then((payload) => {
      const data = Object.assign({}, payload)
      cy.get('@uniqueEmail').then((uniqueEmail) => {
        data.email = uniqueEmail
        cy.createAccount(data).then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.property('message', 'User created!')
        })
      })
    })
  })

  it('Should NOT create a user when email has invalid format', () => {
    cy.get('@payload').then((payload) => {
      const data = Object.assign({}, payload)
      data.email = 'plainTextEmail'
      cy.createAccount(data).then((response) => {
        expect(response.status).to.eq(400)
        expect(response.body).to.not.have.property('message', 'User created!')
      })
    })
  })

})

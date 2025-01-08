describe('basicLogin', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  })

  it('Navigates to Heroku Main Page', () => {
    cy.url().should('include', '/login')
  })

  it('Login with valid credentials', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()
    cy.get('.flash.success')
    .should('be.visible');
  })

  it('Prevent invalid login credentials', () => {
    cy.get('#username').type('tomsmith1')
    cy.get('#password').type('SuperSecretPassword!2')
    cy.get('.fa').click()
    cy.get('.flash.error')
      .should('be.visible')
  })
})

describe('Logout', () =>{
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()
    cy.get('.flash.success')
      .should('be.visible');
  })

  it('Logout', () => {
    cy.get('h2').contains('Secure').should('be.visible')
    cy.get('a[href="/logout"]').click()
    cy.get('.flash.success')
      .should('contain', 'You logged out of the secure area!')
  })
})
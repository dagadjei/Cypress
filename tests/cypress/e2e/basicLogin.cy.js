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
  })

  it('Prevent invalid login credentials', () => {
    cy.get('#username').type('tomsmith1')
    cy.get('#password').type('SuperSecretPassword!2')
    cy.get('.fa').click()
    cy.get('.flash.error')
      .should('be.visible')
  })
})

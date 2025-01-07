describe('basicLogin', () => {
  it('Navigates to Heroku Main Page', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.url().should('include', '/login')
  })
})
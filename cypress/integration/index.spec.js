describe('Home page', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Should display the app bar', () => {
    cy.get('.LayoutTitle').contains('Next Sample')
  })
})

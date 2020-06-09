describe('Integration test with visual testing', function () {
  it('Loads the pricing page', function () {
    // Load the page or perform any other interactions with the app.
    cy.visit('https://taskworld.com/th/pricing/')

    cy.findByText('ติดต่อเพื่อสอบถามราคา').should('exist')
    // Take a snapshot for visual diffing
    cy.percySnapshot()
  })
})

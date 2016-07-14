it('works', function () {
  cy.visit('http://localhost:4200/select')
  cy.get('.ember-power-select-trigger').first().click()
    .get('.ember-power-select-option').contains('one').click()
    .root().should('contain', 'Georgia');

    // cy.get(s.inputFetchedList('payment-method')).first().click()
    //   .get('.ember-power-select-option').contains('ach').click()
    //   .root().should('contain', 'Recipient Name')
});

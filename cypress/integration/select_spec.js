describe('select', function() {

  it('attempt one, what I thought should work', function () {
    cy.visit('http://localhost:4200/select')

    let wrapper_selector = '.state-wrapper';
    let target_selector = '.my-select .ember-power-select-trigger'
    let contentId = Cypress.$(wrapper_selector + ' ' + target_selector).attr('aria-controls')
    console.log('contentId', contentId)

    cy.get(wrapper_selector + ' ' + target_selector).click()
      .root()
      .get('#' + contentId + ' ' + ".ember-power-select-option").contains('Georgia').click()
      .should('contain', 'WORKING');
  });

  it('convoluted desperate attempt 2', function () {
    cy.visit('http://localhost:4200/select')

    let wrapper_selector = '.state-wrapper';
    let target_selector = '.my-select .ember-power-select-trigger'
    let contentId = Cypress.$(wrapper_selector + ' ' + target_selector).attr('aria-controls')
    console.log('contentId', contentId)


    cy.get(wrapper_selector).within(() => {
      cy.get('.ember-power-select-trigger').click().then(function () {  // open the select options and then
        let contentId = Cypress.$('.ember-power-select-trigger').attr('aria-controls')
        console.log('contentId', contentId)

        cy.get('#' + contentId + ' ' + ".ember-power-select-option").contains('Georgia').click() // select Alabama
          .root().should('contain', 'WORKING');
      });
    });
  });

});

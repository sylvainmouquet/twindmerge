describe('twindmerge browser test', () => {
  it('should apply the correct color class to the div', () => {
    cy.visit('/');
    cy.get('div').should('have.class', 'text-red-200').and('not.have.class', 'text-gray-500');
  });
});

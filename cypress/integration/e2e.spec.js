describe('SearchPage tests', function () {
    beforeEach(function() {
        cy.request('GET', 'http://localhost:8080/');
        cy.visit('http://localhost:8080/');
    })

    it('search page loaded succesfully', function () {
        cy.url().should('include', '/search');
    });
    
    it('search page doesn\'t search any movie', function () {
        cy.get('.search-input').type('qwe123').type('{enter}');
        cy.url().should('include', '/search?search=qwe123');
        cy.get('.movie-grid > label').contains('No films found');
    });

    it('search page search "pulp fincion"', function () {
        cy.get('.search-input').type('pulp').type('{enter}');
        cy.url().should('include', '/search?search=pulp');
        cy.get('.sort-by-lane > label').contains('1 movies found');
        cy.get('.movie-card');
        cy.get('.movie-card-title').contains('Pulp Fiction');
    });
});
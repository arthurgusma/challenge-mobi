describe('API integration test', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.intercept('GET', 'https://parallelum.com.br/fipe/api/v1/carros/marcas').as('getBrands')
    });

    describe('API Integration Tests', () => {
        it('should fetch models when a brand is selected', () => {
        cy.wait('@getBrands');
        cy.intercept('GET', 'https://parallelum.com.br/fipe/api/v1/carros/marcas/*/modelos').as('getModels')
        
        cy.get('[data-testid="brand-select"]').click()
        cy.contains('Audi').click()
        
        cy.wait('@getModels').its('request.url').should('include', '/modelos')
        cy.get('[data-testid="model-select"]').should('not.be.disabled')
        })
        
        it('should fetch years when a model is selected', () => {
        cy.wait('@getBrands')
        cy.intercept('GET', 'https://parallelum.com.br/fipe/api/v1/carros/marcas/*/modelos').as('getModels')
        cy.intercept('GET', 'https://parallelum.com.br/fipe/api/v1/carros/marcas/*/modelos/*/anos').as('getYears')
        
        cy.get('[data-testid="brand-select"]').click()
        cy.contains('Audi').click()
        
        cy.wait('@getModels')
        cy.get('[data-testid="model-select"]').click()
        cy.contains('80 2.0').click()
        
        cy.wait('@getYears').its('request.url').should('include', '/anos')
        cy.get('[data-testid="year-select"]').should('not.be.disabled')
        })
    });
})
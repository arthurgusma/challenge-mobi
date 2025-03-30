describe('Vehicle Selection Flow', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.intercept('GET', 'https://parallelum.com.br/fipe/api/v1/carros/marcas').as('getBrands')
  });

  describe('User Flow Tests', () => {
    it('should complete the full vehicle selection flow', () => {
      cy.wait('@getBrands')
      cy.intercept('GET', 'https://parallelum.com.br/fipe/api/v1/carros/marcas/*/modelos').as('getModels')
      cy.intercept('GET', 'https://parallelum.com.br/fipe/api/v1/carros/marcas/*/modelos/*/anos').as('getYears')
      cy.intercept('GET', 'https://parallelum.com.br/fipe/api/v1/carros/marcas/*/modelos/*/anos/*').as('getVehicleDetails')
      
      cy.get('[data-testid="brand-select"]').click()
      cy.contains('Audi').click()
      
      cy.wait('@getModels')
      
      cy.get('[data-testid="model-select"]').click()
      cy.contains('80 2.0').click()
      
      cy.wait('@getYears')
      
      cy.get('[data-testid="year-select"]').click()
      cy.contains('1995 Gasolina').click()
      
      cy.get('[data-testid="search-button"]').should('be.enabled')
      cy.get('[data-testid="search-button"]').click()
      
      cy.url().should('include', '/resultado')

      cy.wait('@getVehicleDetails')

      cy.get('[data-testid="header-title"]').should('contain', 'Tabela Fipe: Preço Audi 80 2.0 1995')
      cy.get('[data-testid="display-price"]').should('exist')
    });
    
  });
});
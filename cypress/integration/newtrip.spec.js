describe('creating a trip', () => {
  beforeEach(() => {

    cy.visit('http://localhost:3000/')
  })

  it('should not initially have any trips', () => {
    cy.get('.App').should('not.contain.html', 'article')
  })

  it('should navigate to the trip page', () => {
    cy.contains('New Trip').click()
    cy.get('main')
    .should('contain.html', 'form')
    .get('.Map--container').should('exist')
  })

  it('should let you choose a marina', () => {
    cy.contains('New Trip').click()
    cy.get('.Map--container').dblclick()
    cy.get('.POICard').should('exist')
    .should('contain', 'Woods Hole')
    .contains('Select').click()

    cy.get('.marina-name').should('contain', 'Woods Hole')
  })

  it('should highlight a chosen marina', () => {
    cy.contains('New Trip').click()
    cy.get('.Map--container').dblclick()
    cy.get('.POICard').contains('Select').click()
    .get('.POICard').should('have.class', 'highlighted__true')
  })
  
  it('should let you choose a date', () => {
    cy.contains('New Trip').click()
    cy.get('input[type=date]').should('exist')
    .click()
    .type('1995-02-24')
    .should('have.value', '1995-02-24')
  })

  it('should let you create a new trip', () => {
    cy.contains('New Trip').click()
    cy.get('.Map--container').dblclick()
    cy.get('.POICard').contains('Select').click()

    cy.get('input[type=date]').click().type('1995-02-24')

    cy.contains('Submit').click()

    cy.contains('How will you travel')
    .should('exist')

    // cy.contains('Home').click()
    // cy.contains('Woods Hole').should('exist')
    // cy.contains('2/24').should('exist')

  })

  it('should let you search for destinations', () => {
    cy.contains('New Trip').click()
    cy.get('.Map--container').dblclick()
    cy.get('.POICard').contains('Select').click()

    cy.get('input[type=date]').click().type('1995-02-24')

    cy.contains('Submit').click()

    cy.get('select[name=locomotion]').should('have.value', 'walk')
    .select('Bike').should('have.value', 'bike')

  })
})

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
    cy.fixture('marinas.json').then(data => {
      cy.intercept('GET', 'https://api.marinas.com/v1/points/search*', data)
      cy.contains('New Trip').click()
      cy.get('.Map--container').dblclick()
      cy.get('.POICard').should('exist')
      .should('contain', 'Woods Hole')
      .contains('Select').click()
      cy.get('.marina-name').should('contain', 'Woods Hole')
    })
  })

  it('should highlight a chosen marina', () => {
    cy.fixture('marinas.json').then(data => {
      cy.intercept('GET', 'https://api.marinas.com/v1/points/search*', data)
      cy.contains('New Trip').click()
      cy.get('.Map--container').dblclick()
      cy.get('.POICard').contains('Select').click()
      .get('.POICard').should('have.class', 'highlighted__true')
    })
  })
  
  it('should let you choose a date', () => {
    cy.fixture('marinas.json').then(data => {
      cy.intercept('GET', 'https://api.marinas.com/v1/points/search*', data)
    cy.contains('New Trip').click()
    cy.get('input[type=date]').should('exist')
    .click()
    .type('1995-02-24')
    .should('have.value', '1995-02-24')
  })
})

  it('should let you create a new trip', () => {
    cy.fixture('marinas.json').then(data => {
      cy.intercept('GET', 'https://api.marinas.com/v1/points/search*', data)
      cy.contains('New Trip').click()
      cy.get('.Map--container').dblclick()
      cy.get('.POICard').contains('Select').click()

      cy.get('input[type=date]').click().type('1995-02-24')

      cy.contains('Submit').click()

      cy.contains('How will you travel')
      .should('exist')

    })
  })

  it('should let you search for destinations', () => {
    cy.fixture('marinas.json').then(data => {
      cy.intercept('GET', 'https://api.marinas.com/v1/points/search', data)
      cy.contains('New Trip').click()
      cy.get('.Map--container').dblclick()
      cy.get('.POICard').contains('Select').click()

      cy.get('input[type=date]').click().type('1995-02-24')

      cy.contains('Submit').click()

      cy.get('select[name=locomotion]').should('have.value', 'walk')
      .select('Bike').should('have.value', 'bike')

      cy.get('input[type=number]').click().clear().type('10')
      .should('have.value', '10')

      cy.get('select[name=poi]').should('have.value', 'restaurants')
      .select('Grocery Stores').should('have.value', 'grocery-stores')

      cy.contains('Submit').click()
      cy.get('.POICard').should('exist')
      .should('contain', 'Eel Pond')
    })
  })
  it('should let you search for destinations', () => {
    cy.fixture('marinas.json').then(data => {
      cy.intercept('GET', 'https://api.marinas.com/v1/points/search', data)
      cy.contains('New Trip').click()
      cy.get('.Map--container').dblclick()
      cy.get('.POICard').contains('Select').click()

      cy.get('input[type=date]').click().type('1995-02-24')

      cy.contains('Submit').click()

      cy.get('select[name=locomotion]').should('have.value', 'walk')
      .select('Bike').should('have.value', 'bike')

      cy.get('input[type=number]').click().clear().type('10')
      .should('have.value', '10')

      cy.get('select[name=poi]').should('have.value', 'restaurants')
      .select('Grocery Stores').should('have.value', 'grocery-stores')

      cy.contains('Submit').click()
      cy.get('.POICard').should('exist')
      .should('contain', 'Eel Pond')
    })
  })
})

describe('adding destinations', () => {
  beforeEach(() => {
    cy.fixture('marinas.json').then(data => {
      cy.intercept('GET', 'https://api.marinas.com/v1/points/search*', data)
      cy.visit('http://localhost:3000/')
      cy.contains('New Trip').click()
      cy.get('.Map--container').dblclick()
      cy.get('.POICard').contains('Select').click()

      cy.get('input[type=date]').click().type('1995-02-24')

      cy.contains('Submit').click()

      cy.get('select[name=locomotion]').should('have.value', 'walk')
      .select('Bike')

      cy.get('input[type=number]').click().clear().type('10')

      cy.get('select[name=poi]')
      .select('Grocery Stores')

    })
  })
  
  it('should hide select button and show delete button after clicking', () => {
    cy.fixture('marinas.json').then(data => {
      cy.intercept('GET', 'https://api.foursquare.com/v3/*', data)
      cy.contains('Submit').click()
      cy.get('.POICard > button').each((button) => {
        button.click()
      })
      cy.get('button').should('not.contain', 'Select')
      .should('contain', 'Delete')

      cy.get('.POICard > button').each((button) => {
        button.click()
      })
      cy.get('button').should('contain', 'Select')
      .should('not.contain', 'Delete')
    })
  })

  it('should save selected destinations', () => {
    cy.fixture('pois.json').then(data => {
      cy.intercept('GET', 'https://api.foursquare.com/v3/*', data)
      cy.contains('Submit').click()
      cy.get('.POICard > button').each((button) => {
        button.click()
      })
      cy.get('button').should('not.contain', 'Select')
      .should('contain', 'Delete')

      cy.contains('Home').click()

      cy.contains('Woods Hole').should('exist').should('contain', '02-24').click()

      cy.contains('Eel Pond Market').should('exist')
      cy.contains('Woods Hole Market & Provisions').should('exist')
      cy.get('.POICard').should('have.length', 3)
    })
  })

  it('should delete destinations from an existing trip', () => {
    cy.fixture('pois.json').then(data => {
      cy.intercept('GET', 'https://api.foursquare.com/v3/*', data)
      cy.contains('Submit').click()
      cy.get('.POICard > button').each((button) => {
        button.click()
      })

      cy.contains('Home').click()

      cy.contains('Woods Hole').click()

      cy.get('.POICard button').first().click()

      cy.contains('Home').click()

      cy.contains('Woods Hole').click()

      cy.contains('Eel Pond').should('not.exist')
    })
  })

})
describe('First Test', () => {
    it('Loads website', () => {
        cy.visit('http://localhost:3000')
    })
})

describe('Convert', () => {
    it('convertion works correctly', () => {
        cy.visit('http://localhost:3000')

        cy.get('.input')
            .type('https://i1.wp.com/www.success.com/wp-content/uploads/legacy/sites/default/files/15_15.jpg')
            .should('have.value', 'https://i1.wp.com/www.success.com/wp-content/uploads/legacy/sites/default/files/15_15.jpg')

        cy.get('.button').click()
    })
})
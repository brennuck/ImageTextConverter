// describe('My First Test', function() {
//     it('Visits the kitchen sink', function() {
//         // Arrange - setup initial app state
//             // visit a web page
//             // query for an element
//         // Act - take an action
//             // interact with that element
//         // Assert - make a assertion
//             // make an assertion about page content
        
//         cy.visit('https://example.cypress.io')
//     })
// })

// describe('My First Test', function() {
//     it('Finds an element', function() {
//         cy.visit('https://example.cypress.io')

//         cy.contains('type').click()

//         cy.url()
//             .should('include', '/commands/actions')
//     })
// })

// describe('My First Test', function() {
//     it('Makes an insertion', function() {
//         cy.visit('https://example.cypress.io')

//         cy.contains('type').click()

//         cy.url()
//             .should('include', '/commands/actions')
//     })
// })

// describe('My First Test', function() {
//     it('Gets, types and asserts', function() {
//         cy.visit('https://example.cypress.io')

//         cy.contains('type').click()

//         cy.url()
//             .should('include', '/commands/actions')

//         cy.get('.action-email')
//             .type('fake@email.com')
//             .should('have.value', 'fake@email.com')
//     })
// })

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
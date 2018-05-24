describe('taco-taco', () => {
    it('displays and performs properly', () => {
        cy.visit('/')

        cy.get('.top').find('img').should('have.attr', 'src', '/Tacologo.png')

        cy.get(".form").find('select').select("dangerous")
        cy.get(".form").find('button').click()
        cy.get('.taco-title').find('.base-layer').should('have.text', 'Delengua (Beef Tongue)')


    })
})
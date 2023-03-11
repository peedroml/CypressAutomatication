/// <reference types="Cypress"/>

describe('Mi primera prueba',function(){

    it('Mi primer caso de la prueba',function(){

        //Visit
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        
        //Get y Type
        cy.get('.search-keyword').type('ca')

        //Wait
        cy.wait(2000)

        //Should
        cy.get('.product:visible').should('have.length',4)

        //Find
        cy.get('.products').find('.product').should('have.length',4)

        //Eq, Contains y Click
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('.tada').click()

    
    })


})
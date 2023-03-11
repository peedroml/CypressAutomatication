/// <reference types="Cypress"/>

describe('Mi primera prueba',function(){

    it('Mi primer caso de la prueba',function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')

        cy.wait(2000)

        cy.get('.product:visible').should('have.length',4)
    
    })


})
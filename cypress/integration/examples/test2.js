/// <reference types="Cypress"/>

//Prueba de un proceso de compra

describe('Prueba de compra',function(){
    it('Primer caso',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.search-keyword').type('ca')

        cy.get('.products').as('Productos')

        cy.get('@Productos').find('.product').each(function(elem,index,list){
            
            const nombre_prod = elem.text()
            
            if(nombre_prod.includes('Carrot') || nombre_prod.includes('Cauliflower')){
                cy.wrap(elem).find('button').click()
            }
        })

        cy.get('.cart-icon > img').click()

        cy.get('.action-block').find('button').eq(0).click()

        cy.get('.promoWrapper').siblings().contains('Place Order').click()

        cy.get('select').select('Syria')

        cy.get('.chkAgree').click()

        cy.get('button').click()

    })
})


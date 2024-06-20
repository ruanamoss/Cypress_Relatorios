/// <reference types="cypress" />

describe('Autenticação Altaia', ()=>{

    it('Demanda Altaia',()=>{
        cy.visit('http://10.113.135.224/portal/altaia')

           //Clicar no campo UserName e Inserir Texto no campo
            cy.get('#username')
            .click()
            .type('ptin')
        
        
            //Clicar no campo Password e Inserir Texto no campo
            cy.get('#password')
            .click()
            .type('ptinbit')
            

            //Clicar em Login
            cy.get('#login-button').click()



        
        })

})


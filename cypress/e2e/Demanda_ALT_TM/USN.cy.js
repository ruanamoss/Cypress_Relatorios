/// <reference types="cypress" />

describe('Validação demanda UNS', ()=>{

    beforeEach(() => {
        cy.visit('https://altaiatim-fe.c.ptin.corppt.com/portal/altaia');
        //Clicar no campo UserName e Inserir Texto no campo
        cy.get('.fx-floating-label', {timeout:5000})
        .click()
        .type('ptin')
        cy.wait(3000)
        
        cy.get('#continue_button > #next').click()
      
        //Clicar no campo Password e Inserir Texto no campo
        cy.wait(3000)
        cy.get('.fx-floating-label', {timeout:5000}).click()
        .type('ptinbit')
          
        //Clicar em Login
        cy.get('#login').click()
      })

      it('Validar tabela de enriquecimento', ()=>{
        cy.get('.hideshow > :nth-child(1) > .fa', {timeout:100000}).click();
        cy.get('[id^=admin]', {timeout:5000}).find('span').contains("Gestão").click();
        cy.get('[class^=fx-divider-title]', {timeout:5000}).find('span').contains("Inventário").click();
        cy.get('[id^=admin]', {timeout:5000})
        .find('span')
        .contains("Enriquecimentos")
        .click()

        cy.contains('dbn0_ext_enrich.enr_usn_vlrinfo', {timeout:100000})
        .should('be.visible')
        .click()

      })
})
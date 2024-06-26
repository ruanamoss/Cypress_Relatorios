/// <reference types="cypress" />

describe('Validacão DBN1', ()=>{

  //Endereço web repetir sempre em cada caso de teste
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


        it('Validar classe F3G_CELL', ()=>{

            //Acessar DBN1
            cy.get('.hideshow > :nth-child(1) > .fa', {timeout:100000}).click();
            cy.get('[id^=admin]').find('span').contains("Gestão").click();
            //Comportamento inadequado do Portal, as vezes é preciso comentar essa linha 
            cy.get('[class^=fx-divider-title]').find('span').contains("Inventário").click();
            cy.get('[id^=admin]')
            .find('span')
            .contains("DBN1")
            .click();

            //Acessar classe F3G_CELL
            cy.get('#PLMN > .jstree-ocl', {timeout:100000}).click();
            cy.get('#RAN > .jstree-ocl').click();
            cy.get('#F3G_FemtoGW > .jstree-ocl').click();
            cy.get('#F3G_FEMTO > .jstree-ocl').click();
            cy.get('#F3G_CELL_anchor').click()

            //Aumentar o numero de registros
            cy.get('.ng-arrow-wrapper',{timeout:100000}).click();
            cy.get('[class^=scrollable-content]')
            .find('span')
            .contains('50')
            .click();

            //Assertiva para validar atributo 
            cy.contains('FemtoID', {timeout:5000}).should('be.visible');
            cy.contains('Femto_Neighborhood', {timeout:5000}).should('be.visible');
            cy.contains('Femto_Region', {timeout:5000}).should('be.visible');
            cy.contains('Femto_UF', {timeout:5000}).should('be.visible');

            //Assertiva para validar "filhos" da classe
            cy.get('[btnradiogroup=""] > :nth-child(2) > .btn', {timeout:10000}).click();

        })


})
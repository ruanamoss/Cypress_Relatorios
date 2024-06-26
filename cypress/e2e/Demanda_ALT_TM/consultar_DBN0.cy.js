/// <reference types="cypress" />
       
describe('Validacão DBN0', ()=>{

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


    it('Validar Contadores/Atributos CM4G_EthernetPort', ()=>{

      //Acessar DBN0        
      cy.get('.hideshow > :nth-child(1) > .fa', {timeout:100000}).click();
      cy.get('[id^=admin]', {timeout:5000}).find('span').contains("Gestão").click();
      cy.get('[class^=fx-divider-title]', {timeout:5000}).find('span').contains("Inventário").click();
      cy.get('[id^=admin]', {timeout:5000})
      .find('span')
      .contains("DBN0")
      .click();

      //Acessar tabela
      cy.get('#Tabelas_ERI_R4G > .jstree-ocl', {timeout:100000}).click()
      cy.get('#CM4G_EthernetPort_anchor', {timeout:30000}).click()
  
      //Assertiva para validar nome Atributo
      cy.contains('source_id', {timeout:50000}).should('be.visible');
      cy.screenshot('Atributo source_id encontrado')
  
      //Acessar os contadores da tabela
      cy.get('.nossisui-label-href > :nth-child(1) > span', {timeout:30000}).click();
  
      //Assertiva para validar contador
      cy.contains('GRANULARITYPERIOD', {timeout:30000}).should('be.visible');
      cy.contains('USERLABEL', {timeout:30000}).should('be.visible');
      cy.screenshot('Contadores GRANULARITYPERIOD USERLABEL encontrados')
  
      cy.reload(); 
    })
    
    it('Validar Contadores/Atributos CM4G_SctpEndpoint', ()=>{

    //Acessar DBN0        
    cy.get('.hideshow > :nth-child(1) > .fa', {timeout:100000}).click();
    cy.get('[id^=admin]', {timeout:30000}).find('span').contains("Gestão").click();
    cy.get('[class^=fx-divider-title]', {timeout:30000}).find('span').contains("Inventário").click();
    cy.get('[id^=admin]', {timeout:30000})
    .find('span')
    .contains("DBN0")
    .click();

    //Acessar tabela 
    cy.get('#Tabelas_ERI_R4G > .jstree-ocl', {timeout:100000}).click();
    cy.get('#CM4G_SctpEndpoint_anchor', {timeout:30000}).click();

    //Assertiva para validar atributo
    cy.contains('source_id', {timeout:50000}).should('be.visible');

    //Acessar os contadores da tabela
    cy.get('.nossisui-label-href > :nth-child(1) > span', {timeout:30000}).click();

    //Assertiva para validar contadores da tabela
    cy.contains('GRANULARITYPERIOD', {timeout:30000}).should('be.visible');
    
    })


})
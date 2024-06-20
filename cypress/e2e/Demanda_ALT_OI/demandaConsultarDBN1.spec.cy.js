/// <reference types="cypress" />
       
describe('Validacão DBN1', ()=>{

    it('Login',()=>{

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

    it('Acessar DBN1', ()=>{


      //Acessar DBN1        
      cy.get('#admin > .dropdown-toggle > .fa-angle-down').click();
      cy.get('div.dropdown-menu', {timeout:1000}).contains('DBN1').click();
      cy.wait(1000);
      
      //Acessar hierarquia
      //cy.get('div.jstree_div', {timeout:1000}).contains('presentation').click();
      
    })



})
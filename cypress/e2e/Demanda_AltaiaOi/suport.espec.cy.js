/// <reference types="cypress" />

describe('Suporte de código', ()=>{

    //Selecionar e validar radio que contenha apenas uma opção
    it('Botão de escolha única (Radio', ()=>{

        cy.get('#TestForm')
        .click()
        .should('be.checked')
    
        cy.get('#TestForm').should('not.be.checked')

    })

    // Escoler o campo, escrever e validar o nome
    it('Criar métrica',()=>{
    
        cy.get('#Exemplo')
        .type('Metric Teste')
        .should('have.value', 'Metric Teste')
  
    })

    //Busca por lista (ul - li - span)
    it('uso da list', ()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonList').click();
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })

    it('uso do timeout', ()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonDelay').click();
        cy.get('#novoCampo', {timeout:3000}).should('exist')
    })

    it.only('Selecionar elementos na tela por prioridade', ()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
})
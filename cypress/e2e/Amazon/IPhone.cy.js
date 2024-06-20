/// <reference types="cypress" />

describe('Verificar cores dos IPhones', ()=>{

    it('Acessar pagina',() =>{
        cy.visit('https://www.amazon.com.br/?&tag=hydrbrabk-20&ref=pd_sl_7rwd1q78df_e&adgrpid=155790195778&hvpone=&hvptwo=&hvadid=677606588104&hvpos=&hvnetw=g&hvrand=11557648117017491263&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9101626&hvtargid=kwd-10573980&hydadcr=26346_11691057&gad_source=1')
        cy.screenshot('Pagina encontrada')
    })

    it('Verificar cores do iPhone', ()=>{
        cy.visit('https://www.amazon.com.br/?&tag=hydrbrabk-20&ref=pd_sl_7rwd1q78df_e&adgrpid=155790195778&hvpone=&hvptwo=&hvadid=677606588104&hvpos=&hvnetw=g&hvrand=11557648117017491263&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9101626&hvtargid=kwd-10573980&hydadcr=26346_11691057&gad_source=1')

        cy.get('#twotabsearchtextbox')
        .click()
        .type('IPhones 13 pro')
        
        cy.get('#nav-search-submit-button').click()

        cy.contains('Apple iPhone 13 (128 GB) - Meia-noite')
        .should('be.visible')
        cy.screenshot('Meia-noite')

        cy.contains('Apple iPhone 13 Pro Max (128 GB) - Verde-alpino')
        .should('be.visible')
        cy.screenshot('Verde-alpino')
    })



    

})
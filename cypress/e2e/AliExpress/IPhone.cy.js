/// <reference types="cypress" />

describe('Comprar Iphone 13 Pro Max', ()=>{

    it('Acessar pagina',() =>{
        cy.visit('https://pt.aliexpress.com/?src=google&albch=fbrnd&acnt=907-325-7776&isdl=y&aff_short_key=UneMJZVf&albcp=14789065083&albag=128596242158&slnk=&trgt=kwd-14802285088&plac=&crea=623114289819&netw=g&device=c&mtctp=e&memo1=&albbt=Google_7_fbrnd&aff_platform=google&albagn=888888&isSmbActive=false&isSmbAutoCall=false&needSmbHouyi=false&gad_source=1&gclid=CjwKCAjwps-zBhAiEiwALwsVYT2ilglXcAfmCa1NIk1L26iu7OaP0qxe1L4x0trguai9haAp_CYsDhoCukAQAvD_BwE');
        cy.screenshot('Pagina encontrada')
    })

})
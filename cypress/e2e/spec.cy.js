require('cypress-xpath')

describe('User Story', () => {
        it('Skenario1)', () => {
// // //         cy.loginViaUi({ name: 'ilham-test',email: 'panduputra.ilham40000@email.com', password: 'testRekamin123' })
// // //         cy.visit("/")
// // //     })
        cy.visit('https://web-staging.rakamin.com/virtual-internship-experience/explore')
        cy.viewport(1280, 720)
        cy.location().should((url) => {
            expect(url.toString()).to.eq('https://web-staging.rakamin.com/virtual-internship-experience/explore')
        })
        cy.screenshot('Screenshot.jpg')
        // cy.xpath('//*[contains(@class ,"sc-iEJjrp gokvza")]').click().click()
        cy.get("button.sc-fnGiBr.cpkCOd.sc-dmZihf.laHHlH").first().dblclick()
        cy.wait(200)
        cy.location().should((url) => {
            expect(url.toString()).to.eq('https://web-staging.rakamin.com/register')
        })
        cy.wait(2000)
        cy.screenshot('Screenshot.jpg')
        cy.xpath('//*[@name="name"]').type('ilham-test')
        cy.xpath('//*[@name="password"]').type('testRekamin123')
        const mail = '@gmail.com'
        let nama = 'panduput'
        let random = Math.round(Math.random() * 2000)
        cy.xpath('//*[@name="email"]').type(nama + random + mail)
        cy.xpath('//*[@type="submit"]').should('contain', 'Daftar')
        cy.wait(2500)
        cy.screenshot('Screenshot.jpg')
        cy.xpath('//*[@type="submit"]').click()
        cy.wait(2500)
        cy.location().should((url) => {
            expect(url.toString()).to.eq('https://web-staging.rakamin.com/verification')
        })
        cy.xpath('//*[contains(@class ,"sc-fnGiBr dhhUjE")]').should('contain', 'Send Email')
        cy.screenshot('Screenshot.jpg')
        cy.xpath('//*[@id="root"]/div[1]/div[2]/a').click()
        cy.wait(3000)
        cy.screenshot('Screenshot.jpg')
        cy.visit('https://web-staging.rakamin.com/virtual-internship-experience/explore')
        cy.location().should((url) => {
            expect(url.toString()).to.eq('https://web-staging.rakamin.com/virtual-internship-experience/explore')
        })
        cy.viewport(1280, 720)
        cy.wait(3000)
        cy.get('svg.sc-cDvrNk.liVUNY').click()
        cy.xpath('//*[@id="list-vix-vacancy"]').scrollIntoView().should('be.visible')
        cy.xpath('//*[@id="34"]/a/div/div[2]/div').should('be.visible')
        cy.xpath('//*[@id="38"]/a/div/div[1]/div[2]').trigger('mouseover')
        cy.xpath('//*[@id="38"]/a/div/button').trigger('mouseover').click({force: true})
        cy.wait(3000)
        cy.get('button.sc-fnGiBr.IKNPO.sc-kBOfWR.iUvlhW').should('be.visible')
        cy.get('button.sc-fnGiBr.IKNPO.sc-kBOfWR.iUvlhW').click()
        cy.xpath('//*[@name="phone_number"]').type('085777641438')
        cy.xpath('//*[@name="linkedin_url"]').type('https://www.linkedin.com/in/ilham-pandu-putra-03658425b/')
        // cy.get('input[type=file]').selectFile("\\cv.pdf")
        cy.xpath('//*[@data-cy="vix-info-source-option-7"]').click()
        cy.xpath('//*[@placeholder="Masukan platform media social lainnya..."]').should('be.visible')
        cy.xpath('//*[@placeholder="Masukan platform media social lainnya..."]').type('Tech in Asia Jobs')
        cy.xpath('//*[@data-cy="agreement-checkbox"]').click()
        cy.screenshot('screenshot.jpg')
        cy.xpath('//*[@data-cy="vix-form-submit-button"]').click()
        cy.wait(5000)
        cy.screenshot('screenshot.jpg')
        cy.xpath('//*[@data-cy="confirmation-modal-title"]').should('be.visible')
        cy.xpath('//*[@data-cy="button-confirm"]').click()
        cy.get('span.sc-zvsav.sc-bvBvdO.cEDfGa.gtfTOZ').should('be.visible')
        cy.get('span.sc-zvsav.sc-bvBvdO.cEDfGa.gtfTOZ').click()
        cy.get('p.sc-zvsav.gvsewv').should('contain', 'Virtual Internship Experience VIP Access')
        cy.screenshot('screenshot.jpg')
        cy.xpath('//*[@data-cy="continue-to-payment-button"]').click()
        cy.wait(5000)
        //cy.go('back')
        // cy.visit('https://checkout-staging.xendit.co/web/63d20c579a46c8387279223e')
        // cy.get('p.test-white').tab({ ctrl: true }).should('have.text', 'You are in Test Mode and any transactions made are simulated and not real.')
        
    })

    it('Skenario2', () => {
        cy.visit('https://web-staging.rakamin.com/virtual-internship-experience/explore')
        cy.viewport(1280, 720)
        cy.location().should((url) => {
            expect(url.toString()).to.eq('https://web-staging.rakamin.com/virtual-internship-experience/explore')
        })
        // cy.xpath('//*[contains(@class ,"sc-iEJjrp gokvza")]').click().click()
        cy.get("button.sc-fnGiBr.cpkCOd.sc-dmZihf.laHHlH").first().dblclick()
        cy.wait(200)
        cy.location().should((url) => {
            expect(url.toString()).to.eq('https://web-staging.rakamin.com/register')
        })
        cy.wait(2000)
        cy.visit('https://web-staging.rakamin.com/login')
        cy.xpath('//*[@name="email"]').type('panduputra.ilham@gmail.com')
        cy.xpath('//*[@name="password"]').type('testRekamin123')
        cy.xpath('//*[@type="submit"]').should('contain', 'Masuk')
        cy.xpath('//*[@type="submit"]').click()
        cy.wait(3000)
        cy.visit('https://web-staging.rakamin.com/virtual-internship-experience/explore')
        cy.location().should((url) => {
            expect(url.toString()).to.eq('https://web-staging.rakamin.com/virtual-internship-experience/explore')
        })
        cy.viewport(1280, 720)
        cy.wait(3000)
        cy.visit('https://web-staging.rakamin.com/virtual-internship-experience/id-x-partners-data-scientist-virtual-internship-program')
        cy.xpath('//*[@id="root"]/div[1]/div[3]/div[2]/div[1]/div/div/button').click()
        cy.xpath('//*[@data-cy="confirmation-modal-title"]').should('be.visible')
        cy.xpath('//*[@data-cy="button-confirm"]').click()
        cy.get('span.sc-zvsav.sc-bvBvdO.cEDfGa.gtfTOZ').should('be.visible')
        cy.get('span.sc-zvsav.sc-bvBvdO.cEDfGa.gtfTOZ').click()
        cy.get('p.sc-zvsav.gvsewv').should('contain', 'Virtual Internship Experience VIP Access')
        cy.xpath('//*[@data-cy="continue-to-payment-button"]').click()
        cy.wait(5000)
        //cy.go('back')
        // cy.visit('https://checkout-staging.xendit.co/web/63d20c579a46c8387279223e')
       // cy.get('p.test-white').tab({ ctrl: true }).should('have.text', 'You are in Test Mode and any transactions made are simulated and not real.')

    })
})

 // https://web-staging.rakamin.com/checkout
 // 67d6ff950f8e8f16662e

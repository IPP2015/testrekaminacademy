// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Cypress.Commands.add('login', () => { 
Cypress.Commands.add('loginViaUi', (user) => {
  cy.session(
    user,
    () => {
      cy.visit('https://web-staging.rakamin.com/register')
      cy.xpath('//*[@name="name"]').type(user.name)
      cy.xpath('//*[@name="email"]').type(user.email)
      cy.xpath('//*[@name="password"]').type(user.password)
      cy.xpath('//*[@type="submit"]').click()
    },
    {
      validate: () => {
        cy.getCookie('auth_key').should('exist')
      },
    }
  )
})

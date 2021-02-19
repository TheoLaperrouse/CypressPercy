describe('Menu', function() {
    it('click on all menu tabs', function() {
       cy.visit('http://localhost:8080/#/dashboard')
       cy.get('.sidebar-wrapper > .nav > .nav-item:nth-child(2) > .nav-link > p').click()
       cy.get('.sidebar-wrapper > .nav > .nav-item:nth-child(3) > .nav-link > p').click()
       cy.get('.sidebar-wrapper > .nav > .nav-item:nth-child(4) > .nav-link > p').click()
       cy.get('.sidebar-wrapper > .nav > .nav-item:nth-child(5) > .nav-link > p').click()
       cy.get('.sidebar-wrapper > .nav > .nav-item:nth-child(6) > .nav-link > p').click()
       cy.get('.sidebar-wrapper > .nav > .nav-item:nth-child(7) > .nav-link > p').click()
       cy.get('.sidebar-wrapper > .nav > .nav-item:nth-child(8) > .nav-link > p').click()
       cy.percySnapshot();
    })
})
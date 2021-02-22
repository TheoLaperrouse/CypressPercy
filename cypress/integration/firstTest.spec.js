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
    })

    
    describe('visualSnapshot', function() {
        it('IconsPage', function() {
            cy.visit('http://localhost:8080/#/icons')
            cy.percySnapshot();
        })
        it('DashboardPage', function() {
            cy.visit('http://localhost:8080/#/dashboard')
            cy.percySnapshot();
        })
        it('MapsPage', function() {
            cy.visit('http://localhost:8080/#/maps')
            cy.percySnapshot();
        })
        it('Notification', function() {
            cy.visit('http://localhost:8080/#/notifications')
            cy.percySnapshot();
        })
    })
})
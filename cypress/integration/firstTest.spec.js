/* eslint-disable no-undef */


//   it("Menu should have 8 children", () => {
//     cy.get(".sidebar-wrapper > .nav")
//       .children()
//       .should("have.length", 200);
//    });

describe('Menu', function() {
  it('click on all tabs', function() {
     cy.visit('http://localhost:8080/#/dashboard')
     cy.percySnapshot('Dashboard Snapshot');
     cy.get('.sidebar-wrapper > .nav > .nav-item:nth-child(2) > .nav-link > p').click()
     cy.percySnapshot('Icons Snapshot');
     cy.get('.sidebar-wrapper > .nav > .nav-item:nth-child(3) > .nav-link > p').click()
     cy.get('.content > .card > .card-body > .form-group > .form-control').click()
     cy.get('.content > .card > .card-body > .form-group > .form-control').type('du texte')
     cy.percySnapshot('Maps Snapshot');
     cy.get('.sidebar-wrapper > .nav > .nav-item:nth-child(4) > .nav-link > p').click()
     cy.percySnapshot('Notif Snapshot');
  })
 })
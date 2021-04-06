/* eslint-disable no-undef */
describe("Menu", function() {
  it("Click on all tabs", function() {
    cy.viewport(1848, 980);
    cy.visit("http://localhost:8080/#/dashboard");
    cy.get(
      ".sidebar-wrapper > .nav > .nav-item:nth-child(2) > .nav-link > p"
    ).click();
    cy.get(
      ".sidebar-wrapper > .nav > .nav-item:nth-child(3) > .nav-link > p"
    ).click();
    cy.get(
      ".content > .card > .card-body > .form-group > .form-control"
    ).click();
    cy.get(".content > .card > .card-body > .form-group > .form-control").type(
      "du texte"
    );
    cy.get(
      ".sidebar-wrapper > .nav > .nav-item:nth-child(4) > .nav-link > p"
    ).click();
    cy.get(
      ".sidebar-wrapper > .nav > .nav-item:nth-child(5) > .nav-link > p"
    ).click();
    cy.get(
      ".sidebar-wrapper > .nav > .nav-item:nth-child(6) > .nav-link > p"
    ).click();
    cy.get(
      ".sidebar-wrapper > .nav > .nav-item:nth-child(7) > .nav-link > p"
    ).click();
    cy.get(
      ".sidebar-wrapper > .nav > .nav-item:nth-child(8) > .nav-link > p"
    ).click();
  });

//   it("Menu should have 12 children", () => {
//     cy.get(".sidebar-wrapper > .nav")
//       .children()
//       .should("have.length", );
//   });
});

/* 
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
    })*/

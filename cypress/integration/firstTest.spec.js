/* eslint-disable no-undef */

//   it("Menu should have 8 children", () => {
//     cy.get(".sidebar-wrapper > .nav")
//       .children()
//       .should("have.length", 200);
//    });

describe("Snap", function() {
  it("Take a screenshoot of dashboard", function() {
    cy.visit("http://localhost:8080/#/dashboard");
    cy.percySnapshot("Dashboard Snapshot");
   });
});

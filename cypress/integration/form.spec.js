describe("Form test", function() {
  const baseURL = "/src/index.html";

  beforeEach(function() {
    cy.visit(baseURL);
    cy.wait(1000);
  });

  it( 'can submit a form when all required fields are not empty', function() {
    cy.get("#validationDefault01").type("John");
    cy.get("#validationDefault02").type("Doe");
    cy.get("#validationDefaultUsername").type("john_doe");
    cy.get("#validationDefault03").type("Auckland");
    cy.get("#validationDefault04").type("Auckland");
    cy.get("#validationDefault05").type("1106");
    cy.get("#invalidCheck2").click();
    cy.get(".js-submit").click();
  })
});

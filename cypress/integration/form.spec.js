describe("Form test", function() {
  const baseURL = "/src/index.html";

  beforeEach(function() {
    cy.visit(baseURL);
    cy.wait(1000);
  });

  it( 'can submit a form when all required fields are NOT empty', function() {
    cy.get("#validationCustom01").type("John");
    cy.get("#validationCustom02").type("Doe");
    cy.get("#validationCustomUsername").type("john_doe");
    cy.get("#validationCustom03").type("Auckland");
    cy.get("#validationCustom04").type("Auckland");
    cy.get("#validationCustom05").type("1106");
    cy.get("#invalidCheck").click();
    cy.get(".js-submit").click();
  })

  it( 'cannot submit a form when all required fields are empty', function() {
    // cy.get("#validationDefault01").type("John");
    // cy.get("#validationDefault02").type("Doe");
    // cy.get("#validationDefaultUsername").type("john_doe");
    // cy.get("#validationDefault03").type("Auckland");
    // cy.get("#validationDefault04").type("Auckland");
    // cy.get("#validationDefault05").type("1106");
    // cy.get("#invalidCheck2").click();
    cy.get(".js-submit").click();
  })
});

describe("Flujo de Compra en la pagina www.saucedemo.com", function () {
  it("Prueba E2e - Compra exitosa", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get("#login-button").click();
    cy.get(".btn_inventory").eq(0).click();
    cy.get(".btn_inventory").eq(1).click();
    cy.get(".shopping_cart_link").click();
    cy.get(".checkout_button").click();
    cy.get('[data-test="firstName"]').type("Santiago");
    cy.get('[data-test="lastName"]').type("Agost");
    cy.get('[data-test="postalCode"]').type("5000");
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.get(".complete-header").should(
      "contain.text",
      "Thank you for your order!"
    );
  });
});

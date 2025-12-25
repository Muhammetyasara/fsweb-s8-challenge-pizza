describe("Pizza Sipariş Formu", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/order");
  });

  it("input alanına metin girilebilmeli", () => {
    cy.get('input[name="name"]').type("Mehmet").should("have.value", "Mehmet");
  });

  it("birden fazla malzeme seçilebilmeli", () => {
    cy.get('input[type="checkbox"][value="Pepperoni"]').check();
    cy.get('input[type="checkbox"][value="Sosis"]').check();
    cy.get('input[type="checkbox"][value="Mantar"]').check();
    cy.get('input[type="checkbox"][value="Zeytin"]').check();
    cy.get('input[type="checkbox"]:checked').should("have.length.at.least", 4);
  });

  it("form gönderilebilmeli", () => {
    cy.intercept("POST", "https://reqres.in/api/pizza", {
      statusCode: 201,
      body: { success: true },
    }).as("submitOrder");

    cy.get('input[name="name"]').type("Mehmet");
    cy.get('input[type="radio"][value="medium"]').check();
    cy.get('select[name="dough"]').select("thin");

    cy.get('input[type="checkbox"][value="Pepperoni"]').check();
    cy.get('input[type="checkbox"][value="Sosis"]').check();
    cy.get('input[type="checkbox"][value="Mantar"]').check();
    cy.get('input[type="checkbox"][value="Zeytin"]').check();

    cy.contains("SİPARİŞ VER").click();
    cy.wait("@submitOrder");
  });
});
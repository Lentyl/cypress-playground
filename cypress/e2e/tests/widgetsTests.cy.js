


describe('Home page sandbox smoke tests', () => {

    const testData = new TestData();

    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl);
        HomePage.navigateToHomePage();
    })



})


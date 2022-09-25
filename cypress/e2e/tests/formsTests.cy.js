import BasePage from '../Pages/BasePage';
import FormsPage from '../Pages/forms/FormsPage';

describe('Home page sandbox smoke tests', () => {


    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl);
        cy.get(BasePage.forms_card).click();
        BasePage.shrinkFooter();
    })

    it('Practice Form - test', () => {
        cy.xpath(FormsPage.xpath_practice_form_tab).click();
        FormsPage.fillAndConfirmForm();
        FormsPage.confirmationWindowDetailsCheck();
    })



})
import BasePage from '../BasePage'

export default class LinksPage extends BasePage {

    static xpath_links_tab = '//li[child::span[text()="Links"]]';

    //links that open new tab
    static home_link = 'a#simpleLink';
    static dynamic_home_link = 'a#dynamicLink';

    //links will send an api call
    static created_link = 'a#created';
    static no_content_link = 'a#no-content';
    static moved_link = 'a#moved';
    static bad_request_link = 'a#bad-request';
    static unauthorized_link = 'a#unauthorized';
    static forbidden_link = 'a#forbidden';
    static not_Found_link = 'a#invalid-url';

    static request_response_text = 'p#linkResponse';

    static openNewTabLinksCheck = () => {
        cy.get(LinksPage.home_link).invoke('removeAttr', 'target').click();
        cy.origin("https://demoqa.com/", () => { })
        cy.get(LinksPage.elements_card).should('be.visible');
        cy.go('back');
        cy.get(LinksPage.dynamic_home_link).invoke('removeAttr', 'target').click();
        cy.go('back');
    }

    static sendApiCallLinksCheck = () => {
        cy.get(LinksPage.created_link).click();
        cy.get(LinksPage.request_response_text).should('have.text', 'Link has responded with staus 201 and status text Created');
        cy.get(LinksPage.no_content_link).click();
        cy.get(LinksPage.request_response_text).should('have.text', 'Link has responded with staus 204 and status text No Content');
        cy.get(LinksPage.moved_link).click();
        cy.get(LinksPage.request_response_text).should('have.text', 'Link has responded with staus 301 and status text Moved Permanently');
        cy.get(LinksPage.bad_request_link).click();
        cy.get(LinksPage.request_response_text).should('have.text', 'Link has responded with staus 400 and status text Bad Request');
        cy.get(LinksPage.unauthorized_link).click();
        cy.get(LinksPage.request_response_text).should('have.text', 'Link has responded with staus 401 and status text Unauthorized');
        cy.get(LinksPage.forbidden_link).click();
        cy.get(LinksPage.request_response_text).should('have.text', 'Link has responded with staus 403 and status text Forbidden');
        cy.get(LinksPage.not_Found_link).click();
        cy.get(LinksPage.request_response_text).should('have.text', 'Link has responded with staus 404 and status text Not Found');
    }

}
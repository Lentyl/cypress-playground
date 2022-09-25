import BasePage from '../BasePage'

export default class DyamicPropertiesPage extends BasePage {

    static xpath_dynamic_Properties_tab = '//li[child::span[contains(text(),"Dynamic Properties")]]';

    static random_id_text = '.col-12 p';
    static enable_after_five_sec_button = 'button#enableAfter';
    static color_change_button = 'button#colorChange.text-danger';
    static visible_after_five_sec_button = 'button#visibleAfter';


    static dynamic_properties_check = () => {
        cy.get(DyamicPropertiesPage.random_id_text).should('have.text', 'This text has random Id');
        cy.get(DyamicPropertiesPage.enable_after_five_sec_button).should('have.text', 'Will enable 5 seconds');
        cy.get(DyamicPropertiesPage.color_change_button).should('have.css', 'color', 'rgb(220, 53, 69)').should('have.text', 'Color Change');
        cy.get(DyamicPropertiesPage.visible_after_five_sec_button).should('have.text', 'Visible After 5 Seconds');
    }
}








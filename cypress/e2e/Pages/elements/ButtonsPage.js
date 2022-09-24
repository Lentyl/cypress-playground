import BasePage from '../BasePage'

export default class ButtosPage extends BasePage {

    static xpath_buttons_tab = '//li[child::span[contains(text(),"Buttons")]]';

    //buttons
    static double_click_button = 'button#doubleClickBtn';
    static right_click_button = 'button#rightClickBtn';
    static xpath_click_me_button = '//button[text()="Click Me"]';

    //messages 
    static double_click_text = 'p#doubleClickMessage';
    static right_click_text = 'p#rightClickMessage';
    static dynamic_click_me_text = 'p#dynamicClickMessage';


    static buttonsCheck = () => {
        cy.get(ButtosPage.double_click_button).dblclick();
        cy.get(ButtosPage.double_click_text).should('have.text', 'You have done a double click');
        cy.get(ButtosPage.right_click_button).rightclick();
        cy.get(ButtosPage.right_click_text).should('have.text', 'You have done a right click');
        cy.xpath(ButtosPage.xpath_click_me_button).click();
        cy.get(ButtosPage.dynamic_click_me_text).should('have.text', 'You have done a dynamic click');
    }

}
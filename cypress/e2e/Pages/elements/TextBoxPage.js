import BasePage from '../BasePage'

export default class TextBoxPage extends BasePage {

    static xpath_text_box_tab = '//li[child::span[contains(text(),"Text Box")]]';
    static full_name_input = 'input#userName';
    static email_input = 'input#userEmail';
    static current_address_input = 'textarea#currentAddress';
    static permanent_address_input = 'textarea#permanentAddress';
    static submit_button = 'button#submit';
    static confirmed_details = 'div.border > p';

    static fillFormAndSubmit = () => {
        cy.get(TextBoxPage.full_name_input).clear().type(TextBoxPage.testData.full_name);
        cy.get(TextBoxPage.email_input).clear().type(TextBoxPage.testData.email);
        cy.get(TextBoxPage.current_address_input).clear().type(TextBoxPage.testData.current_address);
        cy.get(TextBoxPage.permanent_address_input).clear().type(TextBoxPage.testData.premanent_address);
        cy.get(TextBoxPage.submit_button).click();
    }

    static user_detalis_check = () => {

        cy.get(TextBoxPage.confirmed_details).then($el => {
            expect($el.eq(0).text()).to.contain('Name:Mariusz Podgorski');
            expect($el.eq(1).text()).to.contain('Email:mar84@wp.pl');
            expect($el.eq(2).text()).to.contain('Current Address :Kazimierza wielkiego 99A/33, 09-100 Płońsk');
            expect($el.eq(3).text()).to.contain('Permananet Address :Kopernika 88G/45, 88-170 Warszawa');
        })
    }
}


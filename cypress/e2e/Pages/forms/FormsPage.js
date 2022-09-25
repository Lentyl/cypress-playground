import BasePage from '../BasePage'

export default class FormsPage extends BasePage {

    static xpath_practice_form_tab = '//li[child::span[contains(text(),"Practice Form")]]';

    static first_name_input = 'input#firstName';
    static last_name_input = 'input#lastName';
    static email_input = 'input#userEmail';
    static gender_male_radio_button = 'input#gender-radio-1';
    static mobile_input = 'input#userNumber';
    static date_input = 'input#dateOfBirthInput';
    static date_year_select = 'select.react-datepicker__year-select';
    static date_month_select = 'select.react-datepicker__month-select';
    static date_day = 'div[aria-label="Choose Friday, January 4th, 1985"]';
    static subject_autocomplete_input = 'input#subjectsInput';
    static subject_option = 'div#react-select-2-option-0';
    static hobbies_sports_radio_button = 'input#hobbies-checkbox-1';
    static upload_picture_button = 'input#uploadPicture';
    static current_address_textarea = 'textarea#currentAddress';
    static current_address_textarea = 'textarea#currentAddress';
    static state_select = 'div#state > div';
    static state_option = 'div#react-select-3-option-0';
    static city_select = 'div#city > div';
    static city_option = 'div#react-select-4-option-0';
    static submit_button = 'button#submit';

    //confirmation modal window elements
    static confirmation_elements = 'td';
    static confirmation_window_button = 'button#closeLargeModal';

    static fillAndConfirmForm = () => {
        cy.get(FormsPage.first_name_input).clear().type(FormsPage.testData.first_names[0]);
        cy.get(FormsPage.last_name_input).clear().type(FormsPage.testData.last_names[0]);
        cy.get(FormsPage.email_input).clear().type(FormsPage.testData.email);
        cy.get(FormsPage.gender_male_radio_button).click({ force: true });
        cy.get(FormsPage.mobile_input).clear().type(FormsPage.testData.telephone_number);
        cy.get(FormsPage.date_input).click();
        cy.get(FormsPage.date_year_select).select(FormsPage.testData.year);
        cy.get(FormsPage.date_month_select).select(FormsPage.testData.month);
        cy.get(FormsPage.date_day).click();
        cy.get(FormsPage.subject_autocomplete_input).type(FormsPage.testData.subject);
        cy.get(FormsPage.subject_option).click();
        cy.get(FormsPage.hobbies_sports_radio_button).click({ force: true });
        cy.get(FormsPage.upload_picture_button).attachFile('files/sampleUploadeFile.jpeg');
        cy.get(FormsPage.current_address_textarea).clear().type(FormsPage.testData.current_address);
        cy.get(FormsPage.state_select).click();
        cy.get(FormsPage.state_option).click();
        cy.get(FormsPage.city_select).click();
        cy.get(FormsPage.city_option).click();
        cy.get(FormsPage.submit_button).click();

    }

    static confirmationWindowDetailsCheck = () => {
        cy.get(FormsPage.confirmation_elements).then($el => {
            expect($el.eq(0).text()).to.contain('Student Name');
            expect($el.eq(1).text()).to.contain('Mariusz Podgorski');
            expect($el.eq(2).text()).to.contain('Student Email');
            expect($el.eq(3).text()).to.contain('mar84@wp.pl');
            expect($el.eq(4).text()).to.contain('Gender');
            expect($el.eq(5).text()).to.contain('Male');
            expect($el.eq(6).text()).to.contain('Mobile');
            expect($el.eq(7).text()).to.contain('1234567890');
            expect($el.eq(8).text()).to.contain('Date of Birth');
            expect($el.eq(9).text()).to.contain('04 January,1985');
            expect($el.eq(10).text()).to.contain('Subjects');
            expect($el.eq(11).text()).to.contain('English');
            expect($el.eq(12).text()).to.contain('Hobbies');
            expect($el.eq(13).text()).to.contain('Sports');
            expect($el.eq(14).text()).to.contain('Picture');
            expect($el.eq(15).text()).to.contain('sampleUploadeFile.jpeg');
            expect($el.eq(16).text()).to.contain('Address');
            expect($el.eq(17).text()).to.contain('Kazimierza wielkiego 99A/33, 09-100 Płońsk');
            expect($el.eq(18).text()).to.contain('State and City');
            expect($el.eq(19).text()).to.contain('NCR Delhi');
        })
        cy.get(FormsPage.confirmation_window_button).click();
    }


}
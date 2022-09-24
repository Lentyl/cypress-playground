import BasePage from '../BasePage'

export default class WebTablesPage extends BasePage {

    static xpath_web_table_tab = '//li[child::span[contains(text(),"Web Tables")]]';
    static add_new_user = 'button#addNewRecordButton';
    static search_record_input = 'input#searchBox';
    static xpath_table_records = '//div[@class="rt-tr-group"][1]//div[@class="rt-td"]';
    static edit_record_icon_button = 'span#edit-record-1';
    static delete_record_icon_button = 'span#delete-record-3';

    //Registration Form
    static close_x_button = 'button.close > span[aria-hidden]';
    static first_name_input = 'input#firstName';
    static last_name_input = 'input#lastName';
    static email_input = 'input#userEmail';
    static age_input = 'input#age';
    static salary_input = 'input#salary';
    static department_input = 'input#department';
    static submit_button = 'button#submit';

    // switch table page
    static table_page_input = 'input[aria-label="jump to page"]';
    static total_pages_quantity = 'span.-totalPages';
    static previous_table_page_button = 'div.-previous > button';
    static next_table_page_button = 'div.-next > button';
    static table_row_select = '[aria-label="rows per page"]';

    email = '';

    static addUser = (userQuantity = 0) => {
        for (let i = 0; i <= userQuantity; i++) {
            cy.get(WebTablesPage.add_new_user).click();
            cy.get(WebTablesPage.first_name_input).clear().type(WebTablesPage.testData.first_names[WebTablesPage.randomNumber(0, WebTablesPage.testData.first_names.length - 1)]);
            cy.get(WebTablesPage.last_name_input).clear().type(WebTablesPage.testData.last_names[WebTablesPage.randomNumber(0, WebTablesPage.testData.last_names.length - 1)]);
            cy.get(WebTablesPage.email_input).clear().type(`mar${new Date().getTime()}@wp.pl`);
            cy.get(WebTablesPage.age_input).clear().type(WebTablesPage.randomNumber(18, 70));
            cy.get(WebTablesPage.salary_input).clear().type(WebTablesPage.randomNumber(2000, 6000));
            cy.get(WebTablesPage.department_input).clear().type(WebTablesPage.testData.department[WebTablesPage.randomNumber(0, WebTablesPage.testData.department.length - 1)]);
            cy.get(WebTablesPage.submit_button).click();
        }
        cy.get(WebTablesPage.add_new_user).click();
        cy.get(WebTablesPage.close_x_button).click();
    }

    static filteredResultCheck = (name) => {
        cy.get(WebTablesPage.search_record_input).clear().type(name);
        cy.xpath(WebTablesPage.xpath_table_records).then($el => {
            expect($el.eq(0).text()).to.contain('Cierra');
            expect($el.eq(1).text()).to.contain('Vega');
            expect($el.eq(2).text()).to.contain('39');
            expect($el.eq(3).text()).to.contain('cierra@example.com');
            expect($el.eq(4).text()).to.contain('10000');
            expect($el.eq(5).text()).to.contain('Insurance');
        })
        cy.get(WebTablesPage.search_record_input).clear();
    }

    static editFirstRecordInTable = () => {

        WebTablesPage.email = `mar${new Date().getTime()}@wp.pl`;
        cy.get(WebTablesPage.edit_record_icon_button).click();
        cy.get(WebTablesPage.first_name_input).clear().type('Rafał');
        cy.get(WebTablesPage.last_name_input).clear().type('Kowalski');
        cy.get(WebTablesPage.email_input).clear().type(WebTablesPage.email);
        cy.get(WebTablesPage.age_input).clear().type(55);
        cy.get(WebTablesPage.salary_input).clear().type(3576);
        cy.get(WebTablesPage.department_input).clear().type('Production');
        cy.get(WebTablesPage.submit_button).click();
    }

    static firstRecordInTableCheck = () => {
        cy.xpath(WebTablesPage.xpath_table_records).then($el => {
            expect($el.eq(0).text()).to.contain('Rafał');
            expect($el.eq(1).text()).to.contain('Kowalski');
            expect($el.eq(2).text()).to.contain('55');
            expect($el.eq(3).text()).to.contain(WebTablesPage.email);
            expect($el.eq(4).text()).to.contain('3576');
            expect($el.eq(5).text()).to.contain('Production');
        })
    }

    static switchTablePageCheck = () => {
        cy.get(WebTablesPage.total_pages_quantity).should('have.text', '2');
        cy.get(WebTablesPage.previous_table_page_button).should('have.attr', 'disabled');
        cy.get(WebTablesPage.table_page_input).clear().type('2{enter}').invoke('val').should('eq', '2');
        cy.get(WebTablesPage.next_table_page_button).should('have.attr', 'disabled');
        cy.get(WebTablesPage.previous_table_page_button).click();
        cy.get(WebTablesPage.table_page_input).should('have.attr', 'value', '1');
        cy.get(WebTablesPage.table_row_select).select('5 rows');
        cy.get(WebTablesPage.total_pages_quantity).should('have.text', '3');
        cy.get(WebTablesPage.next_table_page_button).click();
        cy.get(WebTablesPage.table_page_input).should('have.attr', 'value', '2');
    }
}


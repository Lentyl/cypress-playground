import BasePage from '../BasePage'

export default class TextBoxPage extends BasePage {

    static xpath_chexk_box_tab = '//li[child::span[contains(text(),"Check Box")]]';

    static xpath_home_expand_tree_arrow = '//button[@title="Toggle" and ancestor::span[@class="rct-text" and descendant::span[contains(text(),"Home")]]]';
    static xpath_desktop_expand_tree_arrow = '//button[@title="Toggle" and ancestor::span[@class="rct-text" and descendant::span[contains(text(),"Desktop")]]]';
    static xpath_documents_expand_tree_arrow = '//button[@title="Toggle" and ancestor::span[@class="rct-text" and descendant::span[contains(text(),"Documents")]]]';
    static xpath_download_expand_tree_arrow = '//button[@title="Toggle" and ancestor::span[@class="rct-text" and descendant::span[contains(text(),"Download")]]]';
    static xpath_work_space_expand_tree_arrow = '//button[@title="Toggle" and ancestor::span[@class="rct-text" and descendant::span[contains(text(),"WorkSpace")]]]';
    static xpath_office_expand_tree_arrow = '//button[@title="Toggle" and ancestor::span[@class="rct-text" and descendant::span[contains(text(),"Office")]]]';

    static xpath_home_checkbox = '//span[@class="rct-checkbox" and ancestor::span[@class="rct-text" and descendant::span[contains(text(),"Home")]]]';
    static xpath_desktop_checkbox = '//span[@class="rct-checkbox" and ancestor::span[@class="rct-text" and descendant::span[contains(text(),"Desktop")]]]';
    static xpath_documents_checkbox = '//span[@class="rct-checkbox" and ancestor::span[@class="rct-text" and descendant::span[contains(text(),"Documents")]]]';
    static xpath_download_checkbox = '//span[@class="rct-checkbox" and ancestor::span[@class="rct-text" and descendant::span[contains(text(),"Download")]]]';
    static xpath_work_space_checkbox = '//span[@class="rct-checkbox" and ancestor::span[@class="rct-text" and descendant::span[contains(text(),"WorkSpace")]]]';
    static xpath_office_checkbox = '//span[@class="rct-checkbox" and ancestor::span[@class="rct-text" and descendant::span[contains(text(),"Office")]]]';

    static all_checkboxes = 'span.rct-checkbox';
    static selected_result_text = 'div#result';


    static openTree = () => {
        cy.xpath(TextBoxPage.xpath_home_expand_tree_arrow).click();
        cy.xpath(TextBoxPage.xpath_desktop_expand_tree_arrow).click();
        cy.xpath(TextBoxPage.xpath_documents_expand_tree_arrow).click();
        cy.xpath(TextBoxPage.xpath_download_expand_tree_arrow).click();
        cy.xpath(TextBoxPage.xpath_work_space_expand_tree_arrow).click();
        cy.xpath(TextBoxPage.xpath_office_expand_tree_arrow).click();
    }

    static markCheckboxes = (home = false, desktop = false, documents = false, downloads = false, workSpace = false, office = false) => {
        home && cy.xpath(TextBoxPage.xpath_home_checkbox).click();
        desktop && cy.xpath(TextBoxPage.xpath_desktop_checkbox).click();
        documents && cy.xpath(TextBoxPage.xpath_documents_checkbox).click();
        downloads && cy.xpath(TextBoxPage.xpath_download_checkbox).click();
        workSpace && cy.xpath(TextBoxPage.xpath_download_checkbox).click();
        office && cy.xpath(TextBoxPage.xpath_office_checkbox).click();
    }

    static allChecboxesAreChecked = () => {
        cy.get(TextBoxPage.all_checkboxes).each($checkbox => {
            cy.wrap($checkbox).find('svg').should('have.class', 'rct-icon-check');
        })
    }
}








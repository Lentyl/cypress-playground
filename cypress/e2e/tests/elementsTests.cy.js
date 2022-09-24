/// <reference types= "cypress" />
import BasePage from '../Pages/BasePage'
import TextBoxPage from '../Pages/elements/TextBoxPage';
import CheckBoxPage from '../Pages/elements/CheckBoxPage';
import RadioButtonPage from '../Pages/elements/RadioButtonPage';
import WebTablesPage from '../Pages/elements/WebTablesPage';
import ButtonsPage from '../Pages/elements/ButtonsPage';
import LinksPage from '../Pages/elements/LinksPage';
import BrokenImgeLinkPage from '../Pages/elements/BrokenImgeLinkPage';
import UploadAndDownloadPage from '../Pages/elements/UploadAndDownloadPage';

describe('Home page sandbox smoke tests', () => {

    beforeEach(() => {
        cy.task('deleteDownloads');
        cy.visit(Cypress.config().baseUrl);
        cy.get(BasePage.elements_card).click();
    })
    /* 
        it('Text box - test', () => {
            cy.xpath(TextBoxPage.xpath_text_box_tab).click();
            TextBoxPage.fillFormAndSubmit();
            TextBoxPage.user_detalis_check();
    
        })
    
        it('Check box - test', () => {
                cy.xpath(CheckBoxPage.xpath_chexk_box_tab).click();
                CheckBoxPage.openTree();
                CheckBoxPage.markCheckboxes(true);
                cy.get(CheckBoxPage.selected_result_text).should('have.text', 'You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile');
                CheckBoxPage.allChecboxesAreChecked();
                CheckBoxPage.markCheckboxes(true);
                CheckBoxPage.markCheckboxes(false, true, true, true);
                CheckBoxPage.allChecboxesAreChecked();
                cy.get(CheckBoxPage.selected_result_text).should('have.text', 'You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile');
                CheckBoxPage.markCheckboxes(true);
                CheckBoxPage.markCheckboxes(false, false, false, false, true, true);
                cy.get(CheckBoxPage.selected_result_text).should('have.text', 'You have selected :officepublicprivateclassifiedgeneraldownloadswordFileexcelFile');
        })
        
        it('Radio button - test', () => {
                cy.xpath(RadioButtonPage.xpath_radio_button_tab).click();
                cy.get(RadioButtonPage.do_you_like_header).should('have.text', 'Do you like the site?');
                cy.get(RadioButtonPage.yes_radio_button).check({ force: true });
                cy.get(RadioButtonPage.selected_text).should('have.text', 'You have selected Yes');
                cy.get(RadioButtonPage.impressive_radio_button).check({ force: true });
                cy.get(RadioButtonPage.selected_text).should('have.text', 'You have selected Impressive');
                cy.get(RadioButtonPage.no_radio_button).should('have.attr', 'disabled');
        })
           

    it('Web tables - test', () => {
        cy.xpath(WebTablesPage.xpath_web_table_tab).click();
        WebTablesPage.addUser(10);
        WebTablesPage.filteredResultCheck('Cierr');
        WebTablesPage.editFirstRecordInTable();
        WebTablesPage.firstRecordInTableCheck();
        WebTablesPage.switchTablePageCheck();
    })
     
    it('Buttons - test', () => {
        cy.xpath(ButtonsPage.xpath_buttons_tab).click();
        ButtonsPage.buttonsCheck();
    })
    
    it('Links - test', () => {
        cy.xpath(LinksPage.xpath_links_tab).click();
        LinksPage.openNewTabLinksCheck();
        LinksPage.sendApiCallLinksCheck();
    })
    
    it('Broken image, link - test', () => {
        cy.xpath(BrokenImgeLinkPage.xpath_broken_link_image_tab).click();
        //BrokenImgeLinkPage.brokenImageCheck();
        BrokenImgeLinkPage.brokenLinkCheck();
    })
    */

    it('Upload and download - test', () => {
        cy.xpath(UploadAndDownloadPage.xpath_upload_and_download_tab).click();
        UploadAndDownloadPage.downloadFileCheck();
        UploadAndDownloadPage.uploadFileCheck();
    })


})
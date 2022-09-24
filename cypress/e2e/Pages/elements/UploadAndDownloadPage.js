import BasePage from '../BasePage'

export default class UploadAndDownloadPage extends BasePage {

    static xpath_upload_and_download_tab = '//li[child::span[contains(text(),"Upload and Download")]]';

    static download_button = 'a#downloadButton';
    static upload_button = 'input#uploadFile';
    static upload_file_path_text = 'p#uploadedFilePath';

    static downloadFileCheck = () => {
        cy.get(UploadAndDownloadPage.download_button).click();
        cy.verifyDownload('sampleFile.jpeg');
    }

    static uploadFileCheck = () => {
        cy.get(UploadAndDownloadPage.upload_button).attachFile('files/sampleUploadeFile.jpeg');
        cy.get(UploadAndDownloadPage.upload_file_path_text).should('have.text', 'C:\\fakepath\\sampleUploadeFile.jpeg');
    }

}


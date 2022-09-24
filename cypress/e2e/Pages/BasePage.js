import TestData from '../../fixtures/TestData';

export default class BasePage {

    static testData = new TestData();

    static elements_card = 'div.card:nth-child(1)';
    static forms_card = 'div.card:nth-child(2)';
    static alerts_frames_windows_card = 'div.card:nth-child(3)';
    static widgets_card = 'div.card:nth-child(4)';
    static interactions_card = 'div.card:nth-child(5)';
    static books_store_aplicaton_card = 'div.card:nth-child(6)';

    static randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
} 
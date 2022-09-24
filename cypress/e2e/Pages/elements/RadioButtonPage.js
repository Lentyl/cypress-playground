import BasePage from '../BasePage'

export default class RadioButton extends BasePage {

    static xpath_radio_button_tab = '//li[child::span[contains(text(),"Radio Button")]]';
    static do_you_like_header = 'div.mb-3';
    static yes_radio_button = 'input#yesRadio';
    static impressive_radio_button = 'input#impressiveRadio';
    static no_radio_button = 'input#noRadio';
    static selected_text = 'p.mt-3';




}








import BasePage from '../BasePage'

export default class BrokenImgeLinkPage extends BasePage {

  static xpath_broken_link_image_tab = '//li[child::span[text()="Broken Links - Images"]]';

  static images = 'img';
  static links = 'a';

  static brokenImageCheck = () => cy.get(BrokenImgeLinkPage.images).each(($img) => {
    expect($img[0].naturalWidth, `image with src attr: ${$img[0].src}`).to.be.gt(0)
  });

  static brokenLinkCheck = () => cy.get(BrokenImgeLinkPage.links).each(($link) => {

    if ($link.prop('href'))
      cy.request({
        url: $link.prop('href'),
        failOnStatusCode: true
      })

    cy.log($link.prop('href'))
  })

}
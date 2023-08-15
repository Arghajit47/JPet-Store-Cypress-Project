import { BaseDependencies, BaseEyes, BaseHands } from "../BaseRobot";

export class HomePageEyes extends BaseEyes {
  seesWelcomeText() {
    this.seesDomContainText('div[id="Content"]>h2', "Welcome to JPetStore 6");
  }
  seesEnterTheStoreText() {
    this.seesDomContainText("div#Content>p>a", "Enter the Store");
  }
  seesHomePageUrl(url: string) {
    this.seesUrl(url);
  }
  seesJpetStoreHomePage() {
    this.seesDomVisible("div#LogoContent>a>img");
    this.seesDomVisible("img[name='img_cart']");
    this.seesDomElementWithXpath("//a[contains(text(),'Sign In')]");
    this.seesDomElementWithXpath("//a[contains(text(),'?')]");
    this.seesIdVisible("SearchContent");
    for (var i = 0; i < 5; i++) {
      this.seesDomWithIndex("div#QuickLinks>a>img", i);
    }
    this.seesIdVisible("MainImageContent");
    for (var i = 0; i < 5; i++) {
      this.seesDomWithIndex("div#SidebarContent>a>img", i);
    }
  }
  seesLoginPage(url: string) {
    this.seesUrl(url);
    this.seesDomVisible("input[name='username']");
    this.seesDomVisible("input[name='password']");
    this.seesDomVisible("input[name='signon']");
    this.seesDomVisible("div#Catalog>a");
  }
  seesRegisterPage() {
    this.seesDomVisible("input[name='username']");
    this.seesDomVisible("input[name='password']");
    this.seesDomVisible("input[name='repeatedPassword']");
    this.seesDomVisible("input[name='account.firstName']");
    this.seesDomVisible("input[name='account.lastName']");
    this.seesDomVisible("input[name='account.email']");
    this.seesDomVisible("input[name='account.phone']");
    this.seesDomVisible("input[name='account.address1']");
    this.seesDomVisible("input[name='account.address2']");
    this.seesDomVisible("input[name='account.city']");
    this.seesDomVisible("input[name='account.state']");
    this.seesDomVisible("input[name='account.zip']");
    this.seesDomVisible("input[name='account.country']");
    this.seesDomVisible("select[name='account.languagePreference']");
    this.seesDomVisible("select[name='account.favouriteCategoryId']");
    this.seesDomVisible("input[name='account.listOption']");
    this.seesDomVisible("input[name='account.bannerOption']");
    this.seesDomVisible("input[name='newAccount']");
  }
  seesReturnToBack() {
    this.seesDomVisible('[id="BackLink"]');
  }
  seesFishScreen() {
    for (let index = 1; index < 4; index++) {
      this.seesDomElementWithXpath(`(//div[@id='Catalog']//a)[${index}]`);
    }
  }
  seesAngelFishScreen() {
    this.seesDomVisible('div[id="Catalog"]>table');
  }
  seesCartPage() {
    this.seesDomVisible('div[id="Cart"] table');
    this.seesDomContainText("div#Cart>a", "Proceed to Checkout");
    this.seesDomVisible("input[name='updateCartQuantities']");
  }
  seesEmptyCartPage() {
    this.seesDomElementWithXpath("//b[text()='Your cart is empty.']");
    this.seesDomVisible("input[name='updateCartQuantities']");
  }
}
export class HomePageHands extends BaseHands {
  clickOnEnterTheStoreText() {
    this.clickOnDomContainText("div#Content>p>a", "Enter the Store");
  }
  clickOnSignInButton() {
    this.clickOnDomElementWithXpath("//a[contains(text(),'Sign In')]");
  }
  inputUserName(name: string) {
    this.typeTextonDom("input[name='username']", name);
  }
  inputPassword(password: string) {
    this.typeTextonDom("input[name='password']", password);
  }
  inputRepeatedPassword(password: string) {
    this.typeTextonDom("input[name='repeatedPassword']", password);
  }
  inputFirstName(name: string) {
    this.typeTextonDom("input[name='account.firstName']", name);
  }
  inputLastName(name: string) {
    this.typeTextonDom("input[name='account.lastName']", name);
  }
  inputEmail(email: string) {
    this.typeTextonDom("input[name='account.email']", email);
  }
  inputCity(city: string) {
    this.typeTextonDom("input[name='account.city']", city);
  }
  inputState(state: string) {
    this.typeTextonDom("input[name='account.state']", state);
  }
  inputZip(zip: string) {
    this.typeTextonDom("input[name='account.zip']", zip);
  }
  inputCountry(country: string) {
    this.typeTextonDom("input[name='account.country']", country);
  }
  inputPhone(phone: string) {
    this.typeTextonDom("input[name='account.phone']", phone);
  }
  inputAddress1(address1: string) {
    this.typeTextonDom("input[name='account.address1']", address1);
  }
  inputAddress2(address2: string) {
    this.typeTextonDom("input[name='account.address2']", address2);
  }
  selectLanguage(language: string) {
    this.selectDomElementFromDropdown(
      "select[name='account.languagePreference']",
      language
    );
  }
  selectFavouriteCategory(category: string) {
    this.selectDomElementFromDropdown(
      "select[name='account.favouriteCategoryId']",
      category
    );
  }
  inputListOption() {
    this.clickOnDomElement("input[name='account.listOption']");
  }
  inputBannerOption() {
    this.clickOnDomElement("input[name='account.bannerOption']");
  }
  clickOnloginButton() {
    this.clickOnDomElement("input[name='signon']");
  }
  clickOnRegisterNowButton() {
    this.clickOnDomElement("div#Catalog>a");
  }
  clickOnSaveButton() {
    this.clickOnDomElement("input[name='newAccount']");
  }
  clickOnJPetStoreLogo() {
    this.clickOnDomElement("div#LogoContent>a>img");
  }
  pressBackButton() {
    cy.go(-1);
  }
  pressForwardButton() {
    cy.go(1);
  }
  clickOnFishOption() {
    cy.intercept(
      "GET",
      "https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH"
    ).as("graphqlRequest");
    this.clickOnDomElementWithIndex("div#QuickLinks>a>img", 0);
    cy.wait("@graphqlRequest", { timeout: 80000 }).then(({ response }) => {
      if (response?.statusCode == 200) {
        cy.log("Sees Fish option Screen");
      }
    });
  }
  clickOnAngelfishOption() {
    this.clickOnDomElementWithXpath("(//div[@id='Catalog']//a)[1]");
  }
  clickOnAddToCartButtonForLarge() {
    cy.intercept(
      "GET",
      "https://petstore.octoperf.com/actions/Cart.action?addItemToCart=&workingItemId=EST-1"
    ).as("graphqlRequest");
    this.clickOnDomContainTextWithXpath(
      "Add to Cart",
      `(//a[@class='Button'])[1]`
    );
    cy.wait("@graphqlRequest", { timeout: 80000 }).then(({ response }) => {
      if (response?.statusCode == 200) {
        cy.log("clicked on Add to Cart button");
      }
    });
  }
  clickOnRemoveButton() {
    this.clickOnDomContainTextWithXpath("Remove", `(//a[@class='Button'])[1]`);
  }
}
export class HomePageDependencies extends BaseDependencies {}

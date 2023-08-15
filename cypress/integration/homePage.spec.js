/// <reference types = "Cypress" />
import properties from "../_utils/properties/index";
import {
  HomePageDependencies,
  HomePageEyes,
  HomePageHands,
} from "../robots/projectRobot/homePageRobot";
const homePageEyes = new HomePageEyes();
const homePageHands = new HomePageHands();
const homePageDependencies = new HomePageDependencies();
var Fakerator = require("fakerator");
const appUrl = properties.APP_URL;
const homePageUrl = properties.HOMEPAGE_URL;
const loginUrl = properties.LOGIN_URL;
const userName = properties.USER_NAME;
const password = properties.PASSWORD;
var fakerator = Fakerator();

const firstName = fakerator.names.firstNameM();
const lastName = fakerator.names.lastNameM();
const email =
  firstName.toLowerCase() + " " + lastName.toLowerCase() + "+org@gmail.com";
const phone = properties.PHONE;
const address1 = properties.ADDRESS_1;
const address2 = properties.ADDRESS_2;
const city = properties.CITY;
const state = properties.STATE;
const zip = properties.ZIP;
const country = properties.COUNTRY;

context("Testing the website jetPet Store", () => {
  describe("Testing the HomePage Website", () => {
    before("Should be able to enter the website", () => {
      homePageDependencies.visitUrl(appUrl);
      homePageEyes.seesWelcomeText();
      homePageEyes.seesEnterTheStoreText();
      homePageHands.clickOnEnterTheStoreText();
      homePageEyes.seesHomePageUrl(homePageUrl);
      homePageEyes.seesJpetStoreHomePage();
    });
    it("Click On the Sign Up button", () => {
      homePageHands.clickOnSignInButton();
      homePageEyes.seesLoginPage(loginUrl);
      homePageHands.inputUserName(userName);
      homePageHands.inputPassword(password);
      homePageHands.clickOnloginButton();
      homePageHands.wait(2000);
    });
    it("should be able to register a new user", () => {
      homePageHands.clickOnRegisterNowButton();
      homePageEyes.seesRegisterPage();
      homePageHands.inputUserName(userName);
      homePageHands.inputPassword(password);
      homePageHands.inputRepeatedPassword(password);
      homePageHands.inputFirstName(firstName);
      homePageHands.inputLastName(lastName);
      homePageHands.inputEmail(email);
      homePageHands.inputPhone(phone);
      homePageHands.inputAddress1(address1);
      homePageHands.inputAddress2(address2);
      homePageHands.inputCity(city);
      homePageHands.inputState(state);
      homePageHands.inputZip(zip);
      homePageHands.inputCountry(country);
      homePageHands.selectLanguage("english");
      homePageHands.selectFavouriteCategory("DOGS");
      homePageHands.inputListOption();
      homePageHands.inputBannerOption();
      homePageHands.clickOnSaveButton();
    });
    it("Should be select a Fish and Add to Cart", () => {
      homePageHands.wait(2000);
      homePageHands.pressBackButton();
      homePageHands.clickOnJPetStoreLogo();
      homePageHands.clickOnFishOption();
      homePageEyes.seesReturnToBack();
      homePageEyes.seesFishScreen();
      homePageHands.wait(2000);
      homePageHands.clickOnAngelfishOption();
      homePageHands.wait(2000);
      homePageEyes.seesReturnToBack();
      homePageEyes.seesAngelFishScreen();
      homePageHands.clickOnAddToCartButtonForLarge("EST-1");
      homePageHands.wait(2000);
      homePageEyes.seesReturnToBack();
      homePageEyes.seesCartPage();
      homePageHands.clickOnRemoveButton();
      homePageHands.wait(2000);
      homePageEyes.seesEmptyCartPage();
    });
  });
});

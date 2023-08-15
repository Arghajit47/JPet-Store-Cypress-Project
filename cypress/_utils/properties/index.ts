const properties = {
  APP_URL: Cypress.config().APP_URL,
  HOMEPAGE_URL: Cypress.config().HOMEPAGE_URL,
  LOGIN_URL: Cypress.config().LOGIN_URL,
  BASE_API_URL: Cypress.config().BASE_API_URL,
  USER_NAME: Cypress.env("USER_NAME") || "",
  PASSWORD: Cypress.env("PASSWORD") || "",
  ADDRESS_1: Cypress.env("ADDRESS_1") || "",
  ADDRESS_2: Cypress.env("ADDRESS_2") || "",
  CITY: Cypress.env("CITY") || "",
  STATE: Cypress.env("STATE") || "",
  ZIP: Cypress.env("ZIP") || "",
  COUNTRY: Cypress.env("COUNTRY") || "",
  PHONE: Cypress.env("PHONE") || "",
};

export default properties;

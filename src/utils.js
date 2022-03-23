const chrome = require('selenium-webdriver/chrome');
const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

// Helper util function that contains wait functions for the elements of the web page.
// This was created in order to make the code more re-usable and dynamic for each load/check step.
async function waitForElement(type, query, waitTime, driver) {
  switch (type) {
    case "xpath":
      return driver.wait(function () {
        return driver.findElement(By.xpath(query));
        }, waitTime)
    case "className":
      return driver.wait(function () {
        return driver.findElement(By.className(query));
        }, waitTime)
  
    default:
      return "Unrecognized type!"
  }
};

module.exports = waitForElement;

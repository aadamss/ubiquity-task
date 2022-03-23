// Sets up the selenium webdriver for chrome.
const chrome = require('selenium-webdriver/chrome');
const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
const sitemaps = require('sitemaps');
const {filePath, links} = require("./consts.js");
const waitForElement = require("./utils.js");

// Main function for the test.
async function octaTests(){
 
  // Waits for the browser to build and launch properly and sets the options for chrome.
  let driver = await new Builder().forBrowser("chrome")
  .setChromeOptions(new chrome.Options()).build();
  await driver.manage().window().maximize();

  // Custom sleep function.
  const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

  // Fetches the main Atra Octa page, then performs the needed actions.
  // Everything is placed in a try/catch block in order to handle possible errors, exceptions.
  try {
    await driver.get("https://www.atraocta.lv/");
    await waitForElement("xpath", "//a[@href='https://www.atraocta.lv/ru']", 3000, driver);
    await driver.findElement(By.xpath("//a[@href='https://www.atraocta.lv/ru']")).click();
    await waitForElement("xpath", "//a[@href='https://www.atraocta.lv/lv']", 3000, driver);
    await driver.findElement(By.xpath("//a[@href='https://www.atraocta.lv/lv']")).click();
  } catch(e) {
    console.log(`Could not change language of the page, following error occurred: ${e}!`);
  }

  try {
    sitemaps(filePath, links);
  } catch (e) {
    console.log(`Could not create sitemap, following error occurred: ${e}!`);
  }

  // Keeps the browser open for a few seconds and then closes it after execution. 
  await sleep(3000);
  await driver.quit();

}

octaTests()

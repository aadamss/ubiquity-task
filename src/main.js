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

  // Fetches the main Atra Octa page, then performs the language switch from LV to RU, then back to LV.
  // In case of an error, it is handled with the exception.
  try {
    await driver.get("https://www.atraocta.lv/");
    await waitForElement("xpath", "//a[@href='https://www.atraocta.lv/ru']", 3000, driver);
    await driver.findElement(By.xpath("//a[@href='https://www.atraocta.lv/ru']")).click();
    await waitForElement("xpath", "//a[@href='https://www.atraocta.lv/lv']", 3000, driver);
    await driver.findElement(By.xpath("//a[@href='https://www.atraocta.lv/lv']")).click();
  } catch(e) {
    console.log(`Could not change language of the page, following error occurred: ${e}!`);
  }

  // At this point the test inputs dummy data in the OCTA calculator, ticks the checkbox and proceeds with the calculation.
  // In case of an error, it is handled with the exception.
  try {
    await waitForElement("id", "regNr", 3000, driver);
    await driver.findElement(By.id("regNr")).sendKeys("AA-1111");
    await waitForElement("id", "regSert", 3000, driver);
    await driver.findElement(By.id("regSert")).sendKeys("AF 1234567");
    await waitForElement("id", "field_use_user_data", 3000, driver);
    await driver.findElement(By.id("field_use_user_data")).click();
    await waitForElement("xpath", "/html/body/div[5]/div/aside/div[1]/form/input[5]", 3000, driver);
    await driver.findElement(By.xpath("/html/body/div[5]/div/aside/div[1]/form/input[5]")).click();
  } catch(e) {
    console.log(`Could not calculate OCTA, following error occurred: ${e}!`);
  }

  // At this point, the try/catch block generates an XML sitemap for the main sections of the webpage.
  // In case of an error, it is handled with the exception.
  try {
    sitemaps(filePath, links);
  } catch(e) {
    console.log(`Could not create sitemap, following error occurred: ${e}!`);
  }

  // Keeps the browser open for five seconds so it can be observed what happens and then closes it after execution. 
  await sleep(5000);
  await driver.quit();

};

octaTests()

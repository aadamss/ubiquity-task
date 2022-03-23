// Sets up the selenium webdriver for chrome.
const chrome = require('selenium-webdriver/chrome');
const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

// Main function for the test.
async function octaTests(){
 
  // Waits for the browser to build and launch properly and sets the options for chrome.
  let driver = await new Builder().forBrowser("chrome")
  .setChromeOptions(new chrome.Options()).build();
  await driver.manage().window().maximize();

  // Custom sleep function.
  const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

  // Fetches the main Atra Octa page, then performs the needed actions.
  // Everything is placed in a try/catch block in order to handle possible errors, exceptions.
  try {
    await driver.get("https://www.atraocta.lv/");
    await waitForElement("xpath", "//a[@href='https://www.atraocta.lv/ru']", 3000, driver);
    await driver.findElement(By.xpath("//a[@href='https://www.atraocta.lv/ru']")).click();
    await waitForElement("xpath", "//a[@href='https://www.atraocta.lv/lv']", 3000, driver);
    await driver.findElement(By.xpath("//a[@href='https://www.atraocta.lv/lv']")).click();
  } catch(e) {
    console.log(`Action failed with the following error: ${e}!`)
  }

  // Keeps the browser open for a few seconds and then closes it after execution. 
  await sleep(3000)
  await driver.quit();

}

octaTests()

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
}

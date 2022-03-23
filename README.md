# Automated tests task

### Test steps

- Automated tests should be done only for this web page `https://atraocta.lv/` (you don't need to create tests for any sub-pages).
- Please create automated tests for these scenarios:
  - Language switch;
  - Octa calculation (block “OCTA kalkulators”);
  - Create sitemap for the main sections of the page;

### Running the tests

- Clone the project repository
- Install the needed modules with `npm install`
- Navigate to the `src` folder
- Run the `node main.js` command in the terminal

### The tests

- The first test changes the language of the page from `LV` to `RU`, then back to `LV`
- The second test inputs some values, checks the agreement box and calculates an `OCTA`. Not that values input are dummy values so it will not actually find an Octa offer. In order to get a genuine offer, a real license plate and technical passport number should be submitted.
- The third test takes the specified sections of the web page, creates a `sitemaps` folder and generates an `XML` file containing the `sitemap`

### Tech stack used:

- `JavaScript` programming language
- `Selenium` browser automation tool
- `Sitemaps` library for generating XML sitemap files

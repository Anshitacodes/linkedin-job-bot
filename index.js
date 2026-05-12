
const { chromium } = require('playwright');

(async () => {

  const browser = await chromium.launch({
    headless: false,
    slowMo: 100
  });

  const page = await browser.newPage();

  page.setDefaultTimeout(60000);

  // LOGIN
  await page.goto('https://www.linkedin.com/login', {
    waitUntil: 'domcontentloaded'
  });

  await page.fill('#username', 'anshita123vish@gmail.com');
  await page.fill('#password', 'PASSWORD2026262006@');

  await page.click('button[type="submit"]');

  // wait after login
  await page.waitForTimeout(8000);

  // SEARCH POSTS
  await page.goto(
    'https://www.linkedin.com/search/results/content/?keywords=java%20developer%20contract',
    {
      waitUntil: 'domcontentloaded'
    }
  );

  // keep browser open
  await page.waitForTimeout(20000);

})();
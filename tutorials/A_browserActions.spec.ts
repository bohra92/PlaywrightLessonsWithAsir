import { test, expect } from '@playwright/test';

test('has title',{tag:['@basic','@tag2']}, async ({ page }) => {
  await page.goto('https://www.google.com/');
  console.log(await page.title());
  console.log(await page.url())
  //await expect(page).toHaveURL('https://www.go123ogle.com/');
  console.log(await page.content());
  



  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});
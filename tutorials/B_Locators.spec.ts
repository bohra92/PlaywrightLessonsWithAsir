//text boxes ,checkboxes , adio button , button .....

import { test, expect } from '@playwright/test';

test.only('Text Fields',{tag:['@basic','@tag2']}, async ({ page }) => {
  await page.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php');
  //await page.locator("//input[@id='fullname']").fill('Asir');
  await page.locator("//input[@id='email']").fill('Asir@test.com');
  await page.locator("//textarea[@id='address']").fill('Netherlands');
  await page.locator("//input[@id='password']").fill('password123');
  
  await page.getByPlaceholder('Full Name').fill('Asir')
  await page.waitForTimeout(2000)
  
});
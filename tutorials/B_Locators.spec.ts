//text boxes ,checkboxes , adio button , button .....

import { test, expect } from '@playwright/test';

test('Text Fields',{tag:['@basic','@tag2']}, async ({ page }) => {
  await page.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php');
  //await page.locator("//input[@id='fullname']").fill('Asir');
  await page.locator("//input[@id='email']").fill('Asir@test.com');
  await page.locator("//textarea[@id='address']").fill('Netherlands');
  await page.locator("//input[@id='password']").fill('password123');
  
  await page.getByPlaceholder('Full Name').fill('Asir')
  await page.waitForTimeout(2000)
  
});

test('check boxes 1',async({page})=>{
  await page.goto('https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/examples/checkbox/')
  await page.getByRole('checkbox',{name: 'Tomato'}).check()
  await page.getByRole('checkbox',{name: 'Lettuce'}).check()
  await page.getByRole('checkbox',{name: 'Tomato'}).click()
  await page.waitForTimeout(2000);

})

test('check boxes 2',async({page})=>{
  await page.goto('https://formstone.it/components/checkbox/demo/')
  await page.locator("//input[@id='checkbox-1']").click({force:true})
  await page.locator("//input[@id='checkbox-2']").click({force:true})
  await page.locator("//input[@id='checkbox-4']").click({force:true})
  await page.waitForTimeout(2000);

})

test('radio buttton 1',async({page})=>{
  await page.goto('https://www.w3.org/WAI/ARIA/apg/patterns/radio/examples/radio/')
  await page.getByRole('radio',{name: 'Regular crust'}).check()
  await page.waitForTimeout(2000);
  await page.getByRole('radio',{name: 'Deep dish'}).check()
  await page.waitForTimeout(2000);
  await page.getByRole('radio',{name: 'Thin crust'}).click()
  await page.waitForTimeout(2000);

})

//how to perform radio button tests on https://formstone.it/components/checkbox/demo/

test('radio buttton 2',async({page})=>{
  await page.goto('https://formstone.it/components/checkbox/demo/')
  await page.locator("//input[@id='radio-4']").click({force:true})
  await page.waitForTimeout(2000);
})



test('miscell. butttons',async({page})=>{
  await page.goto('https://www.tutorialspoint.com/selenium/practice/buttons.php')
  await page.getByText('Click Me',{exact:true}).click()
  await page.waitForTimeout(2000);
  //await page.getByText('Right Click Me',{exact: true}).click({button:"right"})
  //await page.waitForTimeout(2000);
  await page.getByText('Double Click Me',{exact:true}).dblclick()
  await page.waitForTimeout(2000);

})

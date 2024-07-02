
import { test, expect } from '@playwright/test';


test.describe.skip('Alert Group', async () => {

    test('Alert box', async ({ page }) => {
        await page.goto('https://testpages.herokuapp.com/styled/alerts/alert-test.html');
        page.on('dialog', dialog => dialog.accept());
        await page.locator("//input[@id='alertexamples']").click()
        let alertParaMsg = page.locator("//p[@id='alertexplanation']").textContent()
        await expect(await alertParaMsg).toBe('You triggered and handled the alert dialog')
        await page.waitForTimeout(2000)
    });

    test('Confirm box 1', async ({ page }) => {
        await page.goto('https://testpages.herokuapp.com/styled/alerts/alert-test.html');
        page.on('dialog', dialog => dialog.accept());
        await page.locator("//input[@id='confirmexample']").click()
        let confirmParaMsg = page.locator("//p[@id='confirmreturn']").textContent()
        await expect(await confirmParaMsg).toBe('true')
        await page.waitForTimeout(2000)
    });

    test('Confirm box 2', async ({ page }) => {
        await page.goto('https://testpages.herokuapp.com/styled/alerts/alert-test.html');
        page.on('dialog', dialog => dialog.dismiss());
        await page.locator("//input[@id='confirmexample']").click()
        let confirmParaMsg = page.locator("//p[@id='confirmreturn']").textContent()
        await expect(await confirmParaMsg).toBe('false')
        await page.waitForTimeout(2000)
    });

    test('promt box ', async ({ page }) => {
        await page.goto('https://testpages.herokuapp.com/styled/alerts/alert-test.html');
        page.on('dialog', dialog => dialog.accept('Tanuj Bohra'));
        await page.locator("//input[@id='promptexample']").click()
        let promptParaMsg = page.locator("//p[@id='promptreturn']").textContent()
        await expect(await promptParaMsg).toBe('Tanuj Bohra')
        await page.waitForTimeout(2000)
    });
})



test('Alert box', async ({ page }) => {
    await page.goto('https://www.tutorialspoint.com/selenium/practice/modal-dialogs.php');
    await page.getByRole('button',{name:'Small Modal'}).click()
    await page.getByRole('button',{name:'Close'}).first().click()
    await page.waitForTimeout(2000)
});

test.describe('Window handling',async () => {
    
    test.only('new Tab',async({page})=>{
        await page.goto('https://www.tutorialspoint.com/selenium/practice/browser-windows.php')
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            page.getByRole('button',{name:'New Tab' , exact :true}).click()
        ])

        console.log(page.url());
        
        console.log( newTab.url());
       
    })
})

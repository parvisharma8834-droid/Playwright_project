import test from "@playwright/test";

//@ts-check
test('file upload',async({page})=>{
    await page.goto('https://practice.expandtesting.com/upload');
    await page.locator('//input[@data-testid="file-input"]').setInputFiles('C:/Users/Shivani/Downloads/aadhar.pdf')
    await page.waitForTimeout(2000)
})
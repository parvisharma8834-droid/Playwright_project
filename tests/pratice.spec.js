//@ts-check
import test, { expect } from "@playwright/test"
test("Filtering locator ",async({page})=>{
      
     await page.goto('https://alphagov.github.io/accessible-autocomplete/examples/')

    // await page.locator("//label[text()='Male']").click()
    // await page.locator("//label[@for='hobbies-checkbox-1']").click()
    // await page.locator("//label[@for='hobbies-checkbox-2']").click()
    await page.locator("//input[@id='autocomplete-default']").fill('A')

    // await page.keyboard.press('ArrowDown')
    //  await page.keyboard.press('ArrowDown')
    //  await page.keyboard.press('Enter')
    
    
   

})
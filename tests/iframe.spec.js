//@ts-check
import test, { expect } from "@playwright/test"
test('iframe in playwright',async({page})=>{
       await page.goto('https://the-internet.herokuapp.com/iframe')
       const frameArea=page.frameLocator('#mce_0_ifr').locator('#tinymce')
         await frameArea.fill('Hello I am learning Playwright')
         await expect(frameArea).toContainText('Hello I am learning Playwright')
})
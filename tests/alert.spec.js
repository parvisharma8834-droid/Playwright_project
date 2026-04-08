//@ts-check
import test from "@playwright/test"
test('alert handling',async({page})=>{
   await page.goto('https://www.selenium.dev/selenium/web/alerts.html#')
//    await page.on('dialog', async (a) => {
//     console.log(a.message())
//     // await a.accept()
//    })

   await page.locator('//a[@id="alert"]').click()
   await page.waitForTimeout(2000)
})
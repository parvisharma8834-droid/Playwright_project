//@ts-check
import test, { expect } from "@playwright/test"
test.skip('alert handling',async({page})=>{
   await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth')
//    await page.on('dialog', async (a) => {
//     console.log(a.message())
//     // await a.accept()
//    })

   const text=await page.locator('//div[@id="content"]').textContent()
   expect(text).toContain(' Congratulations! ')
})
test('alert handling',async({page})=>{

   
    



   await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth')
//    await page.on('dialog', async (a) => {
//     console.log(a.message())
//     // await a.accept()
//    })

   const text=await page.locator('//div[@id="content"]').textContent()
   expect(text).toContain(' Congratulations! ')
})
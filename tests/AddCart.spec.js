//@ts-check
import { test, expect } from '@playwright/test';
import { AddCart } from "../pages/AddCart.js";

test('Add to cart', async ({ page }) => {
    const addCart = new AddCart(page);
    await page.goto('https://automationexercise.com');
    await expect(page).toHaveTitle(/Automation/);
    await addCart.clickCart()
    await addCart.addItem()
    await addCart.veiwaCart()

})
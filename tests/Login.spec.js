//@ts-check
import { test, expect } from '@playwright/test';
  test('Login to the page',async({page})=>{

    await page.goto('https://automationexercise.com');
    
    await expect(page).toHaveTitle(/Automation/);

 // Click Signup/Login
  await page.locator('a[href="/login"]').click();
  // Verify login page
  await expect(page.locator("//h2[text()='Login to your account']")).toBeVisible();

  await page.locator('input[placeholder="Email Address"]').first().fill('shivanigupta40392@gmail.com');
  await page.locator('input[placeholder="Password"]').first().fill('Shivani40392@');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Shivani')).toBeVisible();
     await page.locator('a[href="/logout"]').click();

  })


 test('Login a incorrect password',async({page})=>{

    await page.goto('https://automationexercise.com');
    
    await expect(page).toHaveTitle(/Automation/);

 // Click Signup/Login
  await page.locator('a[href="/login"]').click();
  // Verify login page
  await expect(page.locator("//h2[text()='Login to your account']")).toBeVisible();

  await page.locator('input[placeholder="Email Address"]').first().fill('shivanigupta492@gmail.com');
  await page.locator('input[placeholder="Password"]').first().fill('Shivani40392@');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();

  })
 
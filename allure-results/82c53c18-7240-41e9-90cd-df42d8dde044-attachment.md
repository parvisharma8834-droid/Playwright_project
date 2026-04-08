# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.js >> Login to the page
- Location: tests\Login.spec.js:3:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[placeholder="Passwo"]').first()

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [active] [ref=e44]: shivanigupta40392@gmail.com
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
        - button "Signup" [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
  - generic:
    - insertion:
      - generic:
        - iframe
  - insertion [ref=e72]:
    - iframe [ref=e75]:
      - generic [ref=f17e2]:
        - iframe [ref=f17e5]:
          - generic [ref=f21e2]:
            - link:
              - /url: javascript:window.open(window.clickTag)
        - generic [ref=f17e6]:
          - generic:
            - img [ref=f17e10] [cursor=pointer]
            - button [ref=f17e12] [cursor=pointer]:
              - img [ref=f17e13]
```

# Test source

```ts
  1  | //@ts-check
  2  | import { test, expect } from '@playwright/test';
  3  |   test('Login to the page',async({page})=>{
  4  | 
  5  |     await page.goto('https://automationexercise.com');
  6  |     
  7  |     await expect(page).toHaveTitle(/Automation/);
  8  | 
  9  |  // Click Signup/Login
  10 |   await page.locator('a[href="/login"]').click();
  11 |   // Verify login page
  12 |   await expect(page.locator("//h2[text()='Login to your account']")).toBeVisible();
  13 | 
  14 |   await page.locator('input[placeholder="Email Address"]').first().fill('shivanigupta40392@gmail.com');
> 15 |   await page.locator('input[placeholder="Passwo"]').first().fill('Shivani40392@');
     |                                                             ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  16 |     await page.getByRole('button', { name: 'Login' }).click();
  17 |     await expect(page.getByText('Shivani')).toBeVisible();
  18 |      await page.locator('a[href="/logout"]').click();
  19 | 
  20 |   })
  21 | 
  22 | 
  23 |  test('Login a incorrect password',async({page})=>{
  24 | 
  25 |     await page.goto('https://automationexercise.com');
  26 |     
  27 |     await expect(page).toHaveTitle(/Automation/);
  28 | 
  29 |  // Click Signup/Login
  30 |   await page.locator('a[href="/login"]').click();
  31 |   // Verify login page
  32 |   await expect(page.locator("//h2[text()='Login to your account']")).toBeVisible();
  33 | 
  34 |   await page.locator('input[placeholder="Email Address"]').first().fill('shivanigupta492@gmail.com');
  35 |   await page.locator('input[placeholder="Password"]').first().fill('Shivani40392@');
  36 |     await page.getByRole('button', { name: 'Login' }).click();
  37 |     await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
  38 | 
  39 |   })
  40 |  
```
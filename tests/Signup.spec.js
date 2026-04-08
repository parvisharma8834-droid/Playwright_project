//@ts-check
import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/Signup.js";

test('SIGNUP', async ({ page }) => {

  const login = new LoginPage(page);

  await page.goto('https://automationexercise.com');
  await expect(page).toHaveTitle(/Automation/);
  await login.goToSignup();
  await login.enterSignupDetails('shivanigupta');
  await login.accountInfoText.waitFor();
  await login.fillAccountInfo();
  await login.fillAddressDetails();
  await login.createAccount();
  await login.verifyAccountCreated();

});
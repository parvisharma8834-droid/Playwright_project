// pages/login.js

export class LoginPage {
  constructor(page) {
    this.page = page;

    // --- Locators ---
    this.loginLink = page.locator('a[href="/login"]');
    this.signupName = page.locator('[data-qa="signup-name"]');
    this.signupEmail = page.locator('[data-qa="signup-email"]');
    this.signupBtn = page.getByRole('button', { name: 'Signup' });

    this.accountInfoText = page.locator("//b[text()='Enter Account Information']");
    this.titleMrs = page.getByLabel('Mrs.');
    this.password = page.locator('[data-qa="password"]');
    this.days = page.locator('#days');
    this.months = page.locator('#months');
    this.years = page.locator('#years');
    this.newsletter = page.locator('#newsletter');
    this.optin = page.locator('#optin');

    this.firstName = page.locator('[data-qa="first_name"]');
    this.lastName = page.locator('[data-qa="last_name"]');
    this.company = page.locator('[data-qa="company"]');
    this.address = page.locator('[data-qa="address"]');
    this.address2 = page.locator('[data-qa="address2"]');
    this.country = page.locator('#country');
    this.state = page.locator('[data-qa="state"]');
    this.city = page.locator('[data-qa="city"]');
    this.zipcode = page.locator('[data-qa="zipcode"]');
    this.mobile = page.locator('[data-qa="mobile_number"]');

    this.createAccountBtn = page.getByRole('button', { name: 'Create Account' });
    this.accountCreatedText = page.locator("//b[text()='Account Created!']");
  }

  // --- Actions ---
  async openWebsite() {
    await this.page.goto('https://automationexercise.com');
  }

  async goToSignup() {
    await this.loginLink.click();
  }

  async enterSignupDetails(name) {
    const randomString = Math.random().toString(36).substring(2, 8);
    const email = `${randomString}@gmail.com`;

    await this.signupName.fill(name);
    await this.signupEmail.fill(email);
    await this.signupBtn.click();
  }

  async fillAccountInfo() {
    await this.titleMrs.check();
    await this.password.fill('Shivi40392@');
    await this.days.selectOption('10');
    await this.months.selectOption('May');
    await this.years.selectOption('2003');
    await this.newsletter.check();
    await this.optin.check();
  }

  async fillAddressDetails() {
    await this.firstName.fill('Shivi');
    await this.lastName.fill('gupta');
    await this.company.fill('Click and decode');
    await this.address.fill('Gwalior');
    await this.address2.fill('City center');
    await this.country.selectOption('India');
    await this.state.fill('MP');
    await this.city.fill('Gwalior');
    await this.zipcode.fill('473585');
    await this.mobile.fill('8839730146');
  }

  async createAccount() {
    await this.createAccountBtn.click();
  }

  async verifyAccountCreated() {
    await this.accountCreatedText.waitFor();
  }
}
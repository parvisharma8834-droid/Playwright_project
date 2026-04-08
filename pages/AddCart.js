import { expect } from "@playwright/test";
export class AddCart {
    constructor(page) {
        this.page = page
        this.cart = page.locator("//a[text()=' Products']");
        this.additem = page.locator('(//a[@data-product-id="1"])[1]');
        this.continueBtn = page.getByRole('button', { name: 'Continue Shopping' });
        this.addedText = page.getByText('Added!');
        this.viewCart=page.locator('//a[@href="/view_cart"]').first()
    }
    async clickCart() {
        await this.cart.click();

    }
    async addItem() {
        await this.additem.click();
        await expect(this.addedText).toBeVisible();
         await this.continueBtn.click();


    }
    async veiwaCart(){
           await this.viewCart.click();
    }
}
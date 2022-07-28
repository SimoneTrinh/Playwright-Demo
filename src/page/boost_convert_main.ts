import { Page } from "@playwright/test";
import { expect } from "../../fixtures/base";
import { CommonPage } from "./pages";

export default class BoostConvert {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async gotoRealtimeVisitors() {
    await Promise.all([
      this.page.waitForSelector(`//a[contains(text(),"Real-time visitors")]`, {
        state: "visible",
      }),
      this.page.locator(`//a[contains(text(),"Real-time visitors")]`).click(),
      this.page.waitForSelector(`//h2[contains(text(),"Real-time visitors")]`, {
        state: `visible`,
      }),
    ]);
  }

  async clickBtnSelectProduct() {
    await this.page
      .locator(`//span[contains(text(), "Select products")]`)
      .click();
  }

  async selectAllProduct() {
    await this.page
      .locator(
        `//div[@class='search-box']//span[@data-label='Select All']//span`
      )
      .click();
  }

  async removeAllProduct() {
    await this.page
      .locator(
        `//div[@class='select-product-box']//span[@data-label='Remove All']//span`
      )
      .click();
  }

  async addProduct() {
    await this.page
      .locator(`//div[@class='product-selector']//div[2]//i`)
      .click();
  }

  async clickContinueBtn() {
    await this.page
      .locator(`//span[contains(text(),'Continue with selected products')]`)
      .click();
  }

  async clickChangeBtn() {
    await this.page.locator(`//span[contains(text(),'Change')]`).click();
    await expect(
      this.page.locator(`//span[contains(text(),'Change')]`)
    ).toBeHidden();
  }
  //Expect cho ra ngoài test.spec.ts

  async gotoCustomize() {
    await Promise.all([
      this.page.locator(`//a[contains(text(),"Customize")]`).click(),
      this.page.waitForSelector(`//h2[contains(text(),"Customize")]`, {
        state: `visible`,
      }),
    ]);
  }

  async getTextStyle() {
    const style = await this.page
      .locator(`//div[contains(text(),'left to buy')]`)
      .getAttribute("style");
    await console.log(style);
  }
}

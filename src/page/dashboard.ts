import { Page } from "@playwright/test";
import BoostConvert from "./boost_convert_main";
import { CommonPage } from "./pages";

export default class DashBoard {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async clickAppsBtn() {
    await this.page.locator(`//span[contains(text(),"Apps")]`).click();
    await Promise.all([
      this.page.locator(`//p[contains(text(),"Boost Convert")]`).click(),
      this.page.waitForSelector(`//h2[contains(text(),"Pop types")]`, {
        state: "visible",
      }),
    ]);
  }
}

import { test, expect } from "@playwright/test";

test("Demo Visual Testing", async ({ page }) => {
  test.setTimeout(1200000);
  await page.goto("https://www.shopbase.com/");
  await page.waitForLoadState(`networkidle`);
  //   await expect(page.locator(`//form[@id='email-form']`)).toHaveScreenshot();
  //   await page.screenshot({ path: "screenshot2.png", fullPage: true });
  //   await page
  //     .locator(`//input[@value='Start Free Trial']`)
  //     .screenshot({ path: "screenshot3.png" });
  //   expect(
  //     await page.textContent(`//input[@value='Start Free Trial']`)
  //   ).toMatchSnapshot(`screenshot3.png`);

  await expect(
    page.locator(`//input[@value='Start Free Trial']`)
  ).toHaveScreenshot(`screenshot3.png`);
});

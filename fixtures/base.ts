import { test as baseTest } from "@playwright/test";
import DashBoard from "../src/page/dashboard";
import LoginPage from "../src/page/login";
import BoostConvert from "../src/page/boost_convert_main";

const _test = baseTest.extend<{
  loginPage: LoginPage;
  dashBoard: DashBoard;
  boostConvert: BoostConvert;
}>({
  loginPage: async ({ page }, use) => {
    const loginDomain: string = process.env.SHOPBASE_LOGIN_DOMAIN!;
    const loginPage = new LoginPage(loginDomain, page);
    await loginPage.gotoLoginPage();
    await loginPage.enterUserCredentials({
      email: "(YourEmail)",
      password: "(YourPass)",
    });
    await loginPage.selectShopbaseShop();
    await use(loginPage);
  },

  dashBoard: async ({ page }, use) => {
    await use(new DashBoard(page));
  },
  boostConvert: async ({ page }, use) => {
    await use(new BoostConvert(page));
  },
});

export default _test;
export const expect = _test.expect;

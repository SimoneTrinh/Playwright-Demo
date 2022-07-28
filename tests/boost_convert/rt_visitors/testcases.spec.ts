import test, { expect } from "../../../fixtures/base";

//Test case
test.describe("Test case 01", () => {
  test("Expect can select exact product for config", async ({
    loginPage,
    dashBoard,
    boostConvert,
  }) => {
    test.step("Open App Menu", async () => {
      await dashBoard.clickAppsBtn();
    });

    test.step("Go to Realtime Visitors Settings Page", async () => {
      await boostConvert.gotoRealtimeVisitors();
    });

    test.step("Open Select Product Popup", async () => {
      await boostConvert.clickBtnSelectProduct();
    });

    test.step("Select/Remove all products", async () => {
      await boostConvert.selectAllProduct();
      await boostConvert.removeAllProduct();
    });

    test.step("Add products to the list", async () => {
      await boostConvert.addProduct();
      await boostConvert.clickContinueBtn();
    });
  });
});

test.describe("Test case 02", () => {
  test("Expect API is valid for default setting value config", async ({
    request,
  }) => {
    const baseURL =
      "https://sbaseglow.onshopbase.com/admin/copt/timers/realtime-visitors/settings.json";
    const response = await request.get(baseURL, {
      headers: {
        "X-ShopBase-Access-Token": `0f86b9126fd5b7e092af0fe33e8cebc28c15367a80904dd2f44807e576c9f68b`,
      },
    });
    expect(response.ok).toBeTruthy();
    // console.log(await response.json());
    expect(await response.json()).toMatchObject({
      settings: {
        enable: true,
        number_random_from: 10,
        number_random_to: 100,
      },
    });
  });
});

test.describe("Test case 03", () => {
  test("Expect button Change hide after click", async ({
    loginPage,
    dashBoard,
    boostConvert,
  }) => {
    await dashBoard.clickAppsBtn();
    await boostConvert.gotoRealtimeVisitors();
    await boostConvert.clickChangeBtn();
  });
});

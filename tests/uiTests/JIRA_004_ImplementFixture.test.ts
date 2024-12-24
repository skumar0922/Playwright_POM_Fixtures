import { test, expect } from '../fixtures/fixture';

test.describe("Test Fixtures", async () => {
    test.beforeEach(async ({ landingPage }) => {
        // Perform setup before each test
        await landingPage.page.goto("https://letcode.in");
        await landingPage.page.waitForTimeout(2000);
      });


  test("Verify Button", async ({ landingPage }) => {
    await expect(landingPage.eleLoginBtn).toBeVisible();
  });

});
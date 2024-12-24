import { test, expect } from '../fixtures/fixture';

test.describe("Learn How to Handle Different Input Fields", () => {
  test.beforeEach(async ({ landingPage, loginPage, homePage, exploreWorkspace }) => {
    // Navigate to the test environment
    await landingPage.page.goto("https://letcode.in"); // Replace with ENV.testEnv if needed
    await landingPage.clickLogin1Btn();

    // Log in
    await loginPage.login("battulas@yopmail.com", "Spring_2019");

    // Navigate to Explore Workspace
    console.log("----- Exploring workspace -----");
    await homePage.eleExploreWorkspace.click();
    await landingPage.page.waitForTimeout(2000);
    expect(await exploreWorkspace.eleInputCard.textContent()).toContain("Input");
    await exploreWorkspace.eleEditLink.click();
  });

  test("Enter Full Name", async ({ exploreWorkspace }) => {
    const fullName = await exploreWorkspace.eleEnterFullNameField.getAttribute('placeholder');
    expect(fullName).toBe("Enter first & last name");
  });

  test("Append Text", async ({ exploreWorkspace }) => {
    const appendTextField = exploreWorkspace.eleAppendTextField;
    await appendTextField.focus();
    await exploreWorkspace.page.keyboard.press("Meta+ArrowRight");
    await appendTextField.type(" hello");
  });

  test("Get Text", async ({ exploreWorkspace }) => {
    const text = await exploreWorkspace.eleInsideTextField.inputValue();
    expect(text).toBe("ortonikc");
  });

  test("Clear Text", async ({ exploreWorkspace }) => {
    // Clear the input field
    await exploreWorkspace.eleClearMeTextField.fill("");

    // Get the current value of the input field
    const clearText = await exploreWorkspace.eleClearMeTextField.inputValue();

    // Assert that the input field is empty
    expect(clearText).toBe("");
  });
});
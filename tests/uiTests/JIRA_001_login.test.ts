import { Browser, BrowserContext, chromium, Page } from "@playwright/test"
import {test, expect} from "../fixtures/fixture"
import Credentials from "../../utils/encrypt&decrypt";
import * as dotenv from 'dotenv';
dotenv.config(); // Ensure .env is loaded


test.describe(" Let Code - Home Page - JIRA_001", async () => {
    // Initialize Credentials
    const credentials = new Credentials();

    // Get decrypted email and password
    const decryptedEmail = credentials.getDecryptedEmail();
    const decryptedPassword = credentials.getDecryptedPassword();


    test.beforeEach("", async({page})=>{
        await page.goto("https://letcode.in");
        await page.waitForTimeout(2000);
    });

    test("Verify landing Page Url - Tc_001", async ({landingPage}) => {
        expect(landingPage.page.url()).toContain('https://letcode.in')
    });

    test("Verify Login Page Elements - TC_002", async ({loginPage, landingPage, page}) => {
        await landingPage.clickLogin1Btn();
        await page.waitForTimeout(2000);
        expect(loginPage.eleEmailField).toBeVisible();
        expect(loginPage.elePasswordField).toBeVisible();
    });

    test("Login - TC_003", async ({loginPage,landingPage, homePage, commonFunctions, page}) => {
        await landingPage.clickLogin1Btn();
        await page.waitForTimeout(2000);
        await loginPage.login(decryptedEmail, decryptedPassword);
        await page.waitForTimeout(2000); 
        const toasterText = await commonFunctions.toaster;
        expect(await toasterText.textContent()).toContain("Welcome");
        await page.waitForTimeout(2000);  
        expect(homePage.eleSignOutBtn).toBeVisible();
    });

    test("Sign Out - TC_004", async ({homePage, landingPage, page, loginPage, commonFunctions}) => {
        await landingPage.clickLogin1Btn();
        await page.waitForTimeout(2000);
        await loginPage.login(decryptedEmail, decryptedPassword);
        await homePage.eleSignOutBtn.click();
        const toasterText = await commonFunctions.toaster;
        expect(await toasterText.textContent()).toContain("Bye!");
    });

    test.skip("Skip Test - TC_005", async () => {
        console.log("---- Skipping This Test -----");
    });
});

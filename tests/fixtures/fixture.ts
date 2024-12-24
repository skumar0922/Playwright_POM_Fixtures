// fixtures/base.fixtures.ts
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { LandingPage } from '../pages/landingPage';
import { ExploreWorkspace} from '../pages/exploreWorkspace.page'
import CommonFunctions from '../pages/common.page';

type Pages = {
    loginPage: LoginPage;
    homePage: HomePage;
    landingPage: LandingPage;
    exploreWorkspace: ExploreWorkspace;
    commonFunctions: CommonFunctions;
};

export const test = base.extend<Pages>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    landingPage: async ({ page }, use) => {
        await use(new LandingPage(page));
    },

    exploreWorkspace: async({page}, use) => {
        await use(new ExploreWorkspace(page));
    },

    commonFunctions: async({page}, use) =>{
        await use(new CommonFunctions(page))
    },

    
});


export { expect } from '@playwright/test';
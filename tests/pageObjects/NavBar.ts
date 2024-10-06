import { Page, Locator } from '@playwright/test';

class NavBar {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get logo(): Locator {
        return this.page.locator('.nav-logo');
    }

    get dashboardTitle(): Locator {
        return this.page.locator('h1').filter({ hasText: 'Dashboard Demo' });
    }

    get notificationsIcon(): Locator {
        return this.page.locator('h2 svg[aria-label="Notifications"]');
    }

    async isLogoVisible(): Promise<boolean> {
        return await this.logo.isVisible();
    }

    async getDashboardTitleText(): Promise<string | null> {
        return await this.dashboardTitle.textContent();
    }

    async isNotificationsIconVisible(): Promise<boolean> {
        return await this.notificationsIcon.isVisible();
    }
}

export default NavBar;

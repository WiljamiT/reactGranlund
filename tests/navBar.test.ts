import { test, expect } from '@playwright/test';
import NavBar from './pageObjects/NavBar';

test.describe('NavBar Tests', () => {
    let navBar: NavBar;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://zealous-ground-02d7ac310.5.azurestaticapps.net');
        navBar = new NavBar(page);
    });

    test('should display the logo', async () => {
        expect(await navBar.isLogoVisible()).toBe(true);
    });

    test('should display the correct dashboard title', async () => {
        const titleText = await navBar.getDashboardTitleText();
        expect(titleText?.trim()).toBe('Dashboard Demo');
    });

    test('should display the notifications icon', async () => {
        expect(await navBar.isNotificationsIconVisible()).toBe(true);
    });
});

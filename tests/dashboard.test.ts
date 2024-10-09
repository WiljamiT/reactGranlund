import { test, expect } from '@playwright/test';
import DashboardPage from './pageObjects/dashboardPage'

test.describe('Dashboard Tests', () => {
    let dashboardPage: DashboardPage;

    test.beforeEach(async ({ page }) => {
        dashboardPage = new DashboardPage(page);
        await dashboardPage.navigate();
    });

    test('should display the correct title', async () => {
        const title = await dashboardPage.getTitleText();
        expect(title?.trim()).toBe('Granlund Dashboard Demo');
    });

    test('should display the services card', async () => {
        const serviceText = await dashboardPage.getServiceText();
        expect(serviceText).toBe('Palvelut');
    });

    test('should display the location card', async () => {
        const locationText = await dashboardPage.getLocationText();
        expect(locationText).toBe('Sijainti');
    });

    test('should display the revenue card', async () => {
        const revenueText = await dashboardPage.getRevenueText();
        expect(revenueText).toBe('Liikevaihto');
    });

    test('should display the established card', async () => {
        const establishedText = await dashboardPage.getEstablishedText();
        expect(establishedText).toBe('Perustettu');
    });

    test('should display the age card', async () => {
        const ageText = await dashboardPage.getAgeText();
        expect(ageText).toBe('Ikä');
    });

    test('should display the personnel card', async () => {
        const personnelText = await dashboardPage.getPersonnelText();
        expect(personnelText).toBe('Henkilöstö');
    });
});

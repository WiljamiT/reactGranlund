import { Page, Locator } from '@playwright/test';

class DashboardPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get title(): Locator {
        return this.page.locator('h1').first();
    }

    get serviceCard(): Locator {
        return this.page.locator('text=Palvelut').first();
    }

    get locationCard(): Locator {
        return this.page.locator('text=Sijainti').first();
    }

    get revenueCard(): Locator {
        return this.page.locator('text=Liikevaihto').first();
    }

    get establishedCard(): Locator {
        return this.page.locator('text=Perustettu').first();
    }

    get ageCard(): Locator {
        return this.page.locator('text=Ikä').first();
    }

    get personnelCard(): Locator {
        return this.page.locator('text=Henkilöstö').first();
    }

    async navigate(): Promise<void> {
        await this.page.goto('https://zealous-ground-02d7ac310.5.azurestaticapps.net');
    }

    async getTitleText(): Promise<string> {
        const spans = this.page.locator('h1 span');
        const count = await spans.count();
        let titleText = '';
    
        for (let i = 0; i < count; i++) {
            titleText += await spans.nth(i).innerText() + ' ';
        }
    
        return titleText.trim();
    }

    async getServiceText(): Promise<string> {
        return await this.serviceCard.innerText();
    }

    async getLocationText(): Promise<string> {
        return await this.locationCard.innerText();
    }

    async getRevenueText(): Promise<string> {
        return await this.revenueCard.innerText();
    }

    async getEstablishedText(): Promise<string> {
        return await this.establishedCard.innerText();
    }

    async getAgeText(): Promise<string> {
        return await this.ageCard.innerText();
    }

    async getPersonnelText(): Promise<string> {
        return await this.personnelCard.innerText();
    }
}

export default DashboardPage;

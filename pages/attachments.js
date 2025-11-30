
import path from 'path';
import { DashboardPage } from './dashboardPage';

exports.AttachmentPage = class AttachmentPage {
    constructor(page) {
        this.page = page;

        // Locators
        this.upload1 = page.getByRole('img', { name: 'EditIcon' });
        this.upload2 = page.getByRole('img', { name: 'UploadIcon' });
        this.upload3 = page.getByRole('button', { name: 'Click to edit' }).nth(1);
        this.upload4 = page.getByRole('button', { name: 'Click to edit' }).first();
        this.upload5 = page.getByRole('button', { name: 'Add More Documents' });
        this.fileInput = page.locator('input[type="file"]');
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.quoteReferance = page.locator('input[name="quoteReference"]');
    }

    async uploadFile(fileName) {
        const filePath = path.resolve(__dirname, '../tests/Doc', fileName);
        console.log('Uploading file from:', filePath); // Debug
        await this.fileInput.setInputFiles(filePath);
        await this.saveButton.click();
    }

    async selectUpload1(value) {
        await this.upload1.click();
        await this.quoteReferance.waitFor({ state: 'visible' });
        await this.quoteReferance.fill(value);
        const dashboardPage = new DashboardPage(this.page);
        await dashboardPage.enterDateToday(); // Ensure this works
        await this.uploadFile('mm.pdf');
    }


    async selectUpload2() {
        await this.upload2.click();
        await this.uploadFile('nn.pdf');
    }

    async selectUpload3() {
        await this.upload3.click();
        await this.uploadFile('RR.pdf');
    }

    async selectUpload4(file) {
        await this.upload4.click();
        await this.quoteReferance.waitFor({ state: 'visible' });
        await this.quoteReferance.fill(file);
        const dashboardPage = new DashboardPage(this.page);
        await dashboardPage.enterDateToday(); // Ensure this works
        await this.uploadFile('file4.pdf'); // Replace with actual file name
    }

    async selectUpload5(value) {
        await this.upload5.click();
        await this.getByLabel('', { exact: true }).click(value);
        await this.uploadFile('file5.pdf'); // Replace with actual file name
    }
};

function getTodayDayNumberString() {
    const today = new Date();
    // Use getDate() to get the day of the month (1-31)
    return String(today.getDate());
}
exports.DashboardPage = class dashboardPage {
    constructor(page) {
        this.page = page;
        this.orderSubmission = page.getByRole('tab', { name: 'Order Submission' });
        this.provideOrder = page.locator('.MuiBox-root.css-k895zf').first();
        this.customerName = page.locator('input[name="fcxGenInfoForm.fcxGenInfoFS.2c2a9138-845b-4005-84bc-8c6ef057048a"]');
        this.billingAccount = page.getByLabel('', { exact: true }).first();
        this.productName = page.getByLabel('', { exact: true }).first();
        this.dateSigned = page.getByRole('button', { name: 'Choose date' })
        this.salesChannel = page.locator('[id="mui-component-select-fcxGenInfoForm.fcxGenInfoFS.bf1482ae-4c90-4320-ae29-f1215508bbef"]');
        this.endCustomerName = page.locator('input[name="fcxGenInfoForm.fcxGenInfoFS.bc61fe7a-ccf3-4557-9584-042a0f3742f2"]');
        this.salesCountry = page.getByLabel('', { exact: true });
        this.customerContact = page.locator('input[name="fcxGenInfoContactForm.fcxCustContactFS.2f8494bd-7f0a-41a1-9d1a-7ba09f85ab94"]');
        this.customerEmail = page.locator('input[name="fcxGenInfoContactForm.fcxCustContactFS.5113d276-5bf3-4b12-ab8c-e304d50dd177"]');
        this.customerNumber = page.locator('input[name="fcxGenInfoContactForm.fcxCustContactFS.8c0efcda-ee87-450b-a7c0-959e041da3fd"]');
        this.vodafoneManager = page.locator('input[name="fcxGenInfoContactForm.fcxVFAccManagerContactFS.b40f7479-e098-48c7-bf2b-d8fae3b1cd92"]');
        this.managerEmail = page.locator('input[name="fcxGenInfoContactForm.fcxVFAccManagerContactFS.2b8814ce-4516-43be-85e7-ead5e63c6bbf"]');
        this.managerNumber = page.locator('input[name="fcxGenInfoContactForm.fcxVFAccManagerContactFS.c11f1845-cf6b-4759-b5ae-3b174da2aac5"]');
        this.technicalContact = page.locator('input[name="fcxGenInfoContactForm.fcxVFTechicalContactFS.e4eb9442-1e36-4a19-9b8d-ca9b479f06e8"]');
        this.technicalEmail = page.locator('input[name="fcxGenInfoContactForm.fcxVFTechicalContactFS.1a09da6c-6db2-4f07-9644-4110d252ffb6"]');
        this.technicalNumber = page.locator('input[name="fcxGenInfoContactForm.fcxVFTechicalContactFS.ce8d4bd9-4d47-44bf-96b0-8bd522153789"]');
    }

    async navigateToOrderSubmission() {
        await this.orderSubmission.click();
    }
    async clickProvideOrder() {
        await this.provideOrder.click();
    }

    async enterCustomerName(name) {
        await this.customerName.click(); // Open dropdown
        await this.page.locator(`li:has-text("${name}")`).click()
    }


    async enterBillingAccount(account) {

        await this.billingAccount.click(); // Open dropdown
        await this.page.locator(`li:has-text("${account}")`).click()

    }


    async enterProductName(product) {

        await this.productName.click(); // Open dropdown
        await this.page.getByRole('option', { name: `${product}` }).click();
    }

    async enterDateSigned(date) {
        const todayDayNumber3 = getTodayDayNumberString();
        await this.dateSigned.click();
        await this.page.getByRole('button', { name: 'Choose date' }).click();
        await this.page.getByRole('gridcell', { name: todayDayNumber3 }).click();
    }


    async selectSalesChannel(channelName) {
        await this.salesChannel.click();
        await this.page.locator(`li:has-text("${channelName}")`).click()

    }


    async enterEndCustomerName(name) {
        await this.endCustomerName.click();
        await this.endCustomerName.fill(name);
    }


    async selectSalesCountry(country) {
        await this.salesCountry.click();
        await this.page.getByRole('option', { name: country, exact: true }).click()


    }


    async enterCustomerContact(contact) {
        await this.customerContact.pressSequentially(contact);
    }
    async enterCustomerEmail(email) {
        await this.customerEmail.fill(email);
    }
    async enterCustomerNumber(number) {
        await this.customerNumber.fill(number);
    }
    async enterVodafoneManager(manager) {
        await this.vodafoneManager.pressSequentially(manager);
    }
    async enterManagerEmail(email) {
        await this.managerEmail.fill(email);
    }
    async enterManagerNumber(number) {
        await this.managerNumber.fill(number);
    }
    async enterTechnicalContact(contact) {
        await this.technicalContact.pressSequentially(contact);
    }
    async enterTechnicalEmail(email) {
        await this.technicalEmail.fill(email);
    }
    async enterTechnicalNumber(number) {
        await this.technicalNumber.fill(number);
    }

    async logout() {
        await this.openProfileMenu();
        await this.logoutButton.click();
    }
}

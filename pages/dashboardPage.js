function getTodayDayNumberString() {
    const today = new Date();
    // Use getDate() to get the day of the month (1-31)
    return String(today.getDate());
}
exports.DashboardPage = class dashboardPage {
    constructor(page) {
        this.page = page;
        this.orderSubmission = page.getByRole('tab', { name: 'Order Submission' });
        this.orderValidation = page.getByRole('tab', { name: 'Order Validation' });

        this.searchBox = page.getByRole('textbox', { name: 'search' });
        this.menuOpener = page.getByTestId('menu-opener-button');
        this.allorders = page.getByRole('button', { name: 'All Orders' });
        this.myOrders = page.getByRole('button', { name: 'My Orders' });
        this.provideOrder = page.locator('.MuiBox-root.css-k895zf').first();
        this.customerName = page.locator('input[name="fcxGenInfoForm.fcxGenInfoFS.2c2a9138-845b-4005-84bc-8c6ef057048a"]');
        this.billingAccount = page.getByLabel('', { exact: true }).first();
        this.productName = page.getByLabel('', { exact: true }).first();
        this.orderCatagory = page.getByLabel('', { exact: true }).first();
        this.dateToday = page.getByRole('button', { name: 'Choose date' })
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
        this.customrePOReferance = page.locator('input[name="fcxGenInfoForm.fcxGenInfoFS.0783f4f2-8974-47bc-87da-e9a5ac91d4a2"]');
        this.opportunityID = page.locator('input[name="fcxGenInfoForm.fcxGenInfoFS.5bdd2f72-39ce-4ad0-8a01-04ef52a29c95"]');
        this.legalOrgID = page.locator('input[name="fcxGenInfoForm.fcxGenInfoFS.bc7c09d2-4687-4149-8341-2d4a163a30de"]');
        this.bulk = page.getByLabel('', { exact: true });
        this.projectManaerName = page.locator('input[name="fcxGenInfoContactForm.fcxProjectManagerContactFS.c14d9361-6c94-453c-a098-fe72cd3d606c"]');
        this.projectManagerEmail = page.locator('input[name="fcxGenInfoContactForm.fcxProjectManagerContactFS.a7396474-a5aa-411f-bdac-72b7ae97bbdc"]');
        this.projectManagerNumber = page.locator('input[name="fcxGenInfoContactForm.fcxProjectManagerContactFS.25936c98-fea6-4976-8fb6-758abd7276ed"]');
        this.additionalContact1 = page.locator('input[name="fcxGenInfoContactForm.fcxAddInternalContactFS.2a9389ad-809a-4d04-a1a6-4a50968673fa"]');
        this.additionalContact1Email = page.locator('input[name="fcxGenInfoContactForm.fcxAddInternalContactFS.2c62fb69-6c19-4580-abc4-e7e8d06f3aa3"]');
        this.additionalContact1Number = page.locator('input[name="fcxGenInfoContactForm.fcxAddInternalContactFS.0098376b-b956-440f-9e68-db5e3280b40d"]');
        this.additionalContact2 = page.locator('input[name="fcxGenInfoContactForm.fcxAddInternalContact2FS.2a9389ad-809a-4d04-a1a6-4a50968673fa"]');
        this.additionalContact2Email = page.locator('input[name="fcxGenInfoContactForm.fcxAddInternalContact2FS.2c62fb69-6c19-4580-abc4-e7e8d06f3aa3"]');
        this.additionalContact2Number = page.locator('input[name="fcxGenInfoContactForm.fcxAddInternalContact2FS.0098376b-b956-440f-9e68-db5e3280b40d"]');
        this.orderSummary = page.locator('textarea[name="fcxGenInfoSummaryForm.fcxGeneralInfoSummaryFS.44d8d936-1314-4a84-b2e6-04ec3d39e860"]');
        this.proceedToSite = page.getByRole('button', { name: 'Proceed to Site & Service' });
        this.proceedToConf = page.getByRole('button', { name: 'Proceed to Conf. Service' });
        this.proceedToAttachments = page.getByRole('button', { name: 'Proceed to Attachment' });
        this.proceedToSubmit = page.getByRole('button', { name: 'Submit Order' });
        this.downloadSunmitPdf = page.getByRole('button', { name: 'Download Order PDF' });
        this.copySubmitOrder = page.getByRole('button', { name: 'Copy Order ID & Close' });
        this.acceptOrderHeader = page.getByRole('button', { name: 'Accept Order Header' });
        this.close = page.getByRole('button', { name: 'Close' });
        this.proceedToConfEdit = page.getByRole('img', { name: 'Edit Service' });
    }


    async clickAcceptOrderHeader() {
        await this.acceptOrderHeader.click();
    }
    async clickClose() {
        await this.close.click();
    }

    async navigateToOrderSubmission() {
        await this.orderSubmission.click();
    }
    async navigateOrderValidation() {
        await this.orderValidation.click();
    }
    async navigateToSearchAllOrders() {
        await this.allorders.click();
    }
    async navigateToMyOrders() {
        await this.myOrders.click();
    }
    async navigateToSearch() {
        await this.searchBox.click();
        await this.searchBox.press('Control+V');
    }

    async selfAssign() {
        await this.menuOpener.first().click();
        await this.page.getByRole('menuitem', { name: 'Self-Assign' }).click();
    }
    async editOrder() {
        await this.menuOpener.first().click();
        await this.page.getByRole('menuitem', { name: 'Edit' }).click();
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

    async selectOrderCategory(category) {
        await this.orderCatagory.click();
        await this.page.getByRole('option', { name: `${category}` }).click();
    }


    async enterDateToday() {
        const todayDayNumber = new Date().getDate().toString();
        await this.page.getByRole('button', { name: 'Choose date' }).click();
        await this.page.getByRole('gridcell', { name: todayDayNumber }).first().click();
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
        await this.page.getByRole('option', { name: country, exact: true }).click();
    }
    async selectbulkOption(value) {
        await this.bulk.click();
        await this.page.getByRole('option', { name: value, exact: true }).click();
    }

    async enterCustomerDetails(contact, email, number) {
        await this.customerContact.pressSequentially(contact);
        await this.customerEmail.fill(email);
        await this.customerNumber.fill(number);
    }
    async enterVodafoneManagerDetails(manager, email, number) {
        await this.vodafoneManager.pressSequentially(manager);
        await this.managerEmail.fill(email);
        await this.managerNumber.fill(number);
    }
    async enterTechnicalContactDetails(contact, email, number) {
        await this.technicalContact.pressSequentially(contact);
        await this.technicalEmail.fill(email);
        await this.technicalNumber.fill(number);
    }
    async enterCustomerPOReference(reference) {
        await this.customrePOReferance.fill(reference);
    }
    async enterOpportunityID(opportunityID) {
        await this.opportunityID.fill(opportunityID);
    }
    async enterLegalOrgID(legalID) {
        await this.legalOrgID.fill(legalID);
    }
    async enterProjectManagerDetails(manager, email, number) {
        await this.projectManaerName.pressSequentially(manager);
        await this.projectManagerEmail.fill(email);
        await this.projectManagerNumber.fill(number);
    }
    async enterAdditionalContact1Details(contact, email, number) {
        await this.additionalContact1.pressSequentially(contact);
        await this.additionalContact1Email.fill(email);
        await this.additionalContact1Number.fill(number);
    }
    async enterAdditionalContact2Details(contact, email, number) {
        await this.additionalContact2.pressSequentially(contact);
        await this.additionalContact2Email.fill(email);
        await this.additionalContact2Number.fill(number);
    }
    async enterOrderSummary(summary) {
        await this.orderSummary.fill(summary);
    }
    async clickProceedToSite() {
        await this.proceedToSite.click();
    }

    async clickProceedToConf() {
        await this.proceedToConf.click();
    }
    async clickProceedToAttachments() {
        await this.proceedToAttachments.click();
    }
    async selectSubmit() {
        await this.proceedToSubmit.click();
        await this.downloadSunmitPdf.click();
        await this.copySubmitOrder.click();
    }
}

exports.MSPConfPage = class mspconfPage {
    constructor(page) {
        this.page = page;
        this.editConf = page.getByRole('img', { name: 'Edit Service' });
        this.feasibilityID = page.locator('input[name="fcxMSPNNIForm.fcxMSPNNIFS.0f384d0d-7d26-465a-b720-dd10e9f0c442"]');
        this.accessBandwidth = page.locator('[id="mui-component-select-fcxMSPNNIForm.fcxMSPNNIFS.f8327e69-6378-4913-a487-7fb6b7b4d162"]');
        this.customerInterface = page.locator('[id="mui-component-select-fcxMSPNNIForm.fcxMSPNNIFS.33469b4f-ae8b-4de0-9077-716da870d68a"]');
        this.popLocation = page.getByLabel('', { exact: true }).first();
        this.crossConnection = page.getByLabel('', { exact: true }).first()
        this.ccProvidedBy = page.locator('[id="mui-component-select-fcxMSPNNIForm.fcxMSPNNIFS.25337dff-a102-4d8c-83e4-3da8e6356b72"]');
        this.ccDetails = page.locator('input[name="fcxMSPNNIForm.fcxMSPNNIFS.dce6057e-d922-4413-8bb5-b971b073c33d"]');
        this.floor = page.locator('input[name="fcxMSPNNIForm.fcxMSPNNIFS.fafd05f6-21a4-4bf1-8569-8d0f0ffc05a4"]');
        this.rooms = page.locator('input[name="fcxMSPNNIForm.fcxMSPNNIFS.8a5dec74-e0e1-46dc-be79-2147178cf81d"]');
        this.mounting = page.getByLabel('', { exact: true });
        this.rackDetails = page.locator('input[name="fcxMSPNNIForm.fcxMSPNNIFS.16b3eed8-6e40-4ca2-84e8-c7c69b938740"]');
        this.fNote = page.locator('textarea[name="fcxMSPNNIForm.fcxMSPNNIFS.2912d863-b313-442a-8056-232e98be1b76"]');
        this.proceedTocost = page.getByRole('button', { name: 'Proceed to Cost and Pricing' });
        this.nrc = page.locator('input[name="fcxMSPNNICustomerPricingForm.fcxMSPNNIServiceCostFS.ebce7ee4-a55b-4d87-a360-9007eb09723c"]');
        this.mrc = page.locator('input[name="fcxMSPNNICustomerPricingForm.fcxMSPNNIServiceCostFS.f59f7d92-0874-4c0f-a5a8-fdfe8065b2ae"]');
        this.finishService = page.getByRole('button', { name: 'Finish Service' });
    }


    async clickEditConfiguration() {
        await this.editConf.click();
    }

    async enterFeasibilityID(value) {
        await this.feasibilityID.fill(value);
    }


    async selectAccessBandwidth(option) {
        await this.accessBandwidth.waitFor({ state: 'visible' });
        await this.accessBandwidth.click();
        await this.page.getByRole('option', { name: option }).click();
    }


    async selectCustomerInterface(option) {
        await this.customerInterface.click();
        await this.page.getByRole('option', { name: option }).click();
    }


    async enterPopLocation(option) {
        await this.popLocation.click(); // Opens the dropdown
        await this.page.getByRole('option', { name: option }).click(); // Selects the option
    }


    async enterCrossConnection(connect) {
        await this.crossConnection.click();
        await this.page.getByRole('option', { name: connect, exact: true }).click();
    }

    async selectCCProvidedBy(provide) {
        await this.ccProvidedBy.click();
        await this.page.getByRole('option', { name: provide, exact: true }).click();
    }

    async enterCCDetails(value) {
        await this.ccDetails.fill(value);
    }

    async enterFloor(value) {
        await this.floor.fill(value);
    }

    async enterRooms(value) {
        await this.rooms.fill(value);
    }


    async selectMounting(option) {
        await this.mounting.click();
        await this.page.getByRole('option', { name: option }).click();
    }


    async enterRackDetails(value) {
        await this.rackDetails.fill(value);
    }

    async enterFNote(value) {
        await this.fNote.fill(value);
    }

    async clickProceedToCost() {
        await this.proceedTocost.click();
    }

    async enterNRC(value) {
        await this.nrc.fill(value);
    }

    async enterMRC(value) {
        await this.mrc.fill(value);
    }

    async clickFinishService() {
        await this.finishService.click();
    }

}
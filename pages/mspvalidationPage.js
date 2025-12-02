exports.MspvalidationPage = class mspvalidationPage{
    constructor(page) {
        this.page = page;

       
this.searchTextbox = page.getByRole('textbox', { name: 'search' });
        this.menuOpenerBtn = page.getByTestId('menu-opener-button');
        this.editMenuItem = page.getByRole('menuitem', { name: 'Edit' });
        this.proceedToSiteBtn = page.getByRole('button', { name: 'Proceed to Site & Service' });
        this.proceedToConfBtn = page.getByRole('button', { name: 'Proceed to Conf. Service' });
        this.editServiceImg = page.getByRole('img', { name: 'Edit Service' });
        this.proceedToEnrichBtn = page.getByRole('button', { name: 'Proceed to Service Enrich Info' });
        this.openBtn = page.getByRole('button', { name: 'Open' });
        this.adKhanOption = page.getByRole('option', { name: 'AD Khan ad.khan@vodafone.com' });
        this.enrichDropdown = page.locator('[id="mui-component-select-fcxServiceInfoEnrichForm.fcxServiceInfoEnrichFS.b74dbe08-2312-41f1-8f5d-518d4acfcd9e"]');
        this.ceaseTeamLabel = page.getByLabel('Cease Team');
        this.proceedToPOBtn = page.getByRole('button', { name: 'Proceed to PO Info' });
        this.proceedToCostBtn = page.getByRole('button', { name: 'Proceed to Cost and Pricing' });
        this.finishServiceBtn = page.getByRole('button', { name: 'Finish Service' });
        this.markValidatedImg = page.getByRole('img', { name: 'Mark as Validated' });
        this.closeBtn = page.getByRole('button', { name: 'Close' });
        this.acceptServiceImg = page.getByRole('img', { name: 'Accept Service' });
        this.amendImg = page.getByRole('img', { name: 'Amend' });
        this.chooseDateBtn = page.getByRole('button', { name: 'Choose date' });
        this.todayDateCell = page.locator('[role="gridcell"][aria-current="date"]');
        this.somOption = page.getByRole('option', { name: 'SOM' });
        this.amendInput = page.locator('input[name="fcxServiceInfoEnrichForm.fcxServiceInfoEnrichFS.3d5f5209-feeb-49c7-b437-956f7c343a1d"]');
        this.finishAmendBtn = page.getByRole('button', { name: 'Finish Amendment' });

    }
    
async editValidateFlow() {
        await this.searchTextbox.press('Control+V');
        await this.page.waitForTimeout(3000);
        await this.menuOpenerBtn.click();
        await this.editMenuItem.click();
        await this.proceedToSiteBtn.click();
        await this.proceedToConfBtn.click();
        await this.editServiceImg.click();
        await this.proceedToEnrichBtn.click();
        await this.openBtn.click();
        await this.adKhanOption.click();
        await this.enrichDropdown.click();
        await this.ceaseTeamLabel.click();
        await this.proceedToPOBtn.click();
        await this.proceedToCostBtn.click();
        await this.finishServiceBtn.click();
        await this.markValidatedImg.click();
        await this.page.waitForTimeout(3000);
        await this.closeBtn.click();
    }

    async amendFlow() {
        await this.page.waitForTimeout(3000);
        await this.acceptServiceImg.click();
        await this.amendImg.click();
        await this.proceedToEnrichBtn.click();
        await this.chooseDateBtn.click();
        await this.todayDateCell.click();
        await this.somOption.click();
        await this.amendInput.fill('Accept');
        await this.proceedToPOBtn.click();
        await this.proceedToCostBtn.click();
        await this.finishAmendBtn.click();
        await this.closeBtn.click();
    }

}
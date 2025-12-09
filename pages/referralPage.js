
// referralPage.js
//const { expect } = require('@playwright/test');
exports.ReferralPage = class referralPage {
    constructor(page) {
        this.page = page;
        // Locators for Referral Submission
        this.initiateReferralImg = page.getByRole('img', { name: 'Initiate Referral' });
        this.proceedToSiteBtn = page.getByRole('button', { name: 'Proceed to Site & Service' });
        this.proceedToConfBtn = page.getByRole('button', { name: 'Proceed to Conf. Service' });
        this.viewServiceImg = page.getByRole('img', { name: 'View Service' });
        this.editIcon = page.getByRole('img', { name: 'EditIcon' }).nth(2);
        this.proceedToCostBtn = page.getByRole('button', { name: 'Proceed to Cost and Pricing' });
        this.finishServiceBtn = page.getByRole('button', { name: 'Finish Service' });
        this.proceedToAttachmentBtn = page.getByRole('button', { name: 'Proceed to Attachment' });
        this.submitReferralBtn = page.getByRole('region').getByRole('button', { name: 'Submit Referral' });
        this.noteLabel = page.getByLabel('#Note: Carrier Quote expired - 30 days (no Clearing)');
        this.summaryTextarea = page.locator('textarea[name="fcxSubmitReferralSummaryForm.fcxSubmitReferralSummaryFS.98a67041-c369-460c-988a-df2c7a50a571"]');
        this.submitBtn = page.getByRole('button', { name: 'Submit' });

        // Locators for Referral Response
        this.respondMenuItem = page.getByRole('menuitem', { name: 'Respond' });
        this.editServiceImg = page.getByRole('img', { name: 'Edit Service' });
        this.bandwidthBtn = page.getByRole('button', { name: '100M' });
        this.bandwidthOption = page.getByRole('option', { name: '1G' });
        this.backToServiceText = page.getByText('Back to Service Finish Service');
        this.submitResponseBtn = page.getByRole('region').getByRole('button', { name: 'Submit Response' });
        this.proceedAnywayBtn = page.getByRole('button', { name: 'Proceed Anyway' });
        this.savedResponseText = page.getByText('Saved SuccessfullyResponse');
        this.closeImg = page.getByRole('img').nth(1);
        this.orderValidationTab = page.getByRole('tab', { name: 'Order Validation' });
        this.referralsBtn = page.getByRole('button', { name: 'Referrals' });
        this.searchTextbox = page.getByRole('textbox', { name: 'search' });
        this.menuOpenerBtn = page.getByTestId('menu-opener-button');
        this.chatMenuItem = page.getByRole('menuitem', { name: 'Chat' });
        this.viewReferralMenuItem = page.getByRole('menuitem', { name: 'View Referral' });
        this.actionBtn = page.getByRole('button', { name: 'Action' });
        this.updateOrderBtn = page.getByRole('button', { name: 'Update Order and Close' });
        this.svgPathLocator = page.locator('.MuiBox-root.css-0 > svg > path');
    }

    // Referral Submission Flow
    async submitReferral() {
        await this.initiateReferralImg.click();
        await this.page.waitForTimeout(3000);
        await this.proceedToSiteBtn.click();
        await this.proceedToConfBtn.click();
        await this.viewServiceImg.click();
        await this.editIcon.click();
        await this.proceedToCostBtn.click();
        await this.finishServiceBtn.click();
        await this.page.waitForTimeout(3000);
        await this.proceedToAttachmentBtn.click();
        await this.submitReferralBtn.click();
        //await this.page.waitForTimeout(3000);
        await this.noteLabel.click();
        await this.summaryTextarea.fill('Accept');
        await this.page.waitForTimeout(3000);
        await this.submitBtn.click();
    }

    // Referral Response Flow
    async respondToReferral() {
        await this.respondMenuItem.click();
        await this.proceedToSiteBtn.click();
        await this.proceedToConfBtn.click();
        await this.editServiceImg.click();
        await this.bandwidthBtn.click();
        await this.bandwidthOption.click();
        await this.proceedToCostBtn.click();
        await this.backToServiceText.click();
        await this.finishServiceBtn.click();
        await this.proceedToAttachmentBtn.click();
        await this.submitResponseBtn.click();
        await this.proceedAnywayBtn.click();
        await this.savedResponseText.click();
        await this.closeImg.click();
        await this.orderValidationTab.click();
        await this.page.waitForTimeout(3000);
        await this.referralsBtn.click();
        await this.page.waitForTimeout(3000);
        await this.searchTextbox.click();
        await this.searchTextbox.press('Control+V');
        await this.page.waitForTimeout(3000);
        await this.menuOpenerBtn.click();
        await this.chatMenuItem.click();
        await this.closeImg.click();
        await this.menuOpenerBtn.click();
        await this.viewReferralMenuItem.click();
        await this.actionBtn.click();
        await this.updateOrderBtn.click();
        await this.svgPathLocator.click();
    }

}

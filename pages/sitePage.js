exports.SitePage = class sitePage {
    constructor(page) {
        this.page = page;
        this.createSite = page.getByRole('button', { name: 'Add New Site' });
        this.siteName = page.locator('input[name="fcxSiteForm.fcxSiteFS.9510db92-4c3c-42e9-9c67-b3e71beb5fbe"]');
        this.latitude = page.locator('input[name="fcxSiteForm.fcxSiteFS.01001956-886b-4c2a-a619-c561ec835017"]');
        this.longitude = page.locator('input[name="fcxSiteForm.fcxSiteFS.29ddd5ca-ad6a-4ad4-bed8-f8bd333d8bf5"]');
        this.country = page.getByLabel('', { exact: true }).first();
        this.townCity = page.locator('input[name="fcxSiteForm.fcxSiteFS.10d23b6d-4372-46a0-9fc8-72ee1e5ae9e0"]');
        this.streetAddress = page.locator('input[name="fcxSiteForm.fcxSiteFS.0c62b9a3-f677-424f-8e4c-f711e85463d7"]');
        this.postcode = page.locator('input[name="fcxSiteForm.fcxSiteFS.fc406348-98f9-4cf2-b91b-5f4a55bb85d2"]');
        this.buildingName = page.locator('input[name="fcxSiteForm.fcxSiteFS.6b6a269b-40bc-4068-9880-a6421aae2fea"]');
        this.buildingNumber = page.locator('input[name="fcxSiteForm.fcxSiteFS.e43ff72f-0917-4c69-b689-f0d12e5650dd"]');
        this.stateCuntry = page.locator('input[name="fcxSiteForm.fcxSiteFS.d6cc4edd-59d9-4e05-a944-4ec7bff29326"]');
        this.district = page.locator('input[name="fcxSiteForm.fcxSiteFS.efbad291-df71-4a54-97dd-d072d34ee419"]');
        this.siteContactName = page.locator('input[name="fcxSiteForm.fcxSiteContactFS.1b31fe73-37f3-4941-bef7-7db537c65b77"]');
        this.siteContactEmail = page.locator('input[name="fcxSiteForm.fcxSiteContactFS.b39a0514-1557-4ca1-ac05-1fbc7ef0447b"]');
        this.siteContactNumber = page.locator('input[name="fcxSiteForm.fcxSiteContactFS.0968aa37-872a-4339-9014-cae05b8bcfc1"]');
        this.alternateSiteContactName = page.locator('input[name="fcxSiteForm.fcxAlternateSiteContactFS.695b3dcb-e14e-4668-8d1b-4bd45aac98f7"]');
        this.alternateSiteContactEmail = page.locator('input[name="fcxSiteForm.fcxAlternateSiteContactFS.0903f38d-57e3-4849-afb1-8e21f68d5dd5"]');
        this.alternateSiteContactNumber = page.locator('input[name="fcxSiteForm.fcxAlternateSiteContactFS.ed8f14f6-1f0d-450f-9c65-abd481442b93"]');
        this.additionalInformation = page.locator('textarea[name="fcxSiteForm.fcxSiteSummaryFS.223f74b0-d5bc-4839-8007-dad42615dbe3"]');
        this.addSite = page.getByRole('button', { name: 'Add Site' });
        
    }
    async addCreateSite() {
        await this.createSite.click();
    }
    async enterSiteName(name) {
        await this.siteName.pressSequentially(name);
    }
    async enterLatitude(lat) {
        await this.latitude.fill(lat);
    }
    async enterLongitude(long) {
        await this.longitude.fill(long);
    }
    async selectCountry(country) {
        await this.country.click();
        await this.page.getByRole('option', { name: country, exact: true }).click();
    }
    async enterTownCity(townCity) {
        await this.townCity.fill(townCity);
    }
    async enterStreetAddress(streetAddress) {
        await this.streetAddress.fill(streetAddress);
    }
    async enterPostcode(postcode) {
        await this.postcode.fill(postcode);
    }
    async enterBuildingName(buildingName) {
        await this.buildingName.fill(buildingName);
    }
    async enterBuildingNumber(buildingNumber) {
        await this.buildingNumber.fill(buildingNumber);
    }
    async enterStateCountry(state) {
        await this.stateCuntry.fill(state);
    }
    async enterDistrict(district) {
        await this.district(district);
    }
    async enterSiteContactDetails(contact, email, number) {
        await this.siteContactName.fill(contact);
        await this.siteContactEmail.fill(email);
        await this.siteContactNumber.fill(number);
    }
    async enterAlternateContactDetails(contact, email, number) {
        await this.alternateSiteContactName.fill(contact);
        await this.alternateSiteContactEmail.fill(email);
        await this.alternateSiteContactNumber.fill(number);
    }
    async enterAdditionalInformation(info) {
        await this.additionalInformation.fill(info);
    }
    async clickAddSite() {
        await this.addSite.click();
    }
}
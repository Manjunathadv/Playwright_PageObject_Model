exports.LoginPage = class loginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('text=Username or email');
        this.passwordInput = page.locator('text=Password');
        this.loginButton = page.getByRole('button', { name: 'Sign In' });
    }
    async gotoLoginPage() {
        await this.page.goto('https://diam.test.digicom.vodafone.com/realms/dnext/protocol/openid-connect/auth?client_id=dnext-ui-client&redirect_uri=https%3A%2F%2Ftest.digicom.vodafone.com%2Fui%2FdigitalOrdering%2Forder%2Fnew&state=92eb208d-580e-4cf9-8a07-afda838c7ca0&response_mode=fragment&response_type=code&scope=openid&nonce=13358585-c3b5-4d0c-8a8b-931c6a309661');
     }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    // async navigate() {
    //     await this.page.goto('https://diam.test.digicom.vodafone.com/realms/dnext/protocol/openid-connect/auth?client_id=dnext-ui-client&redirect_uri=https%3A%2F%2Ftest.digicom.vodafone.com%2Fui%2FdigitalOrdering%2Forder-validation&state=5f684ad5-cdee-486e-8043-c9298463aafb&response_mode=fragment&response_type=code&scope=openid&nonce=0e4799bf-d477-4c99-bee5-7184419f0472');
    // }
    // async enterUsername(username) {
    //     await this.usernameInput.fill("GCC1@vmailsink.dmm.vodafone.com");
    // }
    // async enterPassword(password) {
    //     await this.passwordInput.fill("digicom123");
    // }
    // async clickLogin() {
    //     await this.loginButton.click();
    // }
}
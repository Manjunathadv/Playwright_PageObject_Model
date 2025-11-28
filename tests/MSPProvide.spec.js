import {test , expect} from '@playwright/test';
import {LoginPage} from '../pages/login.js';
import {DashboardPage} from '../pages/dashboardPage.js';
import path from 'path';

test('MSP Provide Login Test Suite', async ({page}) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('GCC1@vmailsink.dmm.vodafone.com','digicom123');
    await dashboardPage.navigateToOrderSubmission();
    await dashboardPage.clickProvideOrder();
    await dashboardPage.enterCustomerName('SPYDER TECH 2');
    await dashboardPage.enterBillingAccount('9557348');
    await dashboardPage.enterProductName('MSP NNI');
    await dashboardPage.enterDateSigned();
    await dashboardPage.selectSalesChannel('VBI - Carrier');
    await dashboardPage.enterEndCustomerName('Spyder Tech');
    await dashboardPage.selectSalesCountry('India');
    await dashboardPage.enterCustomerContact('Manjunath V' , 'manju@gmail.com' , '9876543210');
    // await dashboardPage.enterCustomerContact('Manjunath V');
    // await dashboardPage.enterCustomerEmail('manju@gmail.com');
    // await dashboardPage.enterCustomerNumber('9876543210');
    await dashboardPage.enterVodafoneManager('Ajay Kumar');
    await dashboardPage.enterManagerEmail('ajay@vodafone.com');
    await dashboardPage.enterManagerNumber('9123456780');
    await dashboardPage.enterTechnicalContact('Ravi Shankar');
    await dashboardPage.enterTechnicalEmail('ravi@vodafone.com');
    await dashboardPage.enterTechnicalNumber('9988776655');
    await page.pause()
});
import { browser } from "protractor";
import { theatatahelper } from "../page-objects/pages/the-atata/the-atata.helper"
import { commonPageHelper } from "../page-objects/common/common.helper";
import { theatataPageConstant } from "../page-objects/pages/the-atata/the-atata.constant"
import { SignUp } from "../page-objects/pages/the-atata/signup.po";

fdescribe('The Atata Website Tests: ', () => {
    let page = null;
    beforeEach(async () => {
        page = new SignUp();
        browser.waitForAngularEnabled(false); // This is false becasue we are testing non-angular app.
        browser.manage().deleteAllCookies();
        await theatatahelper.get();
    });

    it('As a user I can verify text on the page', async function () {
        await commonPageHelper.verifyPageTitle(theatataPageConstant.pageContent.h1Text);
        await commonPageHelper.clickOnAnchorText(theatataPageConstant.link.homePageLogo);
        await commonPageHelper.clickOnAnchorText(theatataPageConstant.link.menuPlans);
        await commonPageHelper.verifyTextOnPage(theatataPageConstant.pageContent.h1Text);
        await commonPageHelper.verifyTextOnPage(theatataPageConstant.pageContent.paraText);

    });

    it('As a user I can verify title on the page', async function () {

        await commonPageHelper.verifyPageTitle(theatataPageConstant.pageContent.h1Text);
    });

    it('As a user I can verify sign up link is workng', async function () {

        await commonPageHelper.clickOnAnchorText(theatataPageConstant.link.menuSignUp);
        await commonPageHelper.verifyCurrentUrl(theatataPageConstant.redirectLink.signUpLink);
    });

    it('As a user I can verify sign in link is workng', async function () {

        await commonPageHelper.clickOnAnchorText(theatataPageConstant.link.menuSignIn);
        await commonPageHelper.verifyCurrentUrl(theatataPageConstant.redirectLink.signInLink);

    });
    it('As a user I can verify system is not taking invalid email', async function () {

        await commonPageHelper.clickOnAnchorText(theatataPageConstant.link.menuSignUp);
        await commonPageHelper.verifyCurrentUrl(theatataPageConstant.redirectLink.signUpLink);
        await page.fillSignUpForm('Deepak', 'Thapa', 'deepakemail.com', 'P@ssw0rd');
        await page.verifyEmailFormat();

    });
    it('As a user I can verify sign up function is working', async function () {

        await commonPageHelper.clickOnAnchorText(theatataPageConstant.link.menuSignUp);
        await commonPageHelper.verifyCurrentUrl(theatataPageConstant.redirectLink.signUpLink);
        await page.fillSignUpForm('Deepak', 'Thapa', 'deepak@email.com', 'P@ssw0rd');
        await page.click(page.elements.chkAgreeInput)
        await page.click(page.elements.loginButton);
        await commonPageHelper.verifyUrlContain(theatataPageConstant.redirectLink.userLink);
        await commonPageHelper.verifyTextInH1('Deepak Thapa');
        await commonPageHelper.verifyTextInTable('deepak@email.com');
    });

});
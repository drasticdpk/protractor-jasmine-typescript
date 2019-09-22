import { by, element, browser } from 'protractor';
import { BasePage } from '../base.po'
export class SignUp extends BasePage {
    constructor() {
        super({});

        this.elements = {
            // login page
            //loginPage: element(by.css('.login-page')),
            firstNameInput: element(by.id('first-name')),
            lastNameInput: element(by.id('last-name')),
            emailInput: element(by.id('email')),
            passwordInput: element(by.id('password')),
            chkAgreeInput: element(by.xpath('//html/body/div/div/div[2]/div[5]/div/label/input')),
            loginButton: element(by.xpath('//html/body/div/div/div[2]/input')),
            invalidEmailMessage: element(by.xpath('//html/body/div/div/div[2]/div[3]/span'))
        };
    }
    /**
     * user sign up
     * @param firstname the first name
     * @param lastname the last name
     * @param email the email
     * @param password password
     */

    async fillSignUpForm(firstname, lastname, email, password) {
        // await this.waitUntil(this.elements.loginPage);
        await this.elements.firstNameInput.clear().sendKeys(firstname);
        await this.elements.lastNameInput.clear().sendKeys(lastname);
        await this.elements.emailInput.clear().sendKeys(email);
        await this.elements.passwordInput.clear().sendKeys(password);
    }
    async verifyEmailFormat() {
        expect(this.elements.invalidEmailMessage.getText()).toEqual('has incorrect format');
    }
}

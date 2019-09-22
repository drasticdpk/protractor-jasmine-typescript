import { browser, by, element } from "protractor";
 

export class theatatahelper {

    static async get() {
        await browser.get('https://demo.atata.io/');
        await console.log('User navigated to atata Website');
    }

}
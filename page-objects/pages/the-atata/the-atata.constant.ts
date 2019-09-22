export class theatataPageConstant {

    static get link() {
        return {
            homePageLogo: 'Atata Sample App',
            menuPlans: 'Plans',
            menuProducts: 'Products',
            menuCalculations: 'Calculations',
            menuSignIn: 'Sign In',
            menuSignUp: 'Sign Up'
        }
    }

    static get pageContent() {
        return {
            h1Text: 'Atata Sample App',
            paraText: 'Lorem ipsum dolor sit ame',
        };
    }

    static get redirectLink(){
        return{
            signUpLink : 'https://demo.atata.io/signup',
            signInLink : 'https://demo.atata.io/signin',
            userLink : 'https://demo.atata.io/users'
        }
    }

}

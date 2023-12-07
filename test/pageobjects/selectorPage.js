import { $ } from '@wdio/globals';
import Page from './urlPage.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get signInAccountBtn () {
        return $('//div[@data-automation-id="headerSignIn"]')
    }
    
    get signInCreateBtn () {
        return $('//button[@data-testid="sign-in"]')
    }

    get emailField () {
        return $('input[autocomplete="email"]')
    }
    
    get emailContinueBtn () {
        return $('button[id="login-continue-button"]')
    }

    get enterPasswordBtnChecked () {
        return $('input[id="ld_radio_1"]')
    }

    get passwordField () {
        return $('input[type="password"]')
    }

    get keepSignedInBtn () {
        return $('input[id="ld_checkbox_0"]')
    }

    get welcomeBackSignInBtn () {
        return $('#withpassword-sign-in-button')
    }

    get departmentsBtn () {
        return $('a[link-identifier="Departments"]')
    }

    get babyBtn () {
        return $('//button[@data-automation-id="header-departmentL1"][contains(text(), "Baby")]')
    }

    get shopAllBabyBtn () {
        return $('a[link-identifier="shopAllBaby"]')
    }

    get babyDealsBtn () {
        return $('button[aria-label="Baby Deals"]')
    }

    get pamoStroller () {
        return $('link-identifier="3566119496"')
    }

    get addStrollerToCart () {
        return $('button[aria-label="Add to cart - Pamo Babe 2-Seat Wagon Stroller Folding Baby Stroller with Adjustable Canopy, with add-on services"]')
    }

    get declineStrollerWarranty () {
        return $('//button[@type="button"][contains(text(), "Decline")]')
    }



    get Password () {
        return $('#password');
    }

    get signinBtn () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.Username.setValue(username);
        await this.Password.setValue(password);
        await this.signinBtn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();

import signupPageLocator, { signuppageLocator, signupErrorMessages } from '../locators/signupPage.locator';

// actions on the signup page

var signupPage = {


    enter_name: function (name) {
        return cy.get(signuppageLocator.txt_name())
            .type(name).should('have.value', name)
    },
    enter_orgname: function (orgname) {
        cy.get(signuppageLocator.txt_orgname())
            .type(orgname).should('have.value', orgname)
    },
    enter_email: function (email) {
        cy.get(signuppageLocator.txt_email())
            .type(email).should('have.value', email)
    },
    enter_confirmEmail: function (confrimEmail) {
        cy.get(signuppageLocator.txt_confirmEmail())
            .type(confrimEmail).should('have.value', confrimEmail)
    },
    enter_password: function (password) {
        cy.get(signuppageLocator.txt_password())
            .type(password);
        cy.get(signuppageLocator.txt_password()).invoke('attr', 'type').should('eq', 'password')
    },

    click_signup: function () {
        cy.contains('Sign up').click()

    },
    click_rb_agency: function () {
        return cy.get(signuppageLocator.rb_agency()).click();
    },
    click_rb_company: function () {
        return cy.get(signuppageLocator.rb_company()).click();
    },

    /* Error messages validations ( This we can make it as one common function and pass the message to validate)
        But because of only few errors and better readability on the page i have defined as different functions for each error
        */
    err_nameExists: function () {
        cy.contains(signupErrorMessages["name_errormessage"])
    },
    err_orgnameExists: function () {
        cy.contains(signupErrorMessages["orgname_errormessage"])
    },
    err_emailExists: function () {
        cy.contains(signupErrorMessages["email_errormessage"])
    },
    err_confirmemailExists: function () {
        cy.contains(signupErrorMessages["confirmemail_errormessage"])
    },
    err_passwordExists: function () {
        cy.contains(signupErrorMessages["password_errormessage"])
    },
    err_termsandconditionsExists: function () {
        cy.contains(signupErrorMessages["termsandconditions_errormessage"])
    },

    //click agree terms and conditions

    clickIAgree: function(){
       cy.get(signuppageLocator.cbx_agree()).click();
    },

    // Verify focus of textbox orgname

    focus_validation: function () {
        cy.get(signuppageLocator.txt_orgname()).focus()
            .should('have.focus')

    }

};

export default signupPage;
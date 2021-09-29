import { signuppageLocator ,signupErrorMessages} from '../locators/signupPage.locator';


var signupPage = {


    enter_name: function (name) {
    return    cy.get(signuppageLocator.name())
            .type(name).should('have.value', name)
    },
    enter_orgname: function (orgname) {
        cy.get(signuppageLocator.org_name())
            .type(orgname).should('have.value', orgname)
    },
    enter_email: function (email) {
        cy.get(signuppageLocator.email())
            .type(email).should('have.value', email)
    },
    enter_confirmEmail: function (confrimEmail) {
        cy.get(signuppageLocator.confirm_email())
            .type(confrimEmail).should('have.value', confrimEmail)
    },
    enter_password: function (password) {
        cy.get(signuppageLocator.email_password())
            .type(password);
        cy.get(signuppageLocator.email_password()).invoke('attr','type').should('eq','password')
    },
    click_signup: function () {
        cy.contains('Sign up').click()

    },
    click_rb_agency: function () {
        return cy.get(signuppageLocator.rb_agency())
    },
    click_rb_company: function () {
        return cy.get(signuppageLocator.rb_company())
    },
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

    focus_validation: function() {
        cy.get(signuppageLocator.org_name()).focus()
        .should('have.focus')
        
    }

};

export default signupPage;
import signuppageLocator from '../locators/signupPage.locator';

var signupPage = {

        
    enter_name: function(name) {
        cy.get(signuppageLocator.name())
        .type(name).should('have.value', name)
    },
    enter_orgname: function(orgname) {
        cy.get(signuppageLocator.org_name())
        .type(orgname).should('have.value', orgname)
    },
    enter_email: function(email) {
        cy.get(signuppageLocator.email())
        .type(email).should('have.value', email)
    },
    enter_confirmEmail: function(confrimEmail) {
        cy.get(signuppageLocator.confirm_email())
        .type(confrimEmail).should('have.value', confrimEmail)
    },
    click_signup:function(){
        cy.contains('Sign up').click()
            
    },
    click_rb_agency:function(){
        return cy.get(signuppageLocator.rb_agency())
    },
    click_rb_company:function(){
        return cy.get(signuppageLocator.rb_company())
    }
    
    

};

export default signupPage;
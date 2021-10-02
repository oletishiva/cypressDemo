import signupSuccessPageLocators from '../locators/signupSuccess.locator'


var signupSuccessPage={
    verifyConfirmEmalTextExists: function () {
        cy.contains(signupSuccessPageLocators["emailConfirm"])
    },
    verifyEmailSentToMessageExists: function () {
        cy.contains(signupSuccessPageLocators["emailsentto"])
    },
    VerifySignupEmailCorect: function(signupEmail)
    {
        cy.contains(signupEmail);
    }

}
export default signupSuccessPage;
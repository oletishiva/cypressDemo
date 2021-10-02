/// <reference types="Cypress" />
import { signuppageLocator, signupErrorMessages } from '../locators/signupPage.locator';
import signupPage from '../Pages/signup.pages'
import { generateRandomEmail } from '../utils/randomemailgenerator'
import manatalConstants from '../constants/manatal.constants';
import signupSuccessPage from '../Pages/signupSuccess.pages';

var companyemail = generateRandomEmail();


context('Postive Scenarios: Validation of sign up form', () => {
  beforeEach(() => {
    cy.visit('/signup/')
  })

describe('signup Page:Happy Flow of signup process', () => {
 /* beforeEach(() => {
    cy.visit('/signup/')
  })*/
  it('Verify User can able to signup with valid details', () => {

    signupPage.enter_name(manatalConstants.name);
    signupPage.enter_orgname(manatalConstants.orgname)
    signupPage.enter_email(companyemail)
    signupPage.enter_confirmEmail(companyemail)
    signupPage.enter_password(manatalConstants.password)
    signupPage.click_rb_agency().should('be.checked');
    signupPage.clickIAgree();
    signupPage.click_signup();
    signupSuccessPage.verifyConfirmEmalTextExists();
    signupSuccessPage.VerifySignupEmailCorect(companyemail);

  })

})

describe('signup Page:Input fields verification', () => {
 /* beforeEach(() => {
    cy.visit('/signup/')
  })*/
  it('Verify user can able to enter all the input fields--> all input fileds should be editable ', () => {

    signupPage.enter_name(manatalConstants.name);
    signupPage.enter_orgname(manatalConstants.orgname)
    signupPage.enter_email(companyemail)
    signupPage.enter_confirmEmail(companyemail)
    signupPage.enter_password(manatalConstants.password)
    

  })

})

describe('signup Page:Radio Button clickbale', () => {
  /* beforeEach(() => {
     cy.visit('/signup/')
   })*/
   it('Verify default agency is checked and company should be clickable ', () => {
 
 
     cy.get(signuppageLocator.rb_agency()).should('be.checked');
     signupPage.click_rb_company().should('be.checked');
     
   })
  })
  
   describe('signup Page:focus validation', () => {
     /*beforeEach(() => {
      cy.visit('/signup/')
     })*/
     it('verify the focus of name filed after enteing the text', () => {
       signupPage.enter_name(manatalConstants.name).should('have.focus')
     }),
       it('verify focus should be shifted to organization filed when invoked that with focus ', () => {
         signupPage.focus_validation()
       })
   })
 

 
})




describe('Verify Signup Page Error Validations', () => {
  it('visit the page and click on signup buttion', () => {
    cy.visit('/signup/')
    signupPage.click_signup();
  }),
    it('Verify Error message for name field', () => {
      signupPage.err_nameExists();
    }),
    it('Verify Error message for organization name field', () => {
      signupPage.err_orgnameExists();
    }),
    it('Verify Error message for email address field', () => {
      signupPage.err_emailExists();
    }),
    it('Verify Error message for confirm email address field', () => {
      signupPage.err_confirmemailExists();
    }),
    it('Verify Error message for password field', () => {
      signupPage.err_passwordExists();
    }),
    it('Verify Error message for I Agree field', () => {
      signupPage.err_termsandconditionsExists();
    })

  })


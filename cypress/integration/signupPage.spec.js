import signupPageLocator from '../locators/signupPage.locator'
import signupPage from '../Pages/signup.pages'
import {generateRandomEmail} from '../utils/randomemailgenerator'
import manatalConstants from '../constants/manatal.constants';
var companyemail=generateRandomEmail();

describe('signup Page:Input fields verification', () => {
  beforeEach(() => {
    cy.visit('/signup/')
  })
  it('Verify user can able to enter all the input fields', () => {
    
    signupPage.enter_name(manatalConstants.name);
    signupPage.enter_orgname(manatalConstants.orgname)
    signupPage.enter_email(companyemail)
    signupPage.enter_confirmEmail(companyemail)
    signupPage.enter_password(manatalConstants.password)
    signupPage.click_rb_agency().should('be.checked');
    signupPage.click_rb_company().click();
    signupPage.click_rb_agency().should('not.be.checked');
    signupPage.click_rb_company().should('be.checked');
    signupPage.click_signup();

  })

})

describe('Verify Signup Page Error Validations', () => {
 it('visit the page and click on signup buttion',()=>{
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
  }),
  it('verify the focus of name filed after enteing the text',()=>{
   signupPage.enter_name("shiva").should('have.focus')
  }),
  it('verify focus should be shifted to organization filed when invoked that with focus ',()=>{
    signupPage.focus_validation()
  })

  it('prints the current time ',()=>{
    console.log(generateRandomEmail());
    console.log(generateRandomEmail());
  })
  


})
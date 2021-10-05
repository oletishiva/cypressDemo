/// <reference types="Cypress" />
import { signuppageLocator, signupErrorMessages } from '../locators/signupPage.locator';
import signupPage from '../Pages/signup.pages'
import { generateRandomEmail } from '../utils/randomemailgenerator'
import manatalConstants from '../constants/manatal.constants';
import signupSuccessPage from '../Pages/signupSuccess.pages';
import loginpage from '../Pages/login.pages';


var companyemail = generateRandomEmail();


context('Postive Scenarios: Validation of sign up form', () => {
  beforeEach(() => {
    cy.visit('/signup/')
  })

  describe('signup Page:Successful signup', () => {
      it('Verify User can able to signup successfully6 with valid details', () => {

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
      //signupSuccessPage.VerifyiSSingupUrlCorrect(); // URL value is not returning cy.url();
      signupSuccessPage.VerifyClickHereLinkExits();

    })

  })

  describe('signup Page:Cannot signup again with already reistered email', () => {
      it('Verify User can\'t able to signup with already registered email', () => {

      signupPage.enter_name(manatalConstants.name);
      signupPage.enter_orgname(manatalConstants.orgname)
      signupPage.enter_email(manatalConstants.existingemail)
      signupPage.enter_confirmEmail(manatalConstants.existingemail)
      signupPage.enter_password(manatalConstants.password)
      signupPage.click_rb_agency().should('be.checked');
      signupPage.clickIAgree();
      signupPage.click_signup();
      cy.wait(2000);
      cy.contains(signupErrorMessages["email_alreadyExists_errormessage"]);
      
     })

    })

  

  describe('signup Page:Input fields verification', () => {
   
    it('Verify user can able to enter all the input fields--> all input fileds should be editable ', () => {

      signupPage.enter_name(manatalConstants.name);
      signupPage.enter_orgname(manatalConstants.orgname)
      signupPage.enter_email(companyemail)
      signupPage.enter_confirmEmail(companyemail)
      signupPage.enter_password(manatalConstants.password)
      
    })

  })


  describe('signup Page:Clear the text in input fields verification', () => {

    it('Verify user can able to clear the text ', () => {

      signupPage.enter_name(manatalConstants.name);
      signupPage.enter_orgname(manatalConstants.orgname)
      signupPage.enter_email(companyemail)
      signupPage.enter_confirmEmail(companyemail)
      signupPage.enter_password(manatalConstants.password)
      signupPage.txt_name().clear();
      signupPage.txt_orgname().clear();
      signupPage.txt_email().clear();
      signupPage.txt_confirmEmail().clear();
      signupPage.txt_password().clear();
      cy.document()
       .toMatchImageSnapshot({
          blackout: ['.intercom-lightweight-app-launcher intercom-launcher']
        })

        
       

      /* Here i have used several methods to verify the length of the text, but the entered 
      text is not available on DOM. Might be the text is stored in the redux store .. This need to 
      be understand before verifying with developer ,how and where data is storing */ 

      //signupPage.txt_name().should('have.lengthOf',5);
      //signupPage.txt_name().clear().should('have.length',0);
      //signupPage.txt_name().should('contain.text','shiva oleti')
      //signupPage.txt_orgname().clear().should('contain.text','')
  
    })
  
  })
 
 describe('signup Page:Radio Button clickbale', () => {
      it('Verify default agency is checked and company should be clickable ', () => {
            cy.get(signuppageLocator.rb_agency()).should('be.checked');
            signupPage.click_rb_company().should('be.checked');

      })
    })

    describe('signup Page:Password field masking verification', () => {
      it('Verify Password filed is masked or not ', () => {
        
        signupPage.enter_password(manatalConstants.password)
        signupPage.isPasswordMasked();

      })
    })

    describe('signup Page:focus validation', () => {

        it('verify the focus of name filed after enteing the text', () => {
        
          signupPage.enter_name(manatalConstants.name).should('have.focus');
        
      }),

        it('verify focus should be shifted to organization filed when invoked that with focus ', () => {
         
          signupPage.focus_validation()
        })
    })

    describe('signup Page:Login Link Verification', () => {

      it('Verify when click on Login link should be landed on Login Page', () => {
      
        cy.contains(signuppageLocator.lnk_logintxt()).should('have.attr','href','/login');        
         signupPage.click_lnk_login({timeout: 5000});
         cy.wait(5000);
         loginpage.isloginToManatalTextExists();
      
    })

     
  })

})

  // if we want run only one test use it.only

 



  describe('Verify Errors should disapper properly ', () => {
    it('Verify Erors should disapper when entering the text properly', () => {
      
      cy.visit('/signup/')
      signupPage.click_signup();
      // Verify name error should disapper when enting the proper text
      signupPage.err_name().should('exist');
      signupPage.enter_name(manatalConstants.name);
      signupPage.err_name().should('not.exist')


      // Verify organization name error should disapper when enting the proper organization name
      signupPage.err_orgname().should('exist');
      signupPage.enter_orgname(manatalConstants.orgname);
      signupPage.err_orgname().should('not.exist')

      // Verify company email error should disapper when enting the proper comapnay email
      signupPage.err_email().should('exist');
      signupPage.enter_email(companyemail)
      signupPage.err_email().should('not.exist')

      // Verify company confrim email error should disapper when enting the proper comapnay confirm email
      signupPage.err_confirmemail().should('exist');
      signupPage.enter_confirmEmail(companyemail)
      signupPage.err_confirmemail().should('not.exist')


      // Verify password field error should disapper when enting the password
      signupPage.err_password().should('exist');
      signupPage.enter_password(manatalConstants.password)
      signupPage.err_password().should('not.exist')


      // Verify Agree Terms and conditions  field error should disapper when checking the I agree link
      signupPage.err_termsandconditions().should('exist');
      signupPage.clickIAgree();
      signupPage.err_termsandconditions().should('not.exist')

      // Verify phone number error by entering wrong phone number
      // After clear the phone number entering correct number, the error message disapper
      signupPage.enter_phonenumber("9849586161")
      signupPage.err_phonenumberError().should('exist');
      signupPage.txt_phonenumber().clear();
      signupPage.enter_phonenumber("0616431716")

    })
      

  })

// The following individual verifications can be used when change only specific to particular field and we 
// can execute them using it.only
  

  describe('Verify Signup Page Error Validations', () => {
    it('visit the page and click on signup buttion', () => {
      
      cy.visit('/signup/')
      signupPage.click_signup();

    }),
      it('Verify Error message for name field', () => {
       
        signupPage.err_name().should('exist');

      }),
      it('Verify Error message for organization name field', () => {
        
       
        signupPage.err_orgname().should('exist');

      }),
      it('Verify Error message for email address field', () => {
       
        signupPage.err_email().should('exist');

      }),
      it('Verify Error message for confirm email address field', () => {
        
        signupPage.err_confirmemail().should('exist');

      }),
      it('Verify Error message for password field', () => {
        
        signupPage.err_password().should('exist');

      }),

      it('Verify Error message for I Agree field', () => {
       
        signupPage.err_termsandconditions().should('exist');

      })

  })

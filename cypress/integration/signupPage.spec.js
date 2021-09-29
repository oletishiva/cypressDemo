import signupPage from '../Pages/signup.pages'
import singupPage from '../Pages/signup.pages'
describe('Verify Elements on signup page', () => {
  beforeEach(() => {
    cy.visit('/signup/')
  })
  it('Verify user can enter all the input fields in the name field', () => {

    singupPage.enter_name("shiva");
    singupPage.enter_orgname("manatal")
    singupPage.enter_email("s@s.com")
    singupPage.enter_confirmEmail("s@s.com")
    signupPage.click_rb_agency().should('be.checked');
    signupPage.click_rb_company().click();
    signupPage.click_rb_agency().should('not.be.checked');
    signupPage.click_rb_company().should('be.checked');
    singupPage.click_signup();

  })

 


})
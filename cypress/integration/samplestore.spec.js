import SampleStoreLocator from '../../locators/samplestore.locator'
import SampleStorePage from '../../Pages/samplestore.pages'
describe('Sample Store use Case', () => {
  beforeEach(() => {
    cy.visit('/en/salut-partners/')
  })
  it('Verify Default option is selectd as English', () => {

    SampleStorePage.selected_languageLocator().invoke('text').should('equal', 'EN')

  })

  it('Change Language to FR and Verify the selected language changed or not', () => {
    SampleStorePage.select_language('FR')
  })

  it('Verify Default Currency selected as USD', () => {
        SampleStorePage.selected_CurrencyLocator().invoke('text').should('equal', 'USD')

  })

  it('Verify Currency Changed to EUR  is applied', () => {
    SampleStorePage.select_currency('EUR')
    SampleStorePage.selected_CurrencyLocator().invoke('text').should('equal', 'EUR')

  })

  it('Change Language to FR and Verify the selected language changed or not', () => {
    SampleStorePage.select_currency('GBP')
    SampleStorePage.selected_CurrencyLocator().should('equal', 'USD') // Here i am making intentionally assertion failed
  })

  it('Verify Change back to default currency USD', () => {
    SampleStorePage.select_currency('USD')
    SampleStorePage.selected_CurrencyLocator().invoke('text').should('equal', 'USD')

  })


})
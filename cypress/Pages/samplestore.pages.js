import SampleStoreLocator from '../locators/samplestore.locator';

var SampleStorePage = {

        
    select_language: function(language)
    {
       
        return cy.get('[data-cy=shop-language]').select(language)

    },

    select_currency: function(currency)
    {
       
        return cy.get('[data-cy=select-currency]').select(currency)
        
    },

    selected_languageLocator:function()
    {
       return cy.get('[data-cy=shop-language] option:selected')
    },

    selected_CurrencyLocator:function(){
        return cy.get('[data-cy=select-currency] option:selected')
    }
    

};

export default SampleStorePage;
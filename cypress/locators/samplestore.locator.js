var SampleStoreLocator = {

    language_locator: function() {
           return '[data-cy=shop-language]'
    },

    currenty_locator: function() {
           return '[data-cy=select-currency]'
    },
    selected_languageLocator:function(){
        return '[data-cy=shop-language] option:selected'
    },
    selected_CurrencyLocator:function(){
        return '[data-cy=select-currency] option:selected'
    }
    
};

export default SampleStoreLocator;
import DesignEditorLocator from '../locators/designeditor.locator';

var DesignEditorPage = {

    click_designNow: function() {
        cy.get(DesignEditorLocator.addtoCart(),{ timeout: 10000 })
        .should('be.visible')
        .should('have.text', 'Design Now')
        .click();
    },
    click_stepcolor: function() {
        cy.get(DesignEditorLocator.studiomenu_stepcolor(),{ timeout: 20000 })
        .should('be.visible')
        .click();
    },

    click_stepimage:function(){
        cy.get('[data-cy=studio-menu-step-IMAGE]',{ timeout: 20000 })
        .should('be.visible')
        .click();
    },
    
    select_colorZone: function(colorzone)
    {
        
        cy.get('select[data-cy="studio-color-fill-selector"]',{ timeout: 10000 }).select(colorzone);
        
        
    },
    click_withColorValue: function(color)
    {
        cy.get(DesignEditorLocator.stepcolor_value(color),{ timeout: 20000 })
        .should('be.visible')
        .click();
    },
    click_doneButton:function()
    {
        return  cy.get('[data-cy=studio-menu-content]', { timeout: 5000 }).contains('Done').click({ force: true });
    }

};

export default DesignEditorPage;
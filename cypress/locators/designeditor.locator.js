var DesignEditorLocator = {

    addtoCart: function() {
           return '[data-cy=add-to-cart]'
    },

    studiomenu_stepcolor: function() {
           return '[data-cy=studio-menu-step-COLOR]'
    },
    stepcolor_value:function(color){
        return '[data-cy='+color+']'
    },

    focus_locator: function() {
           return '.action-focus'
    },
    colorzoneLocator:function()
    {
        return 'select[data-cy="studio-color-fill-selector"]'
    }
};

export default DesignEditorLocator;
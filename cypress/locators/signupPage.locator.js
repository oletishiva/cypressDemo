var signuppageLocator = {

    name: function () {
        return '[data-vv-name=name]'
    },

    org_name: function () {
        return '[data-vv-name=organization_name]'
    },
    email: function () {
        return '[data-vv-name=company_email_address]'
    },
    confirm_email: function () {
        return '[data-vv-name=confirm_company_email_address]'
    },
    btn_signup:function(){
        return '.signup-material-button-contained'
        
    },
    rb_agency:function() {
        return 'input#agency'
    },
    rb_company:function() {
        return 'input#company'
    }

};

export default signuppageLocator;
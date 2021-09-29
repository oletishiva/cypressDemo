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
    email_password:function(){
        return '[data-vv-name=password]'
    },
    btn_signup:function(){
        return '.signup-material-button-contained'
        
    },
    rb_agency:function() {
        return 'input#agency'
    },
    rb_company:function() {
        return 'input#company'
    },
    focus_locator: function() {
        return '.focused'
 }

};

var signupErrorMessages={
        'name_errormessage':'The name field is required',
        'orgname_errormessage':'The organization name field is required',
        'email_errormessage':'The company email address field is required',
        'confirmemail_errormessage':'The confirm company email address field is required',
        'password_errormessage':'The password field is required',
        'termsandconditions_errormessage':'The agree field is required'
};

export default {signuppageLocator,signupErrorMessages};

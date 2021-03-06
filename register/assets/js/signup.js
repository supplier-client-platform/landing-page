'use strict';

/**
 * SignUp function which contains the front-end signUp logic.
 * @returns {boolean}
 */
function signUp() {

    $.ajax({
        type: 'post',
        url: sign_up_endpoint,
        data : {
            fullname: $('#fullname').val(),
            nic: $('#nic').val(),
            personal_email: $('#personal_email').val(),
            password: $('#password').val(),
            personal_contact: $('#personal_contact').val(),
            supplier_category: $('#supplier_category').val(),
            company_name: $('#company_name').val(),
            company_email: $('#company_email').val(),
            company_contact: $('#company_contact').val(),
            company_website: $('#company_website').val(),
            base_city: $('#base_city').val(),
            business_address: {
                address: $('#business_address').val(),
                longitude: $('#longitude').val(),
                latitude: $('#latitude').val()
            },
            payment_plan: "default",
            terms_agree: $('#terms_agree').val()
        },

        success:function(data){
            console.log(data)
        },

        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError);
        }
    });
    $('.nav-tabs a[href="#validation-step5"]').tab('show');

     return false;
}

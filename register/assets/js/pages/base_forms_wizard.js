/*
 *  Document   : base_forms_wizard.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Form Wizard Page
 */

var BaseFormWizard = function() {

    // Init wizards with validation, for more examples you can check out http://vadimg.com/twitter-bootstrap-wizard-example/
    var initWizardValidation = function(){
        // Get forms
        var $form1 = jQuery('.js-form1');
        var $form2 = jQuery('.js-form2');

        // Prevent forms from submitting on enter key press
        $form1.add($form2).on('keyup keypress', function (e) {
            var code = e.keyCode || e.which;

            if (code === 13) {
                e.preventDefault();
                return false;
            }
        });

        // Init form validation on the other wizard form
        var $validator2 = $form2.validate({
            errorClass: 'help-block text-right animated fadeInDown',
            errorElement: 'div',
            errorPlacement: function(error, e) {
                jQuery(e).parents('.form-group .form-material').append(error);
            },
            highlight: function(e) {
                jQuery(e).closest('.form-group').removeClass('has-error').addClass('has-error');
                jQuery(e).closest('.help-block').remove();
            },
            success: function(e) {
                jQuery(e).closest('.form-group').removeClass('has-error');
                jQuery(e).closest('.help-block').remove();
            },
            rules: {
                'fullname': {
                    required: true,
                    lettersonly: true,
                    minlength: 2
                },
                'nic': {
                    required: true,
                    nic: true
                },
                'personal_email': {
                    required: true,
                    email: true
                },
                'personal_contact': {
                    required: true,
                    contact: true,
                    minlength: 10
                },
                'supplier_category': {
                    required: true,
                    valueNotEquals: "default"
                },
                'company_name': {
                    required: true
                },
                'company_email': {
                    required: true,
                    email: true
                },
                'company_contact': {
                    required: true,
                    contact: true,
                    minlength: 10
                },
                'company_website': {
                    url: true
                },
                'base_city': {
                    required: true,
                    valueNotEquals: "default"
                },
                'business_address': {
                    minlength: 10,
                    required: true
                },
                'password': {
                    required: true,
                    minlength: 6
                },
                'confirm_password': {
                    required: true,
                    equalTo: '#password'
                },
                'terms_agree': {
                    required: true
                }

            },
            messages: {
                'fullname': {
                    required: 'Please enter your full name',
                    lettersonly: 'Provide a valid full name',
                    minlength: 'Your full name must consist of at least 2 characters'

                },
                'nic': {
                    required: 'Please enter nic number',
                    nic: 'Provide a valid nic number'
                },
                'email': 'Please enter a valid email address',
                'personal_contact': {
                    required: 'Please enter a contact number',
                    minlength: 'Provide a valid contact number',
                    contact: 'Provide a valid contact number'
                },
                'supplier_category': {
                    required: "Please select a category",
                    valueNotEquals: "Please select a category"
                },
                'company_name': {
                    required: 'Please a enter a company name'
                },
                'company_email': 'Please enter a valid email address',
                'company_contact': {
                    required: 'Please enter a contact number',
                    minlength: 'Provide a valid contact number',
                    contact: 'Provide a valid contact number'
                },
                'company_website': {
                    url: 'Please enter valid url'
                },
                'base_city': {
                    required: 'Please select a base city',
                    valueNotEquals: "Please select a base city"
                },
                'business_address': {
                    minlength: 'Please enter a valid business address',
                    required: 'Please enter a business address'
                },
                'password': {
                    minlength: 'Your password should have at least 6 characters.'
                },
                'confirm_password': {
                    equalTo: 'This should be equal to above provided.'
                },
                'terms_agree': {
                    required: 'Agree the terms and conditions'
                }

            }
        });

        // Init classic wizard with validation
        jQuery('.js-wizard-classic-validation').bootstrapWizard({
            'tabClass': '',
            'previousSelector': '.wizard-prev',
            'nextSelector': '.wizard-next',
            'onTabShow': function($tab, $nav, $index) {


                var $total      = $nav.find('li').length;
                var $current    = $index + 1;

                // Get vital wizard elements
                var $wizard     = $nav.parents('.block');
                var $btnNext    = $wizard.find('.wizard-next');
                var $btnFinish  = $wizard.find('.wizard-finish');

                // If it's the last tab then hide the last button and show the finish instead
                if($current >= $total) {
                    $btnNext.hide();
                    $btnFinish.show();
                } else {
                    $btnNext.show();
                    $btnFinish.hide();
                }
            },
            'onNext': function($tab, $navigation, $index) {
                var $valid = $form1.valid();

                if(!$valid) {
                    $validator1.focusInvalid();

                    return false;
                }
            },
            onTabClick: function($tab, $navigation, $index) {
                return false;
            }
        });

        // Init wizard with validation
        jQuery('.js-wizard-validation').bootstrapWizard({
            'tabClass': '',
            'previousSelector': '.wizard-prev',
            'nextSelector': '.wizard-next',
            'onTabShow': function($tab, $nav, $index) {
                var $total      = $nav.find('li').length;
                var $current    = $index + 1;
                var $percent    = ($current/$total) * 100;

                // Get vital wizard elements
                var $wizard     = $nav.parents('.block');

                var $progress   = $wizard.find('.wizard-progress > .progress-bar');
                var $btnPrev    = $wizard.find('.wizard-prev');
                var $btnNext    = $wizard.find('.wizard-next');
                var $btnFinish  = $wizard.find('.wizard-finish');
                var $btnLogin   = $wizard.find('.wizard-login');

                // Update progress bar if there is one
                if ($progress) {
                    $progress.css({ width: $percent + '%' });
                }


                // If it's the last tab then hide the last button and show the finish instead
                if($current == $total-1) {
                    $btnLogin.hide();
                    $btnNext.hide();
                    $btnFinish.show();
                } else if ($current >= $total) {
                    $btnPrev.hide();
                    $btnFinish.hide();
                    $btnNext.hide();
                    $btnLogin.show();
                } else {
                    $btnLogin.hide();
                    $btnNext.show();
                    $btnFinish.hide();
                }
            },
            'onNext': function($tab, $navigation, $index) {
                var $valid = $form2.valid();

                if(!$valid) {
                    $validator2.focusInvalid();

                    return false;
                }
            },
            onTabClick: function($tab, $navigation, $index) {
                return false;
            }
        });
    };

    return {
        init: function () {
            initWizardValidation();
        }
    };
}();

// Send request to server to populate the city list drop down
$.ajax({
    type: 'get',
    url: city_list_endpoint,

    success:function(data){
        $('#base_city').removeAttr('disabled');
        $.each(data, function (key, value) {
           $("#base_city").append($("<option></option>").val(value.id).html(value.city));
        });

    },
    error: function(xhr, ajaxOptions, thrownError) {
        console.log(thrownError);
    }
});


// Send request to server to populate the category list drop down
$.ajax({
    type: 'get',
    url: category_list_endpoint,

    success:function(data){
       $('#supplier_category').removeAttr('disabled');
        $.each(data, function (key, value) {
            $("#supplier_category").append($("<option></option>").val(value.id).html(value.name));
        });

    },
    error: function(xhr, ajaxOptions, thrownError) {
        console.log(thrownError);
    }
});

// Enable/Disable submit button when terms and conditions agreed.
$('#terms_agree').click(function() {
    if ($(this).is(':checked')) {
        $('#submit').removeAttr('disabled');
    } else {
        $('#submit').attr('disabled', 'disabled');
    }
});

// Custom method to validate letters only.
jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-zA-Z\s]+$/i.test(value);
}, "Letters only please");

// Custom method to validate nic number.
jQuery.validator.addMethod("nic", function(value, element) {
    return this.optional(element) || /^[0-9]{9}[vVxX]$/.test(value);
}, "Valid NIC Number");

// Custom method to validate contact number.
jQuery.validator.addMethod("contact", function(value, element) {
    return this.optional(element) || /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value);
}, "Valid Contact Number");

// Custom method to validate
jQuery.validator.addMethod("valueNotEquals", function(value, element, arg){
    return arg != value;
}, "Value must not equal arg.");

// Initialize when page loads
jQuery(function(){ BaseFormWizard.init(); });

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
                'firstname': {
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
                'base_city': {
                    required: true,
                    valueNotEquals: "default"
                },
                'business_address': {
                    required: true
                },
                'terms_agree': {
                    required: true
                }

            },
            messages: {
                'firstname': {
                    required: 'Please enter a firstname',
                    lettersonly: 'Provide a valid firstname',
                    minlength: 'Your firstname must consist of at least 2 characters'

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
                'base_city': {
                    required: 'Please select a base city',
                    valueNotEquals: "Please select a base city"
                },
                'business_address': {
                    required: 'Please enter a business address'
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

                // Update progress bar if there is one
                if ($progress) {
                    $progress.css({ width: $percent + '%' });
                }


                // If it's the last tab then hide the last button and show the finish instead
                if($current >= $total) {
                    $btnNext.hide();
                    $btnFinish.show();
                } else {
                    $btnNext.show();
                    $btnFinish.hide();
                }
            },
            'onTabShow': function($tab, $navigation, $index) {
                var $total      = $navigation.find('li').length;
                var $current    = $index + 1;
                var $percent    = ($current/$total) * 100;

                // Get vital wizard elements
                var $wizard     = $navigation.parents('.block');
                var $progress   = $wizard.find('.wizard-progress > .progress-bar');
                var $btnPrev    = $wizard.find('.wizard-prev');
                var $btnNext    = $wizard.find('.wizard-next');
                var $btnFinish  = $wizard.find('.wizard-finish');

                // Update progress bar if there is one
                if ($progress) {
                    $progress.css({ width: $percent + '%' });
                }

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
                var $valid = $form2.valid();

                if(!$valid) {
                    $validator2.focusInvalid();

                    return false;
                }
            },
           /* onTabClick: function($tab, $navigation, $index) {
                return false;
            } */
        });
    };

    return {
        init: function () {
            // Init simple wizard
            // initWizardSimple();

            // Init wizards with validation
            initWizardValidation();
        }
    };
}();

// Custom method to validate letters only.
jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z]+$/i.test(value);
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
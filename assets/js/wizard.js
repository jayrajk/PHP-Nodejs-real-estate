searchVisible = 0;
transparent = true;

$(document).ready(function () {
    /*  Activate the tooltips      */
    $('[rel="tooltip"]').tooltip();

    $('.wizard-card').bootstrapWizard({
        'tabClass': 'nav nav-pills',
        'nextSelector': '.btn-next',
        'previousSelector': '.btn-previous',
        onInit: function (tab, navigation, index) {

            //check number of tabs and fill the entire row
            var $total = navigation.find('li').length;
            $width = 100 / $total;

            $display_width = $(document).width();

            if ($display_width < 600 && $total > 3) {
                $width = 50;
            }

            navigation.find('li').css('width', $width + '%');

        },
        onNext: function (tab, navigation, index) {
            if (index == 1) {
                var user_type = $('#user_type :checked').val();
                var property_ty = null;
                var subcategory = $('#subcategory').val();
                sessionStorage.setItem('user_type',user_type);
                if($('#commercial :checked').val()!=null){
                    property_ty = $('#commercial :checked').val();
                }else if($('#residential :checked').val()!=null){
                    property_ty = $('#residential :checked').val();
                }
                sessionStorage.setItem('property_ty',property_ty);
                sessionStorage.setItem('subcategory',subcategory);
                return validateFirstStep();
            } else if (index == 2) {
                return validateSecondStep();
            } else if (index == 3) {
                return validateThirdStep();
            } //etc. 

        },
        onTabClick: function (tab, navigation, index) {
            // Disable the posibility to click on tabs
            return false;
        },
        onTabShow: function (tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index + 1;

            var wizard = navigation.closest('.wizard-card');

            // If it's the last tab then hide the last button and show the finish instead
            if ($current >= $total) {
                $(wizard).find('.btn-next').hide();
                $(wizard).find('.btn-finish').show();
            } else {
                $(wizard).find('.btn-next').show();
                $(wizard).find('.btn-finish').hide();
            }
        }
    });

    // Prepare the preview for profile picture
    $("#wizard-picture").change(function () {
        readURL(this);
    });

    /*$('[data-toggle="wizard-radio"]').click(function () {
        wizard = $(this).closest('.wizard-card');
        wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
        $(this).addClass('active');
        $(wizard).find('[type="radio"]').removeAttr('checked');
        $(this).find('[type="radio"]').attr('checked', 'true');
    });*/

    $('[data-toggle="wizard-checkbox"]').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).find('[type="checkbox"]').removeAttr('checked');
        } else {
            $(this).addClass('active');
            $(this).find('[type="checkbox"]').attr('checked', 'true');
        }
    });

    $height = $(document).height();
    $('.set-full-height').css('height', $height);


});

function validateFirstStep() {

    $(".wizard-card form").validate({
        rules: {
            user_type: "required",
            propt:{
                selectcheck : true
            },
            property_ty: "required",
            subcategory: {
                selectcheck : true
            },
            city:{
                selectcheck : true
            },
            project_name:"required",
            locality:"required",
            address:"required",
        },
        messages: {
            user_type: "Please select user",
            propt: "Please select property for",
            property_ty: "Please select property type",
            subcategory:"Please select sub category type",
            city: "Please select city",
            project_name:"Please enter project name",
            locality:"Please enter locality",
            address:"Please enter address"
        }
    });

    if (!$(".wizard-card form").valid()) {
        //form is invalid
        return false;
    }

    return true;
}

function validateSecondStep() {

    //code here for second step
    $(".wizard-card form").validate({
        rules: {
            bedrooms: "required"
        },
        messages: {
            bedrooms: "Please select user"

        }
    });

    if (!$(".wizard-card form").valid()) {
        //form is invalid
        return false;
    }

    return true;

}

function validateThirdStep() {
    //code here for third step


}

//Function to show image before upload

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}














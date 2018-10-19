<!DOCTYPE html>
<!--[if lt IE 7]>
<html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>
<html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>
<html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>GARO ESTATE | Submit property Page</title>
    <meta name="description" content="GARO is a real-estate template">
    <meta name="author" content="Kimarotec">
    <meta name="keyword" content="html5, css, bootstrap, property, real-estate theme , bootstrap template">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,700,800' rel='stylesheet' type='text/css'>

    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="icon" href="favicon.ico" type="image/x-icon">

    <link rel="stylesheet" href="assets/css/normalize.css">
    <link rel="stylesheet" href="assets/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/css/fontello.css">
    <link href="assets/fonts/icon-7-stroke/css/pe-icon-7-stroke.css" rel="stylesheet">
    <link href="assets/fonts/icon-7-stroke/css/helper.css" rel="stylesheet">
    <link href="css/animate.css" rel="stylesheet" media="screen">
    <link rel="stylesheet" href="assets/css/bootstrap-select.min.css">
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/icheck.min_all.css">
    <link rel="stylesheet" href="assets/css/price-range.css">
    <link rel="stylesheet" href="assets/css/owl.carousel.css">
    <link rel="stylesheet" href="assets/css/owl.theme.css">
    <link rel="stylesheet" href="assets/css/owl.transitions.css">
    <link rel="stylesheet" href="assets/css/wizard.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
</head>
<body>

<?php include "header.php" ?>

<div class="page-head">
    <div class="container">
        <div class="row">
            <div class="page-head-content">
                <h1 class="page-title">Post Property</h1>
            </div>
        </div>
    </div>
</div>
<!-- End page header -->

<!-- property area -->
<div class="content-area submit-property" style="background-color: #FCFCFC;">&nbsp;
    <div class="container">
        <div class="clearfix">
            <div class="wizard-container">

                <div class="wizard-card ct-wizard-orange" id="wizardProperty">
                    <form action="" method="POST">
                        <div class="wizard-header">
                            <h3>
                                <b>Submit</b> YOUR PROPERTY <br>
                            </h3>
                        </div>

                        <ul>
                            <li><a href="#step1" data-toggle="tab">Step 1 </a></li>
                            <li><a href="#step2" data-toggle="tab">Step 2 </a></li>
                            <li><a href="#step3" data-toggle="tab">Step 3 </a></li>
                            <li><a href="#step4" data-toggle="tab">Finished </a></li>
                        </ul>

                        <div class="tab-content">

                            <div class="tab-pane" id="step1">
                                <div class="row p-b-15 ">
                                    <h4 class="info-text"> Let's start with the basic information</h4>
                                    <div class="col-sm-12">
                                        <div class="col-sm-4">
                                            <label for="user_type">You are:</label>
                                            <input type="radio" name="user_type" id="user_type" value="owner">
                                            <small>Owner</small>
                                            <input type="radio" name="user_type" id="user_type" value="dealer">
                                            <small>Dealer</small>
                                            <input type="radio" name="user_type" id="user_type" value="builder">
                                            <small>Builder</small>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="col-sm-3">
                                            <label for="propt">List Property for:</label>
                                            <select id="propt" name="propt" class="form-control">
                                                <option class="bs-title-option" value=0>Select</option>
                                                <option id="sell" value="sell">Sell</option>
                                                <option value="rent">Rent</option>
                                                <option value="paying guest">Paying Guest</option>
                                            </select>
                                        </div>
                                        <div class="col-sm-3" id="div_sell">
                                            <label for="sell_type">Sell Type:</label>
                                            <select id="sell_type" class="form-control">
                                                <option class="bs-title-option" value="0">Select</option>
                                                <option>Resale</option>
                                                <option>New Booking</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="col-sm-3">
                                            <label for="property_ty">Property Type:</label><br>
                                            <input type="radio" name="property_ty" id="property_ty" value="Residential">
                                            <small>Residential</small>
                                            <input type="radio" name="property_ty" id="property_ty" value="Commercial">
                                            <small>Commercial</small>
                                        </div>
                                        <div class="col-sm-3">
                                            <label for="category">Select Type:</label>
                                            <select id="category" class="form-control">
                                                <option class="bs-title-option"></option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <label for="city">City:</label>
                                                <select id="city" name="city" class="form-control">
                                                    <option class="bs-title-option" value=0>Select your city</option>
                                                    <option>Mumbai</option>
                                                    <option>Surat</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <label for="project_name">Project Name:</label>
                                                <input type="text" id="project_name" class="form-control"
                                                       name="project_name">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <label for="locality">Locality:</label>
                                                <input type="text" class="form-control" name="locality" id="locality">
                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <label for="address">Address:</label>
                                                <textarea class="form-control" name="address" id="address"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--  End step 1 -->

                            <div class="tab-pane" id="step2">
                                <h4 class="info-text"> Give us some information about the configuration of the
                                    property </h4>
                                <div class="row p-b-15">
                                    <div class="col-sm-12">
                                        <div class="col-sm-2">
                                            <div class="form-group">
                                                <label for="built_up">Built Up Area:</label>
                                                <input type="number" id="built_up" name="built_up" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <label for="area_unit">Area Unit :</label>
                                                <select id="area_unit" class="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select">
                                                    <option value="" label="Select" selected="selected">Select</option>
                                                    <option value="1" label="Sq.Ft.">Sq.Ft.</option>
                                                    <option value="2" label="Sq. Yards">Sq. Yards</option>
                                                    <option value="3" label="Sq. Meter">Sq. Meter</option>
                                                    <option value="12" label="Acres">Acres</option>
                                                    <option value="16" label="Marla">Marla</option>
                                                    <option value="19" label="Cents">Cents</option>
                                                    <option value="13" label="Bigha">Bigha</option>
                                                    <option value="14" label="Kottah">Kottah</option>
                                                    <option value="17" label="Kanal">Kanal</option>
                                                    <option value="4" label="Grounds">Grounds</option>
                                                    <option value="10" label="Ares">Ares</option>
                                                    <option value="11" label="Biswa">Biswa</option>
                                                    <option value="9" label="Guntha">Guntha</option>
                                                    <option value="5" label="Aankadam">Aankadam</option>
                                                    <option value="15" label="Hectares">Hectares</option>
                                                    <option value="6" label="Rood">Rood</option>
                                                    <option value="7" label="Chataks">Chataks</option>
                                                    <option value="8" label="Perch">Perch</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="col-sm-2">
                                            <div class="form-group">
                                                <label for="bedrooms">Bedrooms:</label>
                                                <input type="text" class="form-control" id="bedrooms" name="bedrooms" maxlength="1">
                                            </div>
                                        </div>
                                        <div class="col-sm-2">
                                            <div class="form-group">
                                                <label for="bathrooms">Bathrooms:</label>
                                                <input type="number" class="form-control" id="bathrooms" name="bathrooms" maxlength="1">
                                            </div>
                                        </div>
                                        <div class="col-sm-2">
                                            <div class="form-group">
                                                <label for="balconies">Balconies:</label>
                                                <input type="number" class="form-control" id="balconies" name="balconies" maxlength="1">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="col-sm-8">
                                            <div class="form-group">
                                                <label>Add other rooms:</label>
                                                <input type="checkbox" class="form-control" id="pooja_room" name="pooja_room" value="Pooja Room">Pooja Room
                                                <input type="checkbox" class="form-control" id="study_room" name="study_room" value="Study Room">Study Room
                                                <input type="checkbox" class="form-control" id="servant_room" name="servant_room" value="Servant Room">Servant Room
                                                <input type="checkbox" class="form-control" id="store_room" name="store_room" value="Store Room">Store Room
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="col-sm-6">
                                            <label for="parking">Reserved Parking:</label>
                                            <input type="radio" id="parking" name="parking" value="None">None
                                            <input type="radio" id="parking" name="parking" value="Covered">Covered
                                            <input type="radio" id="parking" name="parking" value="Open">Open
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="col-sm-2">
                                            <div class="form-group">
                                                <label for="availability">Availability:</label>
                                                <select id="availability" name="availability" class="selectpicker" title="Select">
                                                    <option value="Under Construction">Under Construction</option>
                                                    <option value="Ready to Move">Ready to Move</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-2" id="availability_type">
                                            <div class="form-group">
                                                <label for="type"></label>
                                                <select id="type" name="type" class="selectpicker" title="Select">

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="col-sm-2">
                                            <div class="form-group">
                                                <label for="ownership">Ownership:</label>
                                                <select id="ownership" name="ownership" class="selectpicker" title="Select">
                                                    <option value="freeshold">Freeshold</option>
                                                    <option value="leasehold">Leasehold</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="col-sm-2">
                                            <div class="form-group">
                                                <label for="price">Expected Price:</label>
                                                <input type="number" class="form-control" name="price" id="price">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="col-sm-2">
                                            <div class="form-group">
                                                <label for="brokerage">Brokerage:</label>
                                                <input type="number" class="form-control" name="brokerage" id="brokerage">
                                            </div>
                                        </div>
                                        <div class="col-sm-2">
                                            <div class="form-group">
                                                <label for="brokerage_type">Brokerage Type:</label>
                                                <select id="brokerage_type" name="brokerage_type" class="selectpicker" title="Select">
                                                    <option value="fixed amount">Fixed Amount</option>
                                                    <option value="percentage of price">Percentage of Price</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <!-- End step 2 -->

                            <div class="tab-pane" id="step3">
                                <h4 class="info-text">Add some photos and other features. </h4>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="property-images">Choose Images :</label>
                                            <input class="form-control" type="file" id="property-images">
                                            <p class="help-block">Select multiple images for your property .</p>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Amenities:</label>
                                            <input type="checkbox" id="lift" name="lift">Lift(s)
                                            <input type="checkbox" id="park" name="park">Park
                                            <input type="checkbox" id="maintenance" name="maintenance">Maintenance Staff
                                            <input type="checkbox" id="visitor" name="visitor">Visitor Parking
                                            <input type="checkbox" id="water" name="water">Water Storage
                                            <input type="checkbox" id="vaastu" name="vaastu">Feng Shui / Vaastu Compliant
                                            <input type="checkbox" id="intercom">Intercom Facility
                                            <input type="checkbox" id="security" name="security">Security/fire Alaram
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="col-sm-2">
                                            <div class="form-group">
                                                <label for="power">Power Backup:</label>
                                                <select class="form-control" id="power" name="power" title="Select">
                                                    <option value="none">None</option>
                                                    <option value="partial">Partial</option>
                                                    <option value="full">Full</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>Water Source:</label>
                                                <input type="checkbox" id="corporation" name="corporation">Muncipal Corporation
                                                <input type="checkbox" id="borewell" name="borewell">Borewell/Tank
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="col-sm-8">
                                            <div class="form-group">
                                                <label>Overlooking:</label>
                                                <input type="checkbox" id="garden" name="garden" value="garden">Park/Garden
                                                <input type="checkbox" id="main" name="main" value="main road">Main Road
                                                <input type="checkbox" id="club" name="club" value="club">Club
                                                <input type="checkbox" id="pool" name="pool" value="pool">Pool
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="col-sm-2">
                                            <div class="form-group">
                                                <label for="face">Facing</label>
                                                <select class="form-control" id="face" name="face" title="Select">
                                                    <option value="1" label="East">East</option>
                                                    <option value="2" label="North-East">North-East</option>
                                                    <option value="3" label="North">North</option>
                                                    <option value="4" label="West">West</option>
                                                    <option value="5" label="South">South</option>
                                                    <option value="6" label="South-East">South-East</option>
                                                    <option value="7" label="North-West">North-West</option>
                                                    <option value="8" label="South-West">South-West</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-2">
                                            <div class="form-group">
                                                <label for="face_width">Width of Facing Road:</label>
                                                <input type="number" class="form-control" id="face_width" name="face_width">
                                            </div>
                                        </div>
                                        <div class="col-sm-2">
                                            <div class="form-group">
                                                <label>  </label>
                                                <select class="form-control" id="width_type" name="width_type" title="Select">
                                                    <option value="feet">Feet</option>
                                                    <option value="meter">Meter</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-2">
                                            <div class="form-group">
                                                <label for="flooring_type">Type of flooring:</label>
                                                <select class="form-control" id="flooring_type" name="flooring_type" title="Select">
                                                    <option value="" label="Select" selected="selected">Select</option>
                                                    <option value="Vitrified">Vitrified</option>
                                                    <option value="Marble">Marble</option>
                                                    <option value="Ceramic">Ceramic</option>
                                                    <option value="Mosaic">Mosaic</option>
                                                    <option value="Wood">Wood</option>
                                                    <option value="Granite">Granite</option>
                                                    <option value="Spartex">Spartex</option>
                                                    <option value="Cement">Cement</option>
                                                    <option value="Stone">Stone</option>
                                                    <option value="Vinyl">Vinyl</option>
                                                    <option value="IPSFinish">IPSFinish</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-2">
                                            <div class="form-group">
                                                <label for="furnishing">Furnishing:</label>
                                                <select class="form-control" id="furnishing" name="furnishing" title="Select">
                                                    <option value="" label="Select" selected="selected">Select</option>
                                                    <option>Furnished</option>
                                                    <option>Semifurnished</option>
                                                    <option>Unfurnished</option>
                                                </select>
                                            </div>
                                        </div>
                                         <div class="col-sm-12">
                                             <div class="col-sm-12">
                                                 <div class="form-group">
                                                     <label for="description">Property Description :</label>
                                                     <textarea name="discription" id="description" class="form-control" rows="5"></textarea>
                                                 </div>
                                             </div>
                                        </div>
                                        </div>
                                </div>
                            </div>
                            <!--  End step 3 -->


                            <div class="tab-pane" id="step4">
                                <h4 class="info-text"> Finished and submit </h4>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="">
                                            <p>
                                                <label><strong>Terms and Conditions</strong></label>
                                                By accessing or using GARO ESTATE services, such as
                                                posting your property advertisement with your personal
                                                information on our website you agree to the
                                                collection, use and disclosure of your personal information
                                                in the legal proper manner
                                            </p>

                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox"/> <strong>Accept termes and
                                                        conditions.</strong>
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--  End step 4 -->

                        </div>

                            <div class="wizard-footer">
                                <div class="pull-right">
                                    <input type='button' class='btn btn-next btn-primary' name='next' id="next" value='Next'/>
                                    <input type='button' class='btn btn-finish btn-primary ' name='finish'
                                           value='Finish'/>
                                </div>

                                <div class="pull-left">
                                    <input type='button' class='btn btn-previous btn-default' name='previous'
                                           value='Previous'/>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                    </form>
                </div>
                <!-- End submit form -->
            </div>
        </div>
    </div>
</div>

<!-- Footer area-->
<?php include "footer.php"; ?>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="assets/js/jquery.min.js"></script>
<!--<script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>-->
<!--<script src="assets/js/vendor/modernizr-2.6.2.min.js"></script>-->
<!--<script src="assets/js//jquery-1.10.2.min.js"></script>-->
<script src="bootstrap/js/bootstrap.min.js"></script>
<script src="assets/js/bootstrap-select.min.js"></script>
<script src="assets/js/bootstrap-hover-dropdown.js"></script>
<script src="assets/js/easypiechart.min.js"></script>
<script src="assets/js/jquery.easypiechart.min.js"></script>
<script src="assets/js/owl.carousel.min.js"></script>
<script src="assets/js/wow.js"></script>
<script src="assets/js/icheck.min.js"></script>

<script src="assets/js/price-range.js"></script>
<script src="assets/js/jquery.bootstrap.wizard.js" type="text/javascript"></script>
<script src="assets/js/jquery.validate.min.js"></script>
<script src="assets/js/wizard.js"></script>

<script src="assets/js/main.js"></script>

<script type="text/javascript">
    $(document).ready(function () {
        $('#div_sell').hide();
        $('select[id="propt"]').change(function () {
            if ($(this).val() == "sell") {
                $('#div_sell').show();
            } else {
                $('#div_sell').hide();
            }
        });

        jQuery.validator.addMethod('selectcheck', function (value) {
            return (value != '0');
        });
    });
    $(document).ready(function () {
        var pro = $('input:radio[name=property_ty]:checked').val();
        console.log(pro);
        $('input[type=radio]').change(function () {
            alert('hello');
            if ($(this).val() == "Residential") {
                var body = {
                    cat_id: $(this).val()
                };
                $.ajax({
                    url: 'http://127.0.0.1:4000/sell-rent',
                    type: 'POST',
                    data: JSON.stringify(body),
                    dataType: 'JSON',
                    contentType: 'application/json',
                    crossDomain: true,
                    success: function (result) {
                        if (result.error == true) {
                            alert(result.message);
                        } else {
                            alert(result.data);
                        }
                    }
                })
            } else if ($(this).val() == "Commercial") {

            }
        })
    })
</script>

</body>
</html>
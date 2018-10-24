<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> 
<html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>JK ESTATE | property User profile Page </title>
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

        <?php include "header.php"; ?>
        <!-- End of nav bar -->

        <div class="page-head"> 
            <div class="container">
                <div class="row">
                    <div class="page-head-content">
                        <h1 class="page-title">Hello : <span class="orange strong">Kimaro kyoto</span></h1>               
                    </div>
                </div>
            </div>
        </div>
        <!-- End page header --> 

        <!-- property area -->
        <div class="content-area user-profiel" style="background-color: #FCFCFC;">&nbsp;
            <div class="container">   
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1 profiel-container">

                        <form action="" method="">
                            <div class="profiel-header">
                                <h3>
                                    <b>BUILD</b> YOUR PROFILE <br>
                                    <small>This information will let us know more about you.</small>
                                </h3>
                                <hr>
                            </div>

                            <div class="clear">
                                <div class="col-sm-3 col-sm-offset-1">
                                    <div class="picture-container">
                                        <div class="picture">
                                            <img src="assets/img/avatar.png" class="picture-src" id="wizardPicturePreview" title=""/>
                                            <input type="file" id="wizard-picture">
                                        </div>
                                        <h6>Choose Picture</h6>
                                    </div>
                                </div>

                                <div class="col-sm-3 padding-top-25">

                                    <div class="form-group">
                                        <label>First Name <small>(required)</small></label>
                                        <input name="firstname" type="text" class="form-control" placeholder="Andrew...">
                                    </div>
                                    <div class="form-group">
                                        <label>Last Name <small>(required)</small></label>
                                        <input name="lastname" type="text" class="form-control" placeholder="Smith...">
                                    </div> 
                                    <div class="form-group">
                                        <label>Email <small>(required)</small></label>
                                        <input name="email" type="email" class="form-control" placeholder="andrew@email@email.com.com">
                                    </div> 
                                </div>
                                <div class="col-sm-3 padding-top-25">
                                    <div class="form-group">
                                        <label>Password <small>(required)</small></label>
                                        <input name="Password" type="password" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label>Confirm password : <small>(required)</small></label>
                                        <input type="password" class="form-control">
                                    </div>
                                </div>  

                            </div>

                            <div class="clear">
                                <br>
                                <hr>
                                <br>
                                <div class="col-sm-5 col-sm-offset-1">
                                    <div class="form-group">
                                        <label>Facebook :</label>
                                        <input name="Facebook" type="text" class="form-control" placeholder="https://facebook.com/user">
                                    </div>
                                    <div class="form-group">
                                        <label>Twitter :</label>
                                        <input name="Twitter" type="text" class="form-control" placeholder="https://Twitter.com/@user">
                                    </div>
                                    <div class="form-group">
                                        <label>Website :</label>
                                        <input name="website" type="text" class="form-control" placeholder="https://yoursite.com/">
                                    </div>
                                </div>  

                                <div class="col-sm-5">
                                    <div class="form-group">
                                        <label>Public email :</label>
                                        <input name="p-email" type="email" class="form-control" placeholder="p-email@rmail.com">
                                    </div>
                                    <div class="form-group">
                                        <label>Phone :</label>
                                        <input name="Phone" type="text" class="form-control" placeholder="+1 9090909090">
                                    </div>
                                    <div class="form-group">
                                        <label>FAX :</label>
                                        <input name="FAX" type="text" class="form-control" placeholder="+1 9090909090">
                                    </div>
                                </div>
 
                            </div>
                    
                            <div class="col-sm-5 col-sm-offset-1">
                                <br>
                                <input type='button' class='btn btn-finish btn-primary' name='finish' value='Finish' />
                            </div>
                            <br>
                    </form>

                </div>
            </div><!-- end row -->

        </div>
    </div>


          <!-- Footer area-->
       <?php include "footer.php";?>


</body>
</html>
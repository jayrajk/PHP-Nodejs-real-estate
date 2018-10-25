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
                        <h1 class="page-title" id="title">Hello : <span class="orange strong" ></span></h1>
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
                                    <b>YOUR PROFILE </b><br>
                                </h3>
                                <hr>
                            </div>

                            <div class="clear">

                                <div class="col-sm-3 padding-top-25">

                                    <div class="form-group">
                                        <label>Full Name </label>
                                        <input name="rfullname" id="rfullname" type="text" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label>Email </label>
                                        <input name="remail" id="remail" type="email" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label>Phone Number</label>
                                        <input name="rphone" id="rphone" type="number" class="form-control">
                                    </div>
                                </div>
                                <div class="col-sm-3 padding-top-25">
                                    <div class="form-group">
                                        <label>Household Income </label>
                                        <input name="household" id="household" type="number" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label>Occupation</label>
                                        <input name="occupation" id="occupation" type="text" class="form-control">
                                    </div>
                                </div>

                            </div>
                    
                            <div class="col-sm-5 col-sm-offset-1">
                                <br>
                                <input type='button' class='btn btn-finish btn-primary' name='save' id="save" value='Save' />
                            </div>
                            <br>
                    </form>

                </div>
            </div><!-- end row -->

        </div>
    </div>


          <!-- Footer area-->
       <?php include "footer.php";?>
        <script type="text/javascript">
         $(document).ready(function () {
             if(sessionStorage.getItem('username') != null){
                 $("#login").hide();
                 $("#userprofile").show();

                 var body = {
                     id: sessionStorage.getItem('userid')
                 };
                 $.ajax({
                     url:'http://127.0.0.1:4000/api/users/profile',
                     type: 'POST',
                     data: JSON.stringify(body),
                     dataType: 'JSON',
                     contentType: 'application/json',
                     crossDomain: true,
                     success:function(result){
                         if(result.error==true){
                             swal(result.message,'','error');
                         }else{
                             $('#rfullname').val(result.data.name);
                             $('#remail').val(result.data.email);
                             $('#rphone').val(result.data.phone);
                             $('#household').val(result.data.household_income);
                             $('#occupation').val(result.data.occupation);
                             sessionStorage.setItem('username',result.data.name);
                             sessionStorage.setItem('useremail',result.data.email);
                         }
                     }
                 })
             }else if(sessionStorage.getItem('username') == null){
                 $("#login").show();
                 $("#userprofile").hide();
                 window.stop();
                 window.history.back();
             }

             $('#title').replaceWith('<h1 class="page-title"><span class="orange strong" >'+sessionStorage.getItem('username')+'</span></h1>');


             $('#save').click(function () {
                 var body = {
                    id: sessionStorage.getItem('userid'),
                    name : $('#rfullname').val(),
                    email : $('#remail').val(),
                    phone : $('#rphone').val(),
                    household_income: $('#household').val(),
                    occupation: $('#occupation').val()
                 };
                 $.ajax({
                     url:'http://127.0.0.1:4000/api/users/update',
                     type: 'PUT',
                     data: JSON.stringify(body),
                     dataType: 'JSON',
                     contentType: 'application/json',
                     crossDomain: true,
                     success:function(result){
                         if(result.error==true){
                             swal(result.message,'','error');
                         }else{
                             swal(result.message,'','success');
                         }
                     }
                 })
             })
         })

        </script>

</body>
</html>
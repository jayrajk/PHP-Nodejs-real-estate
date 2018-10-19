<?php ob_start(); ?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>GARO ESTATE | Register page</title>
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
        <link href="assets/css/animate.css" rel="stylesheet" media="screen">
        <link rel="stylesheet" href="assets/css/bootstrap-select.min.css"> 
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/css/icheck.min_all.css">
        <link rel="stylesheet" href="assets/css/price-range.css">
        <link rel="stylesheet" href="assets/css/owl.carousel.css">  
        <link rel="stylesheet" href="assets/css/owl.theme.css">
        <link rel="stylesheet" href="assets/css/owl.transitions.css">
        <link rel="stylesheet" href="assets/css/style.css">
        <link rel="stylesheet" href="assets/css/responsive.css">
    </head>
    <body>

    <?php include "header.php"; ?>

    <div class="page-head">
        <div class="container">
            <div class="row">
                <div class="page-head-content">
                    <h1 class="page-title">Home New account / Sign in </h1>
                </div>
            </div>
        </div>
    </div>
    <!-- End page header -->

        <!-- register-area -->
        <div class="register-area" style="background-color: rgb(249, 249, 249);">
            <div class="container">

                <div class="col-md-6">
                    <div class="box-for overflow">
                        <div class="col-md-12 col-xs-12 register-blocks">
                            <h2>New account : </h2> 
                            <form action="" id="registerForm" method="post">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" name="name" id="name">
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="text" data-validation="email" class="form-control" name="email" id="email">
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" name="password" id="password">
                                </div>
                                <div class="form-group">
                                    <label for="phone">Phone Number</label>
                                    <input type="number" class="form-control" name="phone" id="phone" maxlength="10" minlength="10">
                                </div>
                                <div class="form-group">
                                    <span id="reg"></span>
                                </div>
                                <div class="text-center">
                                    <button type="submit" id="registerBtn" class="btn btn-default">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="box-for overflow">                         
                        <div class="col-md-12 col-xs-12 login-blocks">
                            <h2>Login : </h2> 
                            <form action="" id="loginForm" method="post">
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" name="lemail" id="lemail">
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" name="lpassword" id="lpassword">
                                </div>
                                <div class="text-center">
                                    <a href="">Forget Password ?</a>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-default" id="loginBtn"> Log in</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>      

          <!-- Footer area-->
        <?php include "footer.php"; ?>


        <script src="assets/js/jquery.min.js"></script>
        <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>
        <script src="assets/js/modernizr-2.6.2.min.js"></script>

        <!--<script src="assets/js/jquery-1.10.2.min.js"></script>-->
        <script src="bootstrap/js/bootstrap.min.js"></script>
        <script src="assets/js/bootstrap-select.min.js"></script>
        <script src="assets/js/bootstrap-hover-dropdown.js"></script>

        <script src="assets/js/easypiechart.min.js"></script>
        <script src="assets/js/jquery.easypiechart.min.js"></script>

        <script src="assets/js/owl.carousel.min.js"></script>
        <script src="assets/js/wow.js"></script>

        <script src="assets/js/icheck.min.js"></script>
        <script src="assets/js/price-range.js"></script>

        <script src="assets/js/main.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.0.0/sweetalert.min.js"></script>
        <script type="text/javascript">
        $(document).ready(function () {
            $('#registerBtn').click(function () {

                $('#registerForm').validate({
                    rules:{
                        name: 'required',
                        email:{
                            required:true,
                            email:true
                        },
                        password:{
                            required:true,
                            minlength:6
                        },
                        phone:{
                            required:true,
                            minlength:10,
                            maxlength:10
                        }
                    },
                    messages:{
                        name: "Please enter your name",
                        email: {
                            required:"Please enter your email id",
                            email:"Please enter valid email id"
                        },
                        password:{
                            required: "Please enter your password",
                            minlength:"Please enter atleast 6 character"
                        },
                        phone:{
                            required:"Enter your phone number",
                            minlength:"Enter valid phone number",
                            maxlength:"Enter valid phone number"
                        }
                    },
                    submitHandler: function (form) {
                        var name =$('#name').val();
                        var email = $('#email').val();
                        var password = $('#password').val();
                        var phone = $('#phone').val();
                        var body = {
                            name: name,
                            email: email,
                            password: password,
                            phone: phone
                        };
                        $.ajax({
                            url:'http://127.0.0.1:4000/register',
                            type: 'POST',
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
                    }
                });
            });

            $('#loginBtn').click(function () {

                $('#loginForm').validate({
                    rules:{
                        lemail:{
                            required:true,
                            email:true
                        },
                        lpassword:{
                            required:true,
                            minlength:6
                        }
                    },
                    messages:{
                        lemail: {
                            required:"Please enter your email id",
                            email:"Please enter valid email id"
                        },
                        lpassword:{
                            required: "Please enter your password",
                            minlength:"Please enter atleast 6 character"
                        }
                    },
                    submitHandler: function (form) {
                        var lemail = $('#lemail').val();
                        var lpassword = $('#lpassword').val();
                        var body = {
                            lemail: lemail,
                            lpassword: lpassword,
                        };
                        $.ajax({
                            url:'http://127.0.0.1:4000/login',
                            type: 'POST',
                            data: JSON.stringify(body),
                            dataType: 'JSON',
                            contentType: 'application/json',
                            crossDomain: true,
                            success:function(result){
                                if(result.error==true){
                                    swal(result.message,'','error');
                                }else{
                                    swal(result.message,'','success');
                                    window.location.href="index.php";
                                }
                            }
                        })
                    }
                });
            });
        })

        </script>

    </body>
</html>
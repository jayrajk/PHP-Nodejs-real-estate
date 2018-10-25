<div class="footer-area">

    <div class=" footer">
        <div class="container">
            <div class="row">

                <div class="col-md-4 col-sm-8 wow fadeInRight animated">
                    <div class="single-footer">
                        <h4>About us </h4>
                        <div class="footer-title-line"></div>

                        <img src="assets/img/footer-logo.png" alt="" class="wow pulse" data-wow-delay="1s">
                        <p>Lorem ipsum dolor cum necessitatibus su quisquam molestias. Vel unde, blanditiis.</p>
                        <ul class="footer-adress">
                            <li><i class="pe-7s-map-marker strong"> </i> Vip plaza, Althan, Surat, Gujarat, India - 395017 </li>
                            <li><i class="pe-7s-mail strong"> </i> garoestate@company.com </li>
                            <li><i class="pe-7s-call strong"> </i> +1 800 138 100</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4 col-sm-8 wow fadeInRight animated">

                </div>
                <div class="col-md-4 col-sm-8 wow fadeInRight animated">
                    <div class="single-footer">
                        <h4>Quick links </h4>
                        <div class="footer-title-line"></div>
                        <ul class="footer-menu">
                            <li><a href="properties.php">Properties</a>  </li>
                            <li><a href="submit-property.php">Sent/Rent Property</a></li>
                            <li><a href="contact.html">Contact us</a></li>
                            <li><a href="faq.html">fqa</a>  </li>
                            <li><a href="faq.html">Terms </a>  </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="footer-copy text-center">
        <div class="container">
            <div class="row">
                <div class="pull-left">
                    <span> (C) <a href="#">JK Infotech</a> , All rights reserved 2018  </span>
                </div>
            </div>
        </div>
    </div>

</div>

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

<script src="assets/js/price-range.js"></script>
<script src="assets/js/jquery.bootstrap.wizard.js" type="text/javascript"></script>
<script src="assets/js/jquery.validate.min.js"></script>
<script src="assets/js/wizard.js"></script>

<script src="assets/js/main.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js"></script>
<script src="assets/js/components/md5.js"></script>
<script src="assets/js/components/md5-min.js"></script>
<script src="assets/js/rollups/md5.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.0.0/sweetalert.min.js"></script>
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/blueimp-md5/2.5.0/js/md5.min.js"></script>-->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/md5.js">-->
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
                    var password = CryptoJS.MD5($('#password').val()).toString();
                    var phone = $('#phone').val();
                    var body = {
                        name: name,
                        email: email,
                        password: password,
                        phone: phone
                    };
                    var check = {
                        email:email
                    };
                    $.ajax({
                        url:'http://127.0.0.1:4000/api/users/checkuser',
                        type: 'POST',
                        data: JSON.stringify(check),
                        dataType: 'JSON',
                        contentType: 'application/json',
                        crossDomain: true,
                        success:function(result){
                            if(result.error==true){
                                swal(result.message,'','error');
                            }else{
                                $.ajax({
                                    url:'http://127.0.0.1:4000/api/users/register',
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
                    var lpassword = CryptoJS.MD5($('#lpassword').val()).toString();
                    var body = {
                        email: lemail,
                        password: lpassword,
                    };
                    $.ajax({
                        url:'http://127.0.0.1:4000/api/users/login',
                        type: 'POST',
                        data: JSON.stringify(body),
                        dataType: 'JSON',
                        contentType: 'application/json',
                        crossDomain: true,
                        success:function(result){
                            if(result.error==true){
                                swal(result.message,'','error');
                            }else{
                                swal('Welcome '+result.data.name.split(' ')[0],'','success');
                                sessionStorage.setItem('username',result.data.name);
                                sessionStorage.setItem('useremail',result.data.email);
                                sessionStorage.setItem('userid',result.data.id);
                                window.location.href="index.php";
                            }
                        }
                    })
                }
            });
        });

        if(sessionStorage.getItem('username') != null){
            $("#login").hide();
            $("#userprofile").show();
            $("#profilename").replaceWith('<a href="#" class="dropdown-toggle" id="profilename" data-toggle="dropdown" data-hover="dropdown" data-delay="200">'+sessionStorage.getItem('username').split(' ')[0]+'</a>');
        }else if(sessionStorage.getItem('username') == null){
            $("#login").show();
            $("#userprofile").hide();
        }

        $('#logout').click(function () {
            sessionStorage.clear();
            /*sessionStorage.removeItem('useremail');
            sessionStorage.removeItem('userid');*/
            window.location.href = "register.php";
        })
    })

</script>
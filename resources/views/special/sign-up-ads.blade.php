<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="../images/favicon.png">
    <title>ERS Template</title>
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="../css/all.css" type="text/css"/>
    <script src="../js/jquery.min.js" type="text/javascript"></script>
  </head>
  <body class="ers-splash-screen">
    <div class="ers-wrapper ers-login ers-signup col-md-9">
      <div class="ers-content">
        <div class="main-content">
          <div class="login-container sign-up">
            <div class="panel panel-default">
              <div class="panel-heading"><img src="../images/logo-white.png" alt="logo" width="100px" height="100px" class="logo-img">
              <h2>myERS</h2></div>
              <div class="panel-body">
                <form action="index.html" parsley-validate="" novalidate="" method="get" class="form-horizontal">
                  
                  <div class="sign-up-form"> 

                    <div class="form-group">
                      <div id="nick-handler" class="input-group">
                        <span class="input-group-addon">
                          <input type="text" name="nick" data-parsley-trigger="change" data-parsley-errors-messages-disabled="true" data-parsley-class-handler="#nick-handler" required="" placeholder="Username" autocomplete="off" class="form-control">
                        </span>
                      </div>
                    </div>
                    <div class="form-group">
                      <div id="email-handler" class="input-group">
                        <span class="input-group-addon">
                          <input type="email" name="email" data-parsley-trigger="change" data-parsley-errors-messages-disabled="true" data-parsley-class-handler="#email-handler" required="" placeholder="E-mail" autocomplete="off" class="form-control">
                        </span>
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-xs-6">
                        <div id="password-handler" class="input-group">
                          <span class="input-group-addon">
                            <input id="pass1" type="password" data-parsley-errors-messages-disabled="true" placeholder="Password" data-parsley-class-handler="#password-handler" required="" class="form-control">
                          </span>
                        </div>
                      </div>
                      <div class="col-xs-6">
                        <div id="confirm-handler" class="input-group">
                          <span class="input-group-addon">
                            <input parsley-equalto="#pass1" type="password" data-parsley-errors-messages-disabled="true" data-parsley-class-handler="#confirm-handler" required="" placeholder="Confirm" class="form-control">
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="conditions">By creating an account, you agree with the <a href="#">Terms and Conditions</a>.</p>
                  <button type="submit" class="btn btn-block btn-alt-special btn-lg">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ers-ads col-md-3">
      <div class="panel panel-default panel-heading-fullwidth wow shake">
        <div class="panel-heading">Registration is Free</div>
        <div class="panel-body">
          <h3>It is free to create an account into myERS</h3>
          <p>Velit numquam possimus eum delectus maiores dicta perspiciatis quae aperiam dolores facere, doloribus non, iusto, sit.</p>
          <p>Velit numquam possimus eum delectus maiores dicta perspiciatis quae aperiam dolores facere, doloribus non, iusto, sit.</p>
        </div>
      </div>
      <div class="photo wow bounceInUp">
        <div class="cover"></div>
      </div>
    </div>
    <script src="../js/all.js" type="text/javascript"></script>
    <script type="text/javascript">
      $(document).ready(function(){
        //initialize the javascript
        new WOW({mobile: false }).init();           
      });
    </script>
  </body>
</html>
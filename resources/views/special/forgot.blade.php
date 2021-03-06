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
    <div class="ers-wrapper ers-login">
      <div class="ers-content">
        <div class="main-content">
          <div class="login-container forgot-password">
            <div class="panel panel-default">
              <div class="panel-heading"><img src="../images/logo-white.png" alt="logo" width="100px" height="100px" class="logo-img">
              <h2>Forgot your password?</h2></div>
              <div class="panel-body">
                <form action="index.html" parsley-validate="" novalidate="" method="get" class="form-horizontal">
                  <div class="form-group">
                    <div id="email-handler" class="input-group"><span class="input-group-addon">
                      <input type="email" name="email" parsley-trigger="change" data-parsley-errors-messages-disabled="true" data-parsley-class-handler="#email-handler" required="" placeholder="Your Email" autocomplete="off" class="form-control"></span>
                    </div>
                  </div>
                  <p class="conditions">Don't remember your email? <a href="#">Contact us</a>.</p>
                  <button type="submit" class="btn btn-block btn-alt-special btn-lg">Reset Password</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="../js/all.js" type="text/javascript"></script>
  </body>
</html>
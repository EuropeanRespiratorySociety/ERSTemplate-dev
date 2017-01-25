
<!DOCTYPE html>
<html lang="en">
  <head>
    <base href="/">
    <link rel="apple-touch-icon" sizes="57x57" href="images/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="images/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="images/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="images/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="images/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="images/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="images/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="images/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="images/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="images/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="images/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png">
    
    <link rel="manifest" href="images/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="images/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>myCRM</title>
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="../css/all.css" type="text/css"/>
    <script src="../js/jquery.min.js" type="text/javascript"></script>
  </head>
  <body id="ers-my-crm">

    <div class="ers-wrapper ers-fixed-sidebar ers-full-screen-with-metanav"> 

        <!-- Start Left Sidebar -->
            @include('crm.sidebar')
        <!-- End Left Sidebar -->

        <!-- Start main content Area -->
            @include('crm.content')
        <!-- End main content Area -->
      
    </div>
    
    <script src="../js/all.js" type="text/javascript"></script>
    <script type="text/javascript">
      $(document).ready(function(){
        
        if(Cookies.get('my-ers-aside') && Cookies.get('my-ers-aside') != 'undefined'){
          $('.page-aside').css('transition-duration', '0s');
          $('.ers-aside').addClass('aside-close');
        }

        $('.aside-open-btn').click(function(){
            $('.ers-aside').removeClass('aside-close');
            Cookies.remove('my-ers-aside');
            $('.page-aside').css('transition-duration', '0.5s');
        });

        $('.aside-close-btn').click(function(){
          $('.ers-aside').addClass('aside-close');
          Cookies.set('my-ers-aside', true);
        });

      });
    </script>

    @yield('scripts')

  </body>
</html>
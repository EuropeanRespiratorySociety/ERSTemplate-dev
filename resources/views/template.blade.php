
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

    <title>ERS Template</title>
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="../css/all.css" type="text/css"/>
    <script src="../js/jquery.min.js" type="text/javascript"></script>
    <script src="../js/early-load.js" type="text/javascript"></script>
  </head>
  <body>

    <div class="ers-wrapper ers-fixed-sidebar @if($color){!! $color !!}@endif @if($display){!! $display !!}@endif">

        <!-- Start Top Nav -->  
            @include('nav.top-nav')
        <!-- End Top Nav -->  

        <!-- Start Main Navigation -->    
            @include('nav.main-nav')
        <!-- End Main Navigation -->  

        <!-- Start main content Area -->
            @yield('content')
        <!-- End main content Area -->
          
        <!-- Start right Sidebar -->
            @include('sidebar.right')      
        <!-- End right Sidebar -->
      
    </div>
   
    <script src="../js/all.js" type="text/javascript"></script>
    @yield('scripts')
    <script type="text/javascript"> 
        $(document).ready(function(){
            var client = new $.RestClient('https://api.ersnet.org/');
            client.add('metanav');
            client.metanav.read().done(function (data){
                    $('body').prepend(data.menu);
                    (function() {
                        var menuEl = document.getElementById('ml-menu'),
                            mlmenu = new MLMenu(menuEl, {
                                // breadcrumbsCtrl : true, // show breadcrumbs
                                // initialBreadcrumb : 'all', // initial breadcrumb text
                                backCtrl : false, // show back button
                                // itemsDelayInterval : 60, // delay between each menu item sliding animation
                                //onItemClick: loadPage // callback: item that doesn´t have a submenu gets clicked - onItemClick([event], [inner HTML of the clicked item])
                            });

                            function loadPage(ev, itemName) {
                                //ev.preventDefault();
                                window.location.href = ev.target.href
                            } 
                    })();  
            });

            var body = $("body");
            var openSidebar = false;
            function oSidebar(){
                    body.addClass( 'open-left-sidebar' + " " + 'ers-animate' );
                    openSidebar = true;
                }

            function cSidebar(){
                    body.removeClass('open-left-sidebar').addClass('ers-animate');
                    sidebarDelay();
                }

            function sidebarDelay(){
                openSidebar = true;
                setTimeout(function(){
                openSidebar = false;
                }, 400);
            }    

            $('.ers-toggle-left-sidebar').on("click", function(e){
                if( openSidebar && body.hasClass('open-left-sidebar') ){
                    cSidebar();
                }else if( !openSidebar ){
                    oSidebar();
                }
                e.stopPropagation();
                e.preventDefault();
            });
        });    
    </script> 

  </body>
</html>
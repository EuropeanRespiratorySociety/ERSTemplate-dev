var elixir = require("laravel-elixir");

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
  /*
        |--------------------------------------------------------------------------
        | Development Tip
        |--------------------------------------------------------------------------    
        | 
        | To compile faster, we do not need to compile/move all files each time,
        | thust we can comment all lines that are not necessary.
        |
        */

  /**
   *　--------------------------------------
   *  Special copies to public folder
   *　--------------------------------------
   */
  /*
            mix.copy('resources/assets/fonts', 'public/fonts');
         
            
            mix.copy('resources/assets/vendor/bootstrap/dist/fonts', 'public/fonts/glyphicons');
            mix.copy('resources/assets/vendor/enjoyhint/src/Casino_Hand', 'public/fonts/Casino_Hand');
        
            mix.copy('resources/html/images', 'public/images');
              
            //this was taken out from the main file for Kendo to work on myERS
            mix.copy('resources/assets/vendor/jquery/jquery.min.js', 'public/js/jquery.min.js');
        */

  /**
   *　--------------------------------------
   *  Main CSS
   *　--------------------------------------
   */

  mix.less("style.less");
  mix.styles([
    "../vendor/owl-carousel/owl.theme.default.css",
    "../vendor/owl-carousel/owl.carousel.css",
    "../vendor/select2/css/select2.min.css",
    "../../../public/css/style.css",
    "../vendor/jquery.gritter/css/jquery.gritter.css",
    "../vendor/jquery.niftymodals/css/component.css",
    "../vendor/jquery.vectormap/jquery-jvectormap-1.2.2.css",
    "../vendor/jquery.fullcalendar/fullcalendar.css",
    "../vendor/jquery.fullcalendar/fullcalendar.print.css",
    "../vendor/jquery.vectormap/jquery-jvectormap-1.2.2.css",
    "../vendor/datetimepicker/css/bootstrap-datetimepicker.min.css",
    "../vendor/bootstrap-slider/css/bootstrap-slider.css",
    "../vendor/dropzone/dist/dropzone.css",
    "../vendor/datatables/css/dataTables.bootstrap.min.css",
    "../vendor/fullpagejs/dist/jquery.fullpage.min.css",
    "../../../public/css/fullpage.css",
    "../vendor/wow/wow.css",
    "../vendor/enjoyhint/src/jquery.enjoyhint.css",
    "../../../public/css/style.css",
  ]);

  /**
        * We create a special css for the metanav plugin
       
        mix.less('metanav.less');
 */
  /**
   *　--------------------------------------
   * Main JS Files
   *　--------------------------------------
   */
  /** 
        mix.scripts([
                '../vendor/bootstrap/dist/js/bootstrap.min.js',
                'metanav.js', //The metanav needs to be before the main.js as we call the metanav from it

                'main.js',


                '../vendor/jquery.nanoscroller/javascripts/jquery.nanoscroller.js',
                '../vendor/jquery.gritter/js/jquery.gritter.js',
                '../vendor/jquery.nestable/jquery.nestable.js',
                '../vendor/jquery.niftymodals/js/jquery.modalEffects.js',
                '../vendor/jquery-ui/jquery-ui.min.js',

                '../vendor/datatables/js/jquery.dataTables.min.js',
                '../vendor/datatables/js/dataTables.bootstrap.min.js',
                '../vendor/datatables/plugins/buttons/js/dataTables.buttons.js',
                '../vendor/datatables/plugins/buttons/js/buttons.html5.js',
                '../vendor/datatables/plugins/buttons/js/buttons.flash.js',
                '../vendor/datatables/plugins/buttons/js/buttons.print.js',
                '../vendor/datatables/plugins/buttons/js/buttons.colVis.js',
                '../vendor/datatables/plugins/buttons/js/buttons.bootstrap.js',

                '../vendor/prettify/prettify.js',
                '../vendor/datetimepicker/js/bootstrap-datetimepicker.min.js',
                //'../vendor/fuelux/js/wizard.js',
                '../vendor/select2/js/select2.min.js',
                //'../vendor/bootstrap-slider/js/bootstrap-slider.js',
                '../vendor/parsley/parsley.min.js',
                '../vendor/dropzone/dist/dropzone.js',
                //'../vendor/jquery.maskedinput/jquery.maskedinput.min.js',
                '../vendor/moment.js/min/moment.min.js',
                '../vendor/jquery.fullcalendar/fullcalendar.js',
                '../vendor/skycons/skycons.js',
                '../vendor/wow/wow.js',
                '../vendor/js-cookie/src/js.cookie.js',
                '../vendor/countup/countUp.min.js',
                '../vendor/enjoyhint/enjoyhint.min.js', //url of the font has to be changed in case of update of this file
                '../vendor/masonry/masonry.pkgd.min.js',
                '../vendor/masonry/isotope.js',
                '../vendor/masonry/packery.min.js',
                'app-tables-datatables.js',
                //'app-ui-notifications.js',
                //'app-ui-nestable-lists.js',
                //'app-form-wizard.js',
                //'app-form-masks.js',
                'app-page-profile.js',

                'init.js',
                'ie-fix.js'
        ]);
*/
  /**
   *　--------------------------------------
   * Stats, Chart plotting
   *　--------------------------------------
   */
  mix.scripts(
    [
      "../vendor/jquery-flot/jquery.flot.js",
      "../vendor/jquery-flot/jquery.flot.pie.js",
      "../vendor/jquery-flot/jquery.flot.resize.js",
      "../vendor/jquery-flot/plugins/jquery.flot.orderBars.js",
      "../vendor/jquery-flot/plugins/curvedLines.js",

      "../vendor/jquery.sparkline/jquery.sparkline.min.js",

      "../vendor/jquery.vectormap/jquery-jvectormap-1.2.2.min.js",
      "../vendor/jquery.vectormap/maps/jquery-jvectormap-us-merc-en.js",
      "../vendor/jquery.vectormap/maps/jquery-jvectormap-world-mill-en.js",
      "../vendor/jquery.vectormap/maps/jquery-jvectormap-uk-mill-en.js",
      "../vendor/jquery.vectormap/maps/jquery-jvectormap-fr-merc-en.js",
      "../vendor/jquery.vectormap/maps/jquery-jvectormap-us-il-chicago-mill-en.js",
      "../vendor/jquery.vectormap/maps/jquery-jvectormap-au-mill-en.js",
      "../vendor/jquery.vectormap/maps/jquery-jvectormap-in-mill-en.js",
      "../vendor/jquery.vectormap/maps/jquery-jvectormap-map.js",
      "../vendor/jquery.vectormap/maps/jquery-jvectormap-ca-lcc-en.js",

      "../vendor/chartjs/Chart.min.js",
    ],
    "public/js/stats.js"
  );
  /**
   *　--------------------------------------
   * Fullpage
   *　--------------------------------------
   */
  /*
                mix.scripts([  
                '../vendor/fullpagejs/vendors/jquery.easings.min.js',
                '../vendor/fullpagejs/vendors/jquery.slimscroll.min.js',
                '../vendor/fullpagejs/dist/jquery.fullpage.min.js'
                ], 'public/js/fullpage.js');
        */

  /**
   *　--------------------------------------
   * Earlyload
   *　--------------------------------------
   */

  /*
                mix.scripts([  
                '../vendor/jquery-rest-client/rest-client.js', 
                ], 'public/js/early-load.js');
        */

  /**
   *　--------------------------------------
   * Copies to public folder
   *　--------------------------------------
   */

  mix.copy(
    "resouces/assets/vendor/owl-carousel/owl.carousel.min.js",
    "public/js/owl.carousel.min.js"
  );

  mix.copy(
    "resources/assets/js/app-ui-notifications.js",
    "public/js/app-ui-notifications.js"
  );
  mix.copy(
    "resources/assets/js/app-page-calendar.js",
    "public/js/app-page-calendar.js"
  );
  mix.copy("resources/assets/js/app-stats.js", "public/js/app-stats.js");
  mix.copy("resources/assets/js/app-fullpage.js", "public/js/app-fullpage.js");

  mix.copy(
    "resources/assets/js/app-assemblies.js",
    "public/js/app-assemblies.js"
  );
  /*
        mix.copy('resources/assets/js/app-executive-office.js', 'public/js/app-executive-office.js');
        mix.copy('resources/assets/js/app-form-elements.js', 'public/js/app-form-elements.js');
        
                mix.copy('resources/assets/js/app-home.js', 'public/js/app-home.js');
                
                mix.copy('resources/assets/js/app-timeline.js', 'public/js/app-timeline.js');

        mix.copy('resources/assets/js/app-newsfeed.js', 'public/js/app-newsfeed.js');
  mix.copy(
    "resources/assets/js/app-membership.js",
    "public/js/app-membership.js"
  );

  /*        
                mix.copy('resources/assets/js/app-policy-areas.js', 'public/js/app-policy-areas.js');
        */
  /*        
                mix.copy('resources/assets/js/app-enjoyhint-demo.js', 'public/js/app-enjoyhint-demo.js');
        
        /*      mix.copy('resources/assets/js/app-enjoyhint-demo.js', 'public/js/app-enjoyhint-demo.js');
        
                mix.copy('resources/assets/js/app-who-we-are.js', 'public/js/app-who-we-are.js');
                
                //mix.copy('resources/assets/js/app-wow.js', 'public/js/app-wow.js');
                mix.copy('resources/assets/js/metanav.js', 'public/js/metanav.js');
                
                mix.copy('resources/assets/vendor/dropzone/upload.php', 'public/pages/upload.php');
        */
});

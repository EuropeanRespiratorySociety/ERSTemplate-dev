# ERS Template

## Docker

In order to run the project just launch it for the cloned repository:
```
$ docker-compose up 
```
This will launch the project in "watch mode" every change done in the colned folder will be compiled immediately.

@TODO add variables to the configuration to compile for "production".

For now to compile for production (before commiting) just run:

```
$ docker-compose -f ./docker-compose-prod.yml up --build
```

This will comile all assets and minify/uglify them

Remember to modify the `gulpfile.js` to select what you want to compile. If no work is needed with js, no need to recompile it :)

To launch containers in detached mode

```
$ docker-compose up -d

``` 

Shut down containers with (when in detached mode else use `Ctrl + C` )
```
$ docker-compose stop
```

**Version 1.2.4**

Since version **1.2.2** you need to change the html structure in order to use the fixed bar at the top, see the documentation on myCRM bellow.

--------------

Since Version **1.1.14** top level in the main navigation are clickable. It requires a change in the html:

    <li class="dropdown">
       <a class="dropdown-toggle disable" href="http://erstemplate.app/dashboard">
        Top menu
      </a>
      <a href="javascript:void(0)" class="dropdown-toggle independent-toggle" data-toggle="dropdown"><b class="caret"></b></a>               
      <ul class="dropdown-menu">
        <li>
         <a href="http://erstemplate.app/dashboard/member">
          Second Level
        </a>
      </li>
      ...

You need to move the "caret" out of the top level `<a>` and wrap it in its own `<a>` with the `.independent-toggle` class.

-----------------

Since version **1.1.13** a third menu leve has been added to the main menu. The html structure has changed now the `.navbar-nav`class has to be added to the `<ul>`following the `<div class="ers-navbar-collapse collapse navbar-collapse">`

 **Bootstrap** and **Jquery** are used (see bellow for the list of libraries) . 

~~This version makes use of the first version of the *Metanavigation* in the left bar. It is **not finished**. It is just a test for many sub-levels and it needs to be styled.~~

-------------------

The Change log is now at the end of this file.

-------------------

Here is what is avalaible for now:

## UI
* general stuff
* the grid system 
* alerts
* buttons
* icons
* modals
* nestable-lists
* notifications
* panels
* cards
* tabs-accordions
* Tables
* Timeline

## Pages Type

* Blank
* Blank with aside position (*e.g.* for a submenu)
* Login
* Sign-up
* Sign-up with errors
* Sign-up with ads and animation
* Forgot-password
* 403/404/503 etc... (try it by passing the last param of the url with the code you whish to dispay.)
* Calendar
* Stats
* Guided Tour
* my CRM

## User pages (Profile)

* Member page
* Non-member page
* Edit profile page
* Profile variations (membership for now)

For the Edit profile page, the `id` that is used as an anchor by Bootstrap scrollspy needs to be put `<div class="form-group">` immediately before the targeted `h3` if not scrolling goes too low. When we findout why we will fix this.

The status is there, but not necessary as we did not plan any "social features" beyond sending mails...

## Forms
 * Form elements
 * Form validation
 * Drag and Drop Upload (Multi uploads)

## Dashboard
* Member
* Non-member
* Not connected
* Variation (for different types of membership/status within the society/etc...)

## [Widget/API](https://github.com/EuropeanRespiratorySociety/api-ers)
* Metanavigation as a widget
* News from the API

## More pages to come
* Sliders
* Form Wizzards
* Form Masks

## Available libraries for now
### All these libraries are included in the all.css and all.js compiled and minified

Library | Version
------- | -------
[Bootstrap](http://getbootstrap.com/) | 3.3.5
[Bootstrap DateTime Picker](http://www.malot.fr/bootstrap-datetimepicker/) | 2.3.5
[Bootstrap Slider](http://seiyria.github.io/bootstrap-slider/) | 4.8.3
[Chartjs](http://chartjs.org/) | 1.0.2
[Countup](https://inorganik.github.io/countUp.js/) | 1.6.1
[dataTables](http://datatables.net/) | 1.10.9
[dataTables Buttons](https://github.com/DataTables/Buttons) | 1.0.3
[Dropzonejs](http://www.dropzonejs.com) | 4.0.0
[EnjoyHint](http://xbsoftware.github.io/enjoyhint/) | 3.1.0
[Font Awesome](https://fortawesome.github.io/Font-Awesome/) | 4.4.0
[FullCalendar](http://fullcalendar.io/) | 1.6.4
[Fullpagejs](https://github.com/alvarotrigo/fullPage.js) | 2.7.7
[jQuery](https://jquery.com/) | >= 1.9.1
[jQuery Breakpoint Check](https://github.com/cakebake/jquery-breakpoint-check) | 1.0.0
[jQuery Flot](https://travis-ci.org/flot/flot) | 0.8.3
[jQuery Nestable](https://github.com/thesabbir/jquery-nestable) | 1.0
[jQuery Nifty Modals](https://github.com/foxythemes/jquery-niftymodals) | 1.0.2
[jVectorMap](https://github.com/bjornd/jvectormap/) | 1.2.2
[jQuery Masked Input](https://github.com/digitalBush/jquery.maskedinput) | 1.4.1
[jQuery REST Client](https://github.com/jpillora/jquery.rest) | 1.0.2
[jQuery Sparkline](https://github.com/kapusta/jquery.sparkline) | 2.1.3
[jQuery UI](https://jqueryui.com/) | 1.11.4
[jQuery Vectormap](http://jvectormap.com/) | 1.2.2
[JS Cookie](https://github.com/js-cookie/js-cookie) | 2.1.0
[Google Prettify](https://github.com/google/code-prettify) | latest
[Gritter](https://github.com/jboesch/Gritter) | 1.7.4
[Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/) | 1.0.0
[Masonry/Isotope](http://isotope.metafizzy.co/) | 3.0.1
[Moment](http://momentjs.com/) | 2.17.1
[nanoScroller](http://jamesflorentino.github.io/nanoScrollerJS/) | 0.8.7
[Parsley](http://parsleyjs.org/) | 2.1.3
[Select2](https://select2.github.io/) | 4.0.0
[WOW](http://mynameismatthieu.com/WOW/) | 1.1.2
[Yamm](https://github.com/geedmo/yamm3) | 1.1.0
[Simple Timeline](https://github.com/idealley/simpletimeline) | 1.0.0

# How to use

For the pages to work, only two files need to be included 'all.css' (in the head) and 'all.js' (bottom of the page).
You also need to add jquery in the head for everything to works.

For now the `early-load.js` contains only the Jquery REST client. It is there as we do not need it everywhere and when we need it we may need it early: *e.g.* the metanavigation.
It has to be added right after Jquery. 

You can include the files on your server or remotely with the following urls:

* https://bootstrap.ersnet.org/css/all.css
* https://bootstrap.ersnet.org/js/jquery.min.js
* https://bootstrap.ersnet.org/js/early-load.js
* https://bootstrap.ersnet.org/js/all.js

To speed up the website all files are available through our CDN:

* https://cdn.ersnet.org/css/all.css
* https://cdn.ersnet.org/js/jquery.min.js
* https://cdn.ersnet.org/js/early-load.js
* https://cdn.ersnet.org/js/all.js

You can add your own JS or CSS under the ERS Template files. See bellow.

You can also use all images avaible in this demo with the following example url:

* https://bootstrap.ersnet.org/images/logo.png

or via the CDN

* https://cdn.ersnet.org/images/logo.png

## How to add your own JS

You can add your files under: 

  ``` 
    <script src="../js/all.js" type="text/javascript"></script>
  ``` 

The page `/pages/ui-notifications.html` is the example on how to do this.

* Add your coomponent file
* Initialise the component

### Create a JS component

  ```
      var App = (function () {
        'use strict';
        
        App.uiNotifications = function( ){  
          // your code goes here
        };

        return App;
      })(App || {});
  ``` 

`uiNotification` is the "name" of your component. It will need to be called with the `App.uiNotifications()` function.

You can add your component file under the template javascript file as follow:

  ```
    <script src="../js/app-ui-notifications.js" type="text/javascript"></script>
  ```

### Initialize your component 

Under your file add the following script block:

  ```
      <script type="text/javascript">
      $(document).ready(function(){
        //init the notification component
        App.uiNotifications();
      });
    </script>
  ``` 

  This will initialize your component on the page where you need it.

## Notifications

Notification are configured as follow

``` 
    $('#not-basic').click(function(){
      $.gritter.add({
        title: 'Samantha new msg!',
        text: "You have a new Thomas message, let's checkout your inbox.",
        image: '../' + App.conf.imgPath + '/avatar.jpg',
        time: '',
        class_name: 'img-rounded'
      });
      return false;
    }); 
```
The notification page uses a specific file (uncompressed in this demo) with all the notification examples. 

## Form Validation

Validation is triggered on any `<form>` element

## Modal Effects

Modal effects are triggered on element with the class `.md-trigger`

## Masonry / Isotope

Use the following code

  ```
    <script type="text/javascript">
        $('.row_event').isotope({
            layoutMode: 'packery',
            packery: {
                columnWidth: '.col-md-4',
            },            
            percentPosition: true
            
        });
    </script>  
  ```
Of course you need to addapt the classes to your container element `.row_event`and the size `.col-md-4`

## Form Upload
Dropzone is included on all pages. 

In order to create a drag and drop area just create a form as follow:

  ```
    <form id="my-awesome-dropzone" action="upload.php" class="dropzone">
      <div class="dz-message">
      <div class="icon"><span class="s7-cloud-upload"></span></div>
      <h2>Drag and Drop files here</h2><span class="note">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>
      </div>
    </form>
  ```
The minimum that is need is the `<form>` element with the class `.dropzone` 

We work on a php server so we have a fake `upload.php` file for the action that does not actually upload files for the demo site, but it of course also works with .Net. 

[File upload in ASP.NET MVC using Dropzone JS and HTML5](http://venkatbaggu.com/file-upload-in-asp-net-mvc-using-dropzone-js-and-html5/)

## Calendar

The calendar is configured in `/js/app-page-calendar.js`and is initialized on the page you need it as follow:

  ```
    <script src="../js/app-page-calendar.js" type="text/javascript"></script>
    <script type="text/javascript">
      $(document).ready(function(){
        //initialize the javascript
        App.pageCalendar();
      });
    </script>
  ```  
It uses [fullCalendar](http://fullcalendar.io/docs/). There are many examples in the documentation.

## Timeline

  Initialise the component with the following code:

```
    <script src="https://cdn.ersnet.org/js/app-timeline.js" type="text/javascript"></script>
    <script type="text/javascript">
      $(document).ready(function(){
        App.timeline();        
      });
    </script>
```

Structure of the html:

```
                <div class="timeline">                
                    <ul>
                        <li class="event">  
                            <div class="card-container">
                                <div class="card card-event"> 
                                </div>
                            </div>    
                        </li>
                    </ul>
                </div>
```                

## Newsfeed

Add the following to initialize the news feed.

```
	<script src="../js/app-newsfeed.js" type="text/javascript"></script>
    <script type="text/javascript">
      $(document).ready(function(){
        App.newsfeed();             
      });
    </script>
```

The html structure needs to be the following:

```
	<div class="ers-newsfeed col-sm-12 {!! $class !!}">
		<div class="panel panel-full">
	        <div class="panel-heading">
	            <span class="title">ERS Newsfeed</span>
	        </div>
	        <div class="panel-body">
                <div class="ers-scroller nano has-scrollbar scrollable">
	                <div class="nano-content">
						<ul id="news-feed" class="list-group">
	    				</ul>
					</div>
		        </div>
	        </div>
        </div>
	</div>
```

The Javascript is looking for the `#news-feed` id. And adds the returned news as list items. 

## WOW

You can add effects by adding the class `.wow` and the class of the effect like `.bounceInLeft` to the element you want to animate.
You also need to initialize WOW:

  ```
    <script type="text/javascript">
      $(document).ready(function(){
        //initialize the javascript
        new WOW({offset: 110 }).init();
      });
    </script>
  ```  
The offset is used to offset the top navigation. You can [test all effects](http://daneden.github.io/animate.css/). You can also see a [selection live](http://bootstrap.ersnet.org/pages/fullpage#animation-support).

## EnjoyHint

You can create a guided tour with enjoy hint. Load the specific script for your tour (Check how to add your own JS above) by creating your own componsent.  Initialize it as follow:


  ```
    <script src="../js/app-enjoyhint-demo.js" type="text/javascript"></script>
    <script type="text/javascript">
      $(document).ready(function(){
        //initialize the javascript
        App.enjoyHintDemo();
      });
    </script>
  ```  
Replace `enjoyHintDemo()` by your own function such as `enjoyHintRegisterToCongress()`. EnjoyHint is available within the main JS File.

Use cookies in order to show the Guided tour only once. You can continue a tour on the next page also by setting cookies.

## Setting and Getting cookies

Anywhere on the site you can get or set cookies as follow:

Create a cookie, valid across the entire site:

```javascript
Cookies.set('name', 'value');
```

Create a cookie that expires 7 days from now, valid across the entire site:

```javascript
Cookies.set('name', 'value', { expires: 7 });
```

Read cookie:

```javascript
Cookies.get('name'); // => 'value'
Cookies.get('nothing'); // => undefined
```

Delete cookie:

```javascript
Cookies.remove('name');
```

For more read the plugin's documentation

## About the white bar on the left

We call this bar Metanavigation. The Metanavigation is intended to be the only thing that does not change accross all our websites, thus the user does not get lost.

The use of the white bar on this "bootstrap" website is **not** correct as the links go to internal page of the website. Icons are also pure fantasy.

* The ERS Logo should bring the user to **http://www.ersnet.org**
* The title of the website is the first item of the Breadcrumb, when this is clicked the user goes to the **homepage of the website on which he is**.

## About the right menu

It is not in its final form. We need to see what exactly will be put in it. The Idea is to put what we call "tools" or "myERS tools" *e.g* reimbursment, vote, CME, officer email tool, etc...

## Fullpage websites

You just need to add the class `.ers-full-screen` to the `.ers-wrapper` or you can use the class `.ers-full-screen-with-metanav` in order to keep the metanavigation (left sidebar). Use `.ers-full-screen-with-metanav-and-main-nav` to keep the main navigation of the website.

## Blue or White header

Add the class `.ers-blue-header` or `.ers-white-header` to the `.ers-wrapper` in order to change the color. The blue is intended for myERS the white for the ERS main website.

## Special test routes

Add to any url:
* `/white` to see the white header
* `/fullscreen` to see the website in fullscreen
* `/fullscreen-metanav` to see the website in fullscreen with the metanavigation only
* `/fullscreen-metanav-mainnav` to see the website in fullscreen with the metanavigation and the mainnavigation

You can see a "real" example here `/pages/fullpage`

## myCRM special features

You can fix the "tool bar" at the top. Just use a `.main-content` before the `.main-content`

```
  <div class="main-content content-fixed-top">
```

You can use an additional class to have the bar "full width" it has the original name: `.full-width`

This is the mandatory structure for it to work:

```
        <div class="main-content content-fixed-top">        
            <div class="row">
                <div class="col-sm-12">
                    <div class="panel [...]">
                        [...]
                    </div>  
                </div>        
            </div>
        </div>     
        <div class="main-content">
          [...]
```

you can wrap both `.main-content` in a `<form></form>` this won't brake the layout.

[Read the whole html](https://github.com/EuropeanRespiratorySociety/ERSTemplate-dev/blob/master/resources/views/crm/content.blade.php)

-------------------
## Change log

### What is new in 1.2.4
* Added the metanavigation as a "widget" in order to distribute it.
* Removed the REST Client from the `all.js`
* Fixed some JS for the metanav to work as a widget or native.

### What is new in 1.2.3
* Added news feed from the ERS API.
* Added new REST client library. 

### What is new in 1.2.2
* New fixed on the top container for myCRM. Be carefull this feature needs a change in the html structure

### What is new in 1.2.1
* New page: myCRM

### What is new in 1.2.0
* Stabilization update.The whole template is more robust.
* Added timline

### What is new in 1.1.15
* Added masonry/isotope/packary js lib
* Hot fixes for myERS production readyness

### What is new in 1.1.14
* New dropdown menu with clickable top level items (html change required)
* Hot fixes for myERS production readyness

### What is new in 1.1.13
* Main menu - Third menu level added to the main nav. (html change required)

### What is new in 1.1.12
* Numerous bug fixes on mobiles
* Dashboard - become a member - buttons fix -> Txt change, Read more... becomes More...
* Profile - Fixed profile image change/delete
* Mobile menu - Fixed :focus state
* Mobile menu - Fixed Site Title
* Mobile menu - Fixed Hamburger
* Mobile menu - language switcher
* Mobile menu - Notifications
* Monbile menu - Messages

### What is new in 1.1.11
* Resolved issue 5 (language switcher)
* The right menu icon can now be removed without breaking the design

### What is new in 1.1.10
* Dashboard - Added Popover to icons
* Dashboard - Removed overkill modal window on dashboard
* Dashboard - Congress certificate panel fix
* Dashboard - CME (portfolio) button change
* Dashboard - Chrome display bug for full link pannels

### What is new in 1.1.9
* New Metanavigation (sliding with small breadcrumb)
* Now HTTPS ready -> actually all is now https.
* Small fixes and experiments with contentful
* Ready for forking for corporate website.

### What is new in 1.1.8
* Newsfeed - All panels are now standardized
* Newsfeed - Each news can now be hidden
* Dashboard - fixed Reimbursment app
* Dashboard - Added Congress certificate panel @ToDo create a square image for the congress image
* Dashboard - Added CME summary card
* Dashboard - Vote now vertically aligned and no text.
* Dashboard - Fixed some titles.
* Added language switcher

### What is new in 1.1.7
* New feature: Guided tour
* Added Javascript Cookies
* Bug fix: Z-index on cards prevented to click buttons.
* Reimbursment app fix -> moved into a card with special tricks (fixed height like a panel, whole content of each slide is a link, etc.)
* Fixed card color for school cards.
* @ToDo fix login/signup for colors and weight.

### What is new in 1.1.6
* Bug fixes (Cards)

### What is new in 1.1.5
* New class for full screen website with metanavigation: `.ers-full-screen-with-metanav-and-main-nav` example on fullpage
* Added routing `*/fullscreen`, `*/fullscreen-metanav`, `*/fullscreen-metanav-mainnav`
* Changed the not connected dashboard page (newsfeed size, login panel, panels height)
* Modified the non-member dashboard (added modal on icon click, Added new panels)
* Modified the member dashboard (added hermes panel (member only))
* Added a new variation for member dashboards -> membership status
* Added new features in the news feed (Colored panels)
* Added new transparent buttons
* Added material design cards (UI) 

### What is new in 1.1.4
* New class for full screen website: `.ers-full-screen`
* New class for full screen website with metanavigation: `.ers-full-screen-with-metanav` example on fullpage
* bug fixes

### What is new in 1.1.3
* `.ers-main-nav-blue` has been renamed to `.ers-main-nav` it works with the white and blue header. 
* Gray border added on the left of the header for the white bar.

### What is new in 1.1.2
* New buttons color variations
* White header with specific param to add at the end of url `/white` it breaks the active and breadcrumb menus.

### What is new in 1.1.1
* Bug fix, select2 displays now correctly.
* Bug fix, multitag input displays now correctly.
* Bug fix, multitag select displays now correctly.
* Bug fix (temporary until nicer dropdown), contrast is now better for active links in dropdown.

### What is new in 1.1.0
* Dashboard
* Few bug fixes

### What is new in 1.0.1
* Errors example for signup/login forms
* Ads section with animations on signup/login pages
* Neutral image for users with no profile image
* Metanavigation first draft.  


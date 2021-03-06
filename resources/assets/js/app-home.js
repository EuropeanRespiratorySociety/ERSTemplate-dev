var App = (function () {
  'use strict';
  
  App.home = function( ){

    //var alt2 = App.color.assemblies_odd;
    var assemblies1 = App.color.assemblies1;
    var assemblies2 = App.color.assemblies2;
    var scientific = App.color.scientific;
    var alt1 = App.color.alt1;

    $('#fullpage').fullpage({
        //Navigation
        menu: '',
        lockAnchors: false,
        anchors: [
            'home', 
            'latest-news', 
            'community', 
            'scientific-and-educational-events', 
            'publications', 
            'professional-development',
            'research', 
            'advocacy', 
            'elf'
        ],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: [
            'Home', 
            'Latest News', 
            'ERS community', 
            'Scientific and Educational events', 
            'Publications', 
            'Professional Development', 
            'Research', 
            'Raising the profile of respiratory health', 
            'ELF'
            
        ],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'top',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: false,
        fitToSection: false,
        fitToSectionDelay: 1000,
        scrollBar: true, //needs to be true for WOW to work
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: false,
        resize : false,
        sectionsColor : [assemblies1, assemblies2, assemblies1, assemblies2, assemblies2, assemblies1, assemblies2, assemblies1, assemblies2],
        paddingTop: '0px',
        paddingBottom: '0px',
        fixedElements: '#fixed-top-bar, .fixed-main-nav',
        responsiveWidth: 765,
        responsiveHeight: 0,

        //Custom selectors 
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });

  };

    function setHeight(){
        var els = document.querySelectorAll(".home-news");
        console.log(els);
        var height = 0;
        for (var i = 0; i < els.length; i++) {
            if (height < els[i].offsetHeight){
                height = els[i].offsetHeight;
            }
        }

        for (var i = 0; i < els.length; i++) {
            els[i].style.height = height +  "px";
        }

    }

    // listen for events
    window.addEventListener("load", setHeight);
    window.addEventListener("resize", setHeight);

  return App;
})(App || {});

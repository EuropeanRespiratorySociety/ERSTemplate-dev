var App = (function () {
  'use strict';
  
  App.policyAreas = function( ){

    //var alt2 = App.color.assemblies_odd;
    var assemblies1 = App.color.assemblies1;
    var assemblies2 = App.color.assemblies2;
    var scientific = App.color.scientific;
    var alt1 = App.color.alt1;

    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: [
        	'policy-areas',
            'tobacco-control', 
            'environment-and-health', 
            'science-and-healthcare', 
            'tuberculosis', 
            'chronic-diseases',
            'ers-presidential-summits'                             
        ],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: [
            'Policy areas',
            'Tobacco control',
            'Environment and health', 
            'Science and healthcare', 
            'Tuberculosis',
            'Chronic diseases',  
            'ERS Presidential Summits'            
        ],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

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
        sectionsColor : [assemblies1, assemblies2, assemblies1, assemblies2, assemblies1, assemblies2, assemblies1],
        paddingTop: '0px',
        paddingBottom: '40px',
        fixedElements: '#header, .footer',
        responsiveWidth: 765,
        responsiveHeight: 0,

        //Custom selectors 
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){
            /*var leavingSection = $(this);

            //after leaving section 2
            if(index == 1 && direction =='down'){
                $('div.ers-wrapper').addClass('ers-full-screen-with-metanav');
            }

            else if(index == 2 && direction == 'up'){
                $('div.ers-wrapper').removeClass('ers-full-screen-with-metanav');           

            }*/
        
        },
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });

  };

  return App;
})(App || {});

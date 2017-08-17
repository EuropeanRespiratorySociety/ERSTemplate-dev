var App = (function () {
    'use strict';
    App.timeline = function( ){
        // define variables
        var items = document.querySelectorAll(".timeline li.event");

        function setHeight(){
            var els = document.querySelectorAll(".event");
            for (var i = 0; i < els.length; i++) {
                var height = els[i].children[0].offsetHeight;
                els[i].style.height = height + 20 + "px";
            }
        }

        function setWidth(){
            var width = document.querySelector('.timeline').offsetWidth - 100;
            var els = document.querySelectorAll(".card-container");
            for (var i = 0; i < els.length; i++) {
                els[i].style.width = width + "px";
            }
        }

        // check if an element is in viewport
        // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function callbackFunc() {
            setHeight();
            setWidth();
            for (var i = 0; i < items.length; i++) {
                if (isElementInViewport(items[i])) {
                    items[i].classList.add("in-view");
                }
            }
        }

        // listen for events
        window.addEventListener("load", callbackFunc);
        window.addEventListener("resize", callbackFunc);
        window.addEventListener("scroll", callbackFunc);
    };
    return App;
})(App || {});

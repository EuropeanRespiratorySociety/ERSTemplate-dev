  /*
  * This file fixes the multicolumn layout of the main menu
  *
 */
 
  // Get IE or Edge browser version
    var version = detectIE();

    if (version !== false) {
      $('.horizontal > .dropdown-menu > li').css('min-width', '50%');
      $('.horizontal > .dropdown-menu > li').css('flex', '1 0 auto');
      $('.horizontal > .dropdown-menu').css('width', '250px');
    }

    function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}
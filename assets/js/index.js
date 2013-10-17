//========================================================================
// 1. This begins the jquery.
// 2. This script animates the menu in when the icon is clicked/pressed
// ========================================================================
(function ($) {
  "use strict";

  $(document).ready(function(){

    var menuT = $('.menu-trigger')
      , menu = $('.menu')
      , menuLi = $('.menu .vertical')
      // the Toggle defines if the menu is open: 1 == closed, 0 == open
      , toggle = 1
      , paragraph = $('p')
      , re = /(?!;)(.*)(?=;;)/;
    paragraph.each(function(e) {
      if (re.test(paragraph.eq(e).text())) {
        var test = paragraph.eq(e).text().match(re);
        paragraph.eq(e).text($(this).text().replace(/(;;)(.*)(;;)/, ''));
      }
    });

    // menu logic
    // uncomment css jquery and recomment the jquery to use css transitions
    function menuStuff() {
      if (toggle === 1) {
        menu.css('display', 'table');
        setTimeout(function() {
          // menu.css('opacity', 1);
          menu.stop().animate({opacity: 1}, 200);
          // menuLi.css('left', '0');
          menuLi.stop().animate({left: 0}, 200);
          toggle = 0;
        }, 100);
      }
      if (toggle === 0) {
        // menu.css('opacity', 0);
        menu.stop().animate({opacity: 0}, 200);
        // menuLi.css('left', '-40px');
        menuLi.stop().animate({left: '-40px'}, 200);
        setTimeout(function() {
          menu.css('display', 'none');
        }, 600);
        toggle = 1;
      }
    }
    //Calls the function below. If the window is large, mouseout is implemented
    //  to close menu.
    $(menuT, menu).on("click", menuStuff);
    if ($(window).width() >= 480) {
      $(menu).mouseleave(menuStuff);
    }
    else {
      $(menu).on("click", menuStuff);
    }

    // ========================================================================
    //  1. This script links the onclick() function the "Scroll To"
    //     link on each post implements. It just animates a scroll
    //     down of the screen to the main post.
    // ========================================================================
    function scrollIt(element, to, duration) {
      element.animate({scrollTop: to}, duration);
    }
    $('#scroll').click(function() {
      scrollIt($('body, html'), $(window).height(), 200);
    });
    $('.up-top').click(function() {
      scrollIt($('body, html'), 0, 200);
    });

  });
}(jQuery));
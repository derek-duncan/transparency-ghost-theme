// ========================================================================
//  1. This script expands post images beyond the .content width
//     as long as their height is not greater than their width.
// ========================================================================
(function ($) {
  "use strict";
  $(document).ready(function(){
    var paragraph = $('.content p')
      , re = /(?!;)(.*)(?=;;)/;
    // nested for loops to sift through images in the post.
    // Just don't worry about it
    paragraph.each(function(e) {
      if (paragraph.eq(e).find('img')) {
        var element = paragraph.eq(e).find('img');
        if (element.length > 0) {
          $(paragraph.eq(e).append('<p style="font-size: 0.8em; font-style: italics;">' + element.attr('alt') + '</p>'));
        }
        if (element.width() >= element.height()) {
          //calculated width expansion for screen width
          element.width("142.9%");
          element.height("100%");
          //Offset Margin to compensate for width
          element.css('margin-left', "-21.5%");
        }
      }
      if (re.test(paragraph.eq(e).text())) {
        var test = paragraph.eq(e).text().match(re);
        $('.post-header').css('background', '#' + test[0]);
        paragraph.eq(e).text($(this).text().replace(/(;;)(.*)(;;)/, ''));
      }
    });
  });
}(jQuery));

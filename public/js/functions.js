$(function() {
  smoothScroll(300);
  $(".header .title").fitText(1.2, { minFontSize: '25px', maxFontSize: '75px' });
  mobileNav();
  $(window).scroll(navSlide);
});

function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
    else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });
}

function smoothScroll (duration) {
  $('a[href^="#"]').on('click', function(event) {

      var target = $( $(this).attr('href') );

      if( target.length ) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top
          }, duration);
      }
  });
}

function navSlide() {
  var $nav_header = $('.navBar');
  var navBar_height = $('.navBar').height(),
    header_height = $('.header').height(),
    offset_val = header_height - navBar_height;
  var scroll_top = $(window).scrollTop();
  if(scroll_top >= offset_val) {
    $nav_header.addClass('is-scrollable');
    $('.title').css('margin-top', '0px');
  } else {
    $nav_header.removeClass('is-scrollable');
  }
}

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
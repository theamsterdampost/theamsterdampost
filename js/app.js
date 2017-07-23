// default functions
$(function() {

  // sign-up modal
  $("a[href='/sign-up-modal']").on("click", function(event) {
    event.preventDefault();
    $("section.full_screen_overlay").addClass("is_visible")
    $("body").css({
      'position':'relative',
      'max-height':'100vh',
      'overflow':'hidden'
    });
    $("section.modal_wrap").addClass("is_visible");
    setTimeout(function() {
      $("section.default_sign_up_modal").addClass("is_visible");
    }, 300);
  });

  $("a[href='/close-sign-up-modal']").on("click", function(event) {
    event.preventDefault();
    $("section.default_sign_up_modal").removeClass("is_visible");
    setTimeout(function() {
      $("section.full_screen_overlay").removeClass("is_visible")
      $("body").css({
        'position':'static',
        'max-height':'auto',
        'overflow':'visible'
      });
      $("section.modal_wrap").removeClass("is_visible");
    }, 300);
  });

  // mobile navigation
  $("a[href='/open-mobile-navigation']").on("click", function(event) {
    event.preventDefault();
    $("nav.header_navigation").toggleClass("is_visible");
    $(this).toggleClass("add_background");
  });
  $("a[href='/open-mobile-fixed-navigation']").on("click", function(event) {
    event.preventDefault();
    $("nav.fixed_header_navigation").toggleClass("is_visible");
  });

  // smooth scroll
  $("a[href^='#']").on("click", function(event) {

    var target = $( $(this).attr("href") );

    if( target.length ) {
      event.preventDefault();
      $("body, html").animate({
        scrollTop: ( target.offset().top - 60 )
      }, 300);
    }

  });

});

// window scroll functions
$(window).scroll(function() {

  var wScroll = $(this).scrollTop();

  // full screen hero
  $("section.full_screen_hero, section.issues_hero").css({
    'background-position':'center '+ wScroll / 2 +'px'
  });

  // fixed header visible
  if( wScroll >= ( $(window).height() / 2 ) ) {
    $("header.default_fixed_header").addClass("is_visible");
  } else {
    $("header.default_fixed_header").removeClass("is_visible");
  }

  if( wScroll <= ( $(window).height() / 2 ) && $("nav.fixed_header_navigation").hasClass("is_visible") ) {
    $("nav.fixed_header_navigation").removeClass("is_visible");
  }

});

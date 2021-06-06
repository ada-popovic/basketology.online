/* HOME FILTERS */

$(function() {

  $('.item-container').addClass('inactive');

  function checkChecked(){
    $("#filters :checkbox:checked").each(function() {
      $("." + $(this).val()).removeClass('inactive');
    });
  }

  checkChecked();

  $("#filters :checkbox").click(function() {
    $(".item-container").addClass('inactive');
    checkChecked();
  });

});

/* AJAX */

$(function() {

  function menuActive() { // Function to toggle active menu links
      $('.menu a').removeClass('is-active'); // Remove "active" class on menu links after an ajax call
      var pgurl = window.location.href; // Get the page url
  // var pguri = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
  // "uri" gets only the link folder while "url" gets the entire link
  // Left here in case anyone out there uses $p->uri() on the menu
      $(".menu a").each(function () {
          if ($(this).attr("href") == pgurl || $(this).attr("href") == '') { // Compare url to links
              $(this).addClass("is-active"); // Set "active" class on menu links
              $(this).parents('li').children('a').addClass('is-active'); // Set "active" class on the parent of submenu links
          }
      });
  }

  // Requires jQuery 1.7+ to utilize the new "on" event attachment
  $("body").on("click", "a", function (event) {
      $.pjax({
          "url": $(this).attr("href"),
          "fragment": "#pjax-container",
          "container": "#pjax-container",
          "complete": function (data) { // Want to do something else? Left here for reasons
          }
      });
      event.preventDefault();
  });

  $(document).on('pjax:start', function () {
      NProgress.start(); // Start the nprogress bar
  });
  $(document).on('pjax:end', function () {
      NProgress.done(); // End the nprogress bar
      menuActive(); // Update the "active" class on links after ajax call
      checkIfLightbox();
      setTimeout(fadeLightbox, 100);
  });
  $(document).ready(menuActive); // Update the "active" class on links on first load

  /* LIGHTBOX POSITIONING AND LINKING */

  // Laurel's scroll stuff, lightbox positioning, lightbox linking

  $.pjax.defaults.scrollTo = false;

  var tempScrollTop = $(window).scrollTop();

  $(window).scroll(function (event) {
      tempScrollTop = $(window).scrollTop();
  });

  function checkIfLightbox(){

    if ($('.menu .is-active').length){
      $('a.background-lightbox').show();
      $('#can-be-fixed').addClass('fixed');
      // $('#pjax-container').css('top', tempScrollTop);
      $('#pjax-container').addClass('scroll');
      // $('body').css('overflow', 'hidden');
    }

    else {
      $('a.background-lightbox').hide();
      $('#can-be-fixed').removeClass('fixed');
      $('#pjax-container').removeClass('scroll');
      // $('body').css('overflow', 'scroll');
    }

  }

  /* SCROLL TO TOP */

  $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
  });

  /* FADE IN BLURRY STUFF */

  setTimeout(function(){
    $('nav.menu').css('opacity', '1');
    $('.publication-container, .event-container').css('opacity', '1');
  }, 250);

  function fadeLightbox(){
    $('.publication-container, .event-container').css('opacity', '1');
  }

});

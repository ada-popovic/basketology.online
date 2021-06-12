$(document).ready(function() {

  // ANIMATE FLOATING STORIES

  animateDiv('.story-1');
  animateDiv('.story-2');
  animateDiv('.story-3');
  animateDiv('.story-4');

  // fixing the touch event
  var eventname = 'click';
  if (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0))
    eventname = 'touchstart';


  // CLICK HOMEPAGE

  $('#home-button').on(eventname, function(event) {

    $('#about-button').css('-webkit-filter', 'blur(3px)');
    $('#podcast-button').css('-webkit-filter', 'blur(3px)');
    $('.about-section').css('display', 'none');
    $('.podcast-section').css('display', 'none');
    $('.accordion-content').css('display', 'none');
    $('#background-video').css('-webkit-filter', 'blur(0px)');

  });

// CLICK BACKGROUND

  $('#background-video').on(eventname, function(event) {
    $('#background-video').css('-webkit-filter', 'blur(0px)');
  });

  $('#background-video').on(eventname, function(event) {

    $('#about-button').css('-webkit-filter', 'blur(3px)');
    $('#podcast-button').css('-webkit-filter', 'blur(3px)');
    $('.about-section').css('display', 'none');
    $('.podcast-section').css('display', 'none');
    $('.accordion-content').css('display', 'none');

  });

  // CLICK ABOUT
  $('#about-button').on(eventname, function(event) {
    if ($('#background-video').css('-webkit-filter') == 'blur(15px)') {
      $('#background-video').css('-webkit-filter', 'blur(0px)');
    }
      else if ($('#background-video').css('-webkit-filter') == 'blur(14px)') {
        $('#background-video').css('-webkit-filter', 'blur(15px)');
      }
      else {
      $('#background-video').css('-webkit-filter', 'blur(15px)');
    }

  });

  $('#podcast-button').on(eventname, function(event) {
    if ($('#background-video').css('-webkit-filter') == 'blur(14px)') {
      $('#background-video').css('-webkit-filter', 'blur(0px)');
    }
      else if ($('#background-video').css('-webkit-filter') == 'blur(15px)') {
        $('#background-video').css('-webkit-filter', 'blur(14px)');
      }
      else {
      $('#background-video').css('-webkit-filter', 'blur(14px)');
    }

  });

  $('#about-button').on(eventname, function(event) {

    if ($('#about-button').css('-webkit-filter') == 'blur(3px)') {
      $('#about-button').css('-webkit-filter', 'blur(0px)');
    } else {
      $('#about-button').css('-webkit-filter', 'blur(3px)');
    }

  });

  $('#about-button').on(eventname, function(event) {

    $('#dropdown-podcast').css('display', 'none');
    $('#podcast-button').css('-webkit-filter', 'blur(3px)');
  });

  $('#about-button').on(eventname, function(event) {

    if ($('.about-section').css('display') == 'inline-block') {
      $('.about-section').css('display', 'none');
    } else {
      $('.about-section').css('display', 'inline-block');
    }

  });


  // CLICK STORIES

  // CLICK FLOATING STORIES

  function makeNewPosition(myclass) {

    var h = $('#stories-container').height() - $(myclass).height();
    var w = $('#stories-container').width() - $(myclass).width();

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

  }

  function animateDiv(myclass) {
    var newq = makeNewPosition(myclass);
    var oldq = $(myclass).offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    $(myclass).animate({
      top: newq[0],
      left: newq[1]
    }, speed, function() {
      animateDiv(myclass);
    });

  };

  function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.03;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

  }


  // SHOW FLOATING STORIES

  function showStories() {
    var x = document.getElementById('stories-container');
    if (x.style.display === "none") {
      x.style.display = "inline-block";
    } else {
      x.style.display = "none";
    }
  }

  // ---------------------------

  // CLICK PODCAST
  // $('#podcast-button').on(eventname, function(event) {
  //   $('#background-video').css('-webkit-filter', 'blur(15px)');
  //
  // });

  $('#podcast-button').on(eventname, function(event) {

    if ($('#podcast-button').css('-webkit-filter') == 'blur(3px)') {
      $('#podcast-button').css('-webkit-filter', 'blur(0px)');
    } else {
      $('#podcast-button').css('-webkit-filter', 'blur(3px)');
    }

  });

  $('#podcast-button').on(eventname, function(event) {

    if ($('#dropdown-podcast').css('display') == 'inline-block') {
      $('#dropdown-podcast').css('display', 'none');
    } else {
      $('#dropdown-podcast').css('display', 'inline-block');
    }

  });

  $('#podcast-button').on(eventname, function(event) {

    $('.about-section').css('display', 'none');
    $('#about-button').css('-webkit-filter', 'blur(3px)');
  });



// ACCORDION

$('.accordion').on(eventname, function(event) {

  if ($('.accordion-content').css('display') == 'none') {
    $('.accordion-content').css('display', 'inline-block');
  } else {
    $('.accordion-content').css('display', 'none');
  }

});











});

$.fn.extend({
  disableSelection : function() {
    this.each(function() {
      this.onselectstart = function() {
        return false;
      };
      this.unselectable = "on";
      $(this).css('-moz-user-select', 'none');
      $(this).css('-webkit-user-select', 'none');
    });
  }
});


$(function() {
  $(this).disableSelection();
});
// var acc = document.getElementsByClassName("accordion");
// var i;
//
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//
//     this.classList.toggle("active");
//
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

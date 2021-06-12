$(document).ready(function () {
  // ANIMATE FLOATING STORIES

<<<<<<< HEAD
  // animateDiv(".story-1");
  // animateDiv(".story-2");
  // animateDiv(".story-3");
  // animateDiv(".story-4");
=======
  animateDiv('.story-1');
  // animateDiv('.story-2');
  // animateDiv('.story-3');
  // animateDiv('.story-4');
>>>>>>> 15197ce303d837d388b8acd9fb37607410faa714

  // fixing the touch event
  var eventname = "click";
  if (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  )
    eventname = "touchstart";

  // CLICK HOMEPAGE

  $("#home-button").on(eventname, function (event) {
    $("#about-button").css("-webkit-filter", "blur(3px)");
    $("#podcast-button").css("-webkit-filter", "blur(3px)");
    $(".about-section").css("display", "none");
    $(".podcast-section").css("display", "none");
    $(".accordion-content").css("display", "none");
    $("#background-video").css("-webkit-filter", "blur(0px)");
  });

  // CLICK BACKGROUND

  $("#background-video").on(eventname, function (event) {
    $("#background-video").css("-webkit-filter", "blur(0px)");
  });

  $("#background-video").on(eventname, function (event) {
    $("#about-button").css("-webkit-filter", "blur(3px)");
    $("#podcast-button").css("-webkit-filter", "blur(3px)");
    $(".about-section").css("display", "none");
    $(".podcast-section").css("display", "none");
    $(".accordion-content").css("display", "none");
  });

  // CLICK ABOUT
  $("#about-button").on(eventname, function (event) {
    if ($("#background-video").css("-webkit-filter") == "blur(15px)") {
      $("#background-video").css("-webkit-filter", "blur(0px)");
    } else if ($("#background-video").css("-webkit-filter") == "blur(14px)") {
      $("#background-video").css("-webkit-filter", "blur(15px)");
    } else {
      $("#background-video").css("-webkit-filter", "blur(15px)");
    }
  });

<<<<<<< HEAD
  $("#podcast-button").on(eventname, function (event) {
    if ($("#background-video").css("-webkit-filter") == "blur(14px)") {
      $("#background-video").css("-webkit-filter", "blur(0px)");
    } else if ($("#background-video").css("-webkit-filter") == "blur(15px)") {
      $("#background-video").css("-webkit-filter", "blur(14px)");
    } else {
      $("#background-video").css("-webkit-filter", "blur(14px)");
    }
  });
=======
>>>>>>> 15197ce303d837d388b8acd9fb37607410faa714

  $("#about-button").on(eventname, function (event) {
    if ($("#about-button").css("-webkit-filter") == "blur(3px)") {
      $("#about-button").css("-webkit-filter", "blur(0px)");
    } else {
      $("#about-button").css("-webkit-filter", "blur(3px)");
    }
  });

  $("#about-button").on(eventname, function (event) {
    $("#dropdown-podcast").css("display", "none");
    $("#podcast-button").css("-webkit-filter", "blur(3px)");
  });

  $("#about-button").on(eventname, function (event) {
    $(".about-section").toggle();
  });

  // CLICK STORIES

  $('#stories-trigger').on(eventname, function(event) {

    if ($('.story').css('display') == 'none') {
      $('.story').css('display', 'inline-block');
    } else {
      $('.story').css('display', 'none');
    }

  });

  $('#stories-trigger').on(eventname, function(event) {

    $('.stories-container').css('pointer-events', 'auto');

  });


  // CLICK FLOATING STORIES

  // Made the variables global so they can be used outside the first function if need be

  var nh;
  var nw;
  var h;
  var w;

  function makeNewPosition() {
    // I used window dimensions since the blobs are meant to be moving across the entire window
    // I used fixed values to make it easier to structure the animation and its parameters

    h = $(window).height() - 400;
    w = $(window).width() - 400;

    nh = Math.floor(Math.random() * h);
    nw = Math.floor(Math.random() * w);

    return [nh, nw];
  }

  // Loop through each story blob and randomise its location

  $(".story").each(function () {
    var newq = makeNewPosition();
    $(this).css({
      top: newq[0],
      left: newq[1],
    });
    //trigger animation function programmatically
    animateDiv(this);
  });

  function animateDiv(myclass) {
    var newq = makeNewPosition(myclass);
    $(myclass).animate(
      {
        top: newq[0],
        left: newq[1],
      },
      10000,
      function () {
        animateDiv(myclass);
      }
    );
  }

  // SHOW FLOATING STORIES

<<<<<<< HEAD
=======
  function showStories() {
    var x = document.getElementById('stories-container');
    if (x.style.display === "none") {
      x.style.display = "inline-block";
    } else {
      x.style.display = "none";
    }
  }

  $('.story-1').on(eventname, function(event) {
    $('.story-text-1').css('display', 'inline-block');
    $('.story-background-1').css('width', '20vw');
    $('.story-background-1').css('height', '20vw');
    $('.story-background-1').css('border-radius', '0%');
  });

>>>>>>> 15197ce303d837d388b8acd9fb37607410faa714
  // ---------------------------

  // CLICK PODCAST

  $("#podcast-button").on(eventname, function (event) {
    if ($("#podcast-button").css("-webkit-filter") == "blur(3px)") {
      $("#podcast-button").css("-webkit-filter", "blur(0px)");
    } else {
      $("#podcast-button").css("-webkit-filter", "blur(3px)");
    }
  });

<<<<<<< HEAD
  $("#podcast-button").on(eventname, function (event) {
    if ($("#dropdown-podcast").css("display") == "inline-block") {
      $("#dropdown-podcast").css("display", "none");
    } else {
      $("#dropdown-podcast").css("display", "inline-block");
=======
  $('#podcast-button').on(eventname, function(event) {

    $('.about-section').css('display', 'none');
    $('#about-button').css('-webkit-filter', 'blur(3px)');
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
>>>>>>> 15197ce303d837d388b8acd9fb37607410faa714
    }
  });

<<<<<<< HEAD
  $("#podcast-button").on(eventname, function (event) {
    $(".about-section").css("display", "none");
    $("#about-button").css("-webkit-filter", "blur(3px)");
  });
=======
  $('#podcast-button').on(eventname, function(event) {

   if ($('#dropdown-podcast').css('display') == 'inline-block') {
     $('#dropdown-podcast').css('display', 'none');
   } else {
     $('#dropdown-podcast').css('display', 'inline-block');
   }

 });
>>>>>>> 15197ce303d837d388b8acd9fb37607410faa714

  // ACCORDION

<<<<<<< HEAD
  $(".accordion").on(eventname, function (event) {
    if ($(".accordion-content").css("display") == "none") {
      $(".accordion-content").css("display", "inline-block");
    } else {
      $(".accordion-content").css("display", "none");
    }
  });
=======

// ACCORDION

$('.accordion').on(eventname, function(event) {

  if ($('.accordion-content').css('display') == 'none') {
    $('.accordion-content').css('display', 'inline-block');
  } else {
    $('.accordion-content').css('display', 'none');
  }

});

$('.accordion').on(eventname, function(event) {

  $('.accordion').css('background-color', 'var(--brown)');
  $('.accordion').css('border', '3px solid var(--brown)');

});











>>>>>>> 15197ce303d837d388b8acd9fb37607410faa714
});

$.fn.extend({
  disableSelection: function () {
    this.each(function () {
      this.onselectstart = function () {
        return false;
      };
      this.unselectable = "on";
      $(this).css("-moz-user-select", "none");
      $(this).css("-webkit-user-select", "none");
    });
  },
});

$(function () {
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

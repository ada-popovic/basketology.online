$(document).ready(function () {

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

  $('#home-button').on(eventname, function (event) {

    $('#about-button').css('-webkit-filter', 'blur(3px)');
    $('#podcast-button').css('-webkit-filter', 'blur(3px)');
    $('.about-section').css('display', 'none');
    $('.podcast-section').css('display', 'none');
    $('.accordion-content').css('display', 'none');
    $('#background-video').css('-webkit-filter', 'blur(0px)');

  });

  // CLICK BACKGROUND

  $('#background-video').on(eventname, function (event) {
    $('#background-video').css('-webkit-filter', 'blur(0px)');
  });

  $('#background-video').on(eventname, function (event) {

    $('#about-button').css('-webkit-filter', 'blur(3px)');
    $('#podcast-button').css('-webkit-filter', 'blur(3px)');
    $('.about-section').css('display', 'none');
    $('.podcast-section').css('display', 'none');
    $('.accordion-content').css('display', 'none');

  });

  // CLICK ABOUT
  $('#about-button').on(eventname, function (event) {
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


  $('#about-button').on(eventname, function (event) {

    if ($('#about-button').css('-webkit-filter') == 'blur(3px)') {
      $('#about-button').css('-webkit-filter', 'blur(0px)');
    } else {
      $('#about-button').css('-webkit-filter', 'blur(3px)');
    }

  });

  $('#about-button').on(eventname, function (event) {

    $('#dropdown-podcast').css('display', 'none');
    $('#podcast-button').css('-webkit-filter', 'blur(3px)');
  });

  $('#about-button').on(eventname, function (event) {

    if ($('.about-section').css('display') == 'inline-block') {
      $('.about-section').css('display', 'none');
    } else {
      $('.about-section').css('display', 'inline-block');
    }

  });


  // CLICK STORIES

  $('#stories-trigger').on(eventname, function (event) {

    if ($('.story').css('display') == 'none') {
      $('.story').css('display', 'inline-block');
    } else {
      $('.story').css('display', 'none');
    }

  });

  $('#stories-trigger').on(eventname, function (event) {

    $('.stories-container').css('pointer-events', 'auto');

  });


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
    }, speed, function () {
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

  $('.story-1').on(eventname, function (event) {
    $('.story-text-1').css('display', 'inline-block');
    $('.story-background-1').css('width', '20vw');
    $('.story-background-1').css('height', '20vw');
    $('.story-background-1').css('border-radius', '0%');
  });

  // ---------------------------

  // CLICK PODCAST

  $('#podcast-button').on(eventname, function (event) {

    if ($('#podcast-button').css('-webkit-filter') == 'blur(3px)') {
      $('#podcast-button').css('-webkit-filter', 'blur(0px)');
    } else {
      $('#podcast-button').css('-webkit-filter', 'blur(3px)');
    }


  });

  $('#podcast-button').on(eventname, function (event) {

    $('.about-section').css('display', 'none');
    $('#about-button').css('-webkit-filter', 'blur(3px)');
  });

  $('#podcast-button').on(eventname, function (event) {
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

  $('#podcast-button').on(eventname, function (event) {

    if ($('#dropdown-podcast').css('display') == 'inline-block') {
      $('#dropdown-podcast').css('display', 'none');
    } else {
      $('#dropdown-podcast').css('display', 'inline-block');
    }

  });



  // ACCORDION

  $('.accordion').on(eventname, function (event) {

    if ($('.accordion-content').css('display') == 'none') {
      $('.accordion-content').css('display', 'inline-block');
    } else {
      $('.accordion-content').css('display', 'none');
    }

  });

  $('.accordion').on(eventname, function (event) {

    $('.accordion').css('background-color', 'var(--brown)');
    $('.accordion').css('border', '3px solid var(--brown)');

  });

  playPodcasts();


});

function playPodcasts() {
  const podcasts = document.querySelectorAll('.accordion');

  podcasts.forEach(podcast => {
    const audio = podcast.getElementsByClassName('audio')[0];
    const playButton = podcast.getElementsByClassName('play-button')[0];
    const pauseButton = podcast.getElementsByClassName('pause-button')[0];
    const playhead = podcast.getElementsByClassName('playhead')[0];
    const elapsedTime = podcast.getElementsByClassName('elapsed-time')[0];

    // write logic for when the sound is playing inside this function
    playButton.addEventListener('click', () => {
      // stop all other players if active
      podcasts.forEach(podcast => {
        const audio = podcast.getElementsByClassName('audio')[0];
        audio.pause();
      })

      audio.play();
      playButton.classList.toggle('active');
      pauseButton.classList.toggle('active');
    });

    // write logic for when the sound has stopped inside this function
    pauseButton.addEventListener('click', () => {
      audio.pause();
      playButton.classList.toggle('active');
      pauseButton.classList.toggle('active');
    });

    audio.addEventListener("playing", () => {
      setInterval(() => {
        let currentPos = audio.currentTime / audio.duration * 100;
        playhead.style.width = `${currentPos}%`;
        elapsedTime.innerText = millisToMinutesAndSeconds(audio.currentTime * 1000);
      }, 20)
    });

  });

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
}

$.fn.extend({
  disableSelection: function () {
    this.each(function () {
      this.onselectstart = function () {
        return false;
      };
      this.unselectable = "on";
      $(this).css('-moz-user-select', 'none');
      $(this).css('-webkit-user-select', 'none');
    });
  }
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

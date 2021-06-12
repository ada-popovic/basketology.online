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

  $('.story-1').on(eventname, function(event) {
    $('.story-text-1').css('display', 'inline-block');
    $('.story-background-1').css('width', '20vw');
    $('.story-background-1').css('height', '20vw');
    $('.story-background-1').css('border-radius', '0%');
  });

  // ---------------------------

  // CLICK PODCAST

  $('#podcast-button').on(eventname, function(event) {

    if ($('#podcast-button').css('-webkit-filter') == 'blur(3px)') {
      $('#podcast-button').css('-webkit-filter', 'blur(0px)');
    } else {
      $('#podcast-button').css('-webkit-filter', 'blur(3px)');
    }

  });

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
    }

  });

  $('#podcast-button').on(eventname, function(event) {

   if ($('#dropdown-podcast').css('display') == 'inline-block') {
     $('#dropdown-podcast').css('display', 'none');
   } else {
     $('#dropdown-podcast').css('display', 'inline-block');
   }

 });



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


// AUDIO PLAYER -1

// var canvasWidth = 500
// var audioEl = document.getElementById("audio")
// var canvas = document.getElementById("progress").getContext('2d')
// var ctrl = document.getElementById('audioControl')
//
// audioEl.addEventListener('loadedmetadata', function() {
//   var duration = audioEl.duration
//   var currentTime = audioEl.currentTime
//   document.getElementById("duration").innerHTML = convertElapsedTime(duration)
//   document.getElementById("current-time").innerHTML = convertElapsedTime(currentTime)
//   canvas.fillRect(0, 0, canvasWidth, 50);
// });
//
// function togglePlaying() {
//
//   var play = ctrl.innerHTML === 'Play'
//   var method
//
//   if (play) {
//     ctrl.innerHTML = 'Pause'
//     method = 'play'
//   } else {
//     ctrl.innerHTML = 'Play'
//     method = 'pause'
//   }
//
//   audioEl[method]()
//
// }
//
// function updateBar() {
//   canvas.clearRect(0, 0, canvasWidth, 50)
//   canvas.fillStyle = "white";
//   canvas.fillRect(0, 0, canvasWidth, 50)
//
//   var currentTime = audioEl.currentTime
//   var duration = audioEl.duration
//
//   if (currentTime === duration) {
//     ctrl.innerHTML = "Play"
//   }
//
//   document.getElementById("current-time").innerHTML = convertElapsedTime(currentTime)
//
//   var percentage = currentTime / duration
//   var progress = (canvasWidth * percentage)
//   canvas.fillStyle = "lime"
//   canvas.fillRect(0, 0, progress, 50)
// }
//
// function convertElapsedTime(inputSeconds) {
//   var seconds = Math.floor(inputSeconds % 60)
//   if (seconds < 10) {
//     seconds = "0" + seconds
//   }
//   var minutes = Math.floor(inputSeconds / 60)
//   return minutes + ":" + seconds
// }

// AUDIO PLAYER -2

// var timer;
// var percent = 0;
// var audio = document.getElementById("audio");
// audio.addEventListener("playing", function(_event) {
//   var duration = _event.target.duration;
//   advance(duration, audio);
// });
// audio.addEventListener("pause", function(_event) {
//   clearTimeout(timer);
// });
// var advance = function(duration, element) {
//   var progress = document.getElementById("progress");
//   increment = 10/duration
//   percent = Math.min(increment * element.currentTime * 10, 100);
//   progress.style.width = percent+'%'
//   startTimer(duration, element);
// }
// var startTimer = function(duration, element){
//   if(percent < 100) {
//     timer = setTimeout(function (){advance(duration, element)}, 100);
//   }
// }
//
// function togglePlay (e) {
//   e = e || window.event;
//   var btn = e.target;
//   if (!audio.paused) {
//     btn.classList.remove('active');
//     audio.pause();
//     isPlaying = false;
//   } else {
//     btn.classList.add('active');
//     audio.play();
//     isPlaying = true;
//   }
// }

// AUDIO PLAYER -3

//
// const audioPlayer = document.querySelector(".audio-player");
// const audio = new Audio(
//   "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"
// );
// //credit for song: Adrian kreativaweb@gmail.com
//
// console.dir(audio);
//
// audio.addEventListener(
//   "loadeddata",
//   () => {
//     audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
//       audio.duration
//     );
//     audio.volume = .75;
//   },
//   false
// );
//
// //click on timeline to skip around
// const timeline = audioPlayer.querySelector(".timeline");
// timeline.addEventListener("click", e => {
//   const timelineWidth = window.getComputedStyle(timeline).width;
//   const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
//   audio.currentTime = timeToSeek;
// }, false);
//
// //click volume slider to change volume
// const volumeSlider = audioPlayer.querySelector(".controls .volume-slider");
// volumeSlider.addEventListener('click', e => {
//   const sliderWidth = window.getComputedStyle(volumeSlider).width;
//   const newVolume = e.offsetX / parseInt(sliderWidth);
//   audio.volume = newVolume;
//   audioPlayer.querySelector(".controls .volume-percentage").style.width = newVolume * 100 + '%';
// }, false)
//
// //check audio percentage and update time accordingly
// setInterval(() => {
//   const progressBar = audioPlayer.querySelector(".progress");
//   progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
//   audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
//     audio.currentTime
//   );
// }, 500);
//
// //toggle between playing and pausing on button click
// const playBtn = audioPlayer.querySelector(".controls .toggle-play");
// playBtn.addEventListener(
//   "click",
//   () => {
//     if (audio.paused) {
//       playBtn.classList.remove("play");
//       playBtn.classList.add("pause");
//       audio.play();
//     } else {
//       playBtn.classList.remove("pause");
//       playBtn.classList.add("play");
//       audio.pause();
//     }
//   },
//   false
// );
//
// audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
//   const volumeEl = audioPlayer.querySelector(".volume-container .volume");
//   audio.muted = !audio.muted;
//   if (audio.muted) {
//     volumeEl.classList.remove("icono-volumeMedium");
//     volumeEl.classList.add("icono-volumeMute");
//   } else {
//     volumeEl.classList.add("icono-volumeMedium");
//     volumeEl.classList.remove("icono-volumeMute");
//   }
// });
//
// //turn 128 seconds into 2:08
// function getTimeCodeFromNum(num) {
//   let seconds = parseInt(num);
//   let minutes = parseInt(seconds / 60);
//   seconds -= minutes * 60;
//   const hours = parseInt(minutes / 60);
//   minutes -= hours * 60;
//
//   if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
//   return `${String(hours).padStart(2, 0)}:${minutes}:${String(
//     seconds % 60
//   ).padStart(2, 0)}`;
// }










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
